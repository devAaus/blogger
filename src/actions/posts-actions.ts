"use server"

import { postFormSchema } from "@/lib/validations/post"
import { prisma } from "@/server/db"
import slugify from "slugify"
import { currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"

export async function incrementPostViews(slug: string) {
   try {
      await prisma.post.update({
         where: { slug },
         data: { views: { increment: 1 } },
      })
   } catch (error) {
      console.error("Error incrementing post views:", error)
   }
}

export async function getAllPosts() {
   return await prisma.post.findMany({
      include: { category: true, author: true },
      orderBy: { createdAt: "desc" },
   })
}

export async function getPostBySlug(slug: string) {
   const post = await prisma.post.findUnique({
      where: { slug },
      include: { category: true, author: true },
   })

   if (!post) {
      throw new Error(`Post with slug "${slug}" not found`)
   }
   return post
}

export async function getPostsByUsername(username: string) {
   const user = await prisma.author.findUnique({
      where: { userName: username },
      select: { id: true },
   })

   if (!user) {
      throw new Error(`User "${username}" not found`)
   }

   return await prisma.post.findMany({
      where: { authorId: user.id },
      include: { category: true, author: true },
      orderBy: { createdAt: "desc" },
   })
}

export async function getCurrentUserPosts() {
   const user = await currentUser();
   if (!user) {
      throw new Error("Current user not found");
   }

   // Fetch posts and stats
   const posts = await prisma.post.findMany({
      where: { authorId: user.id },
      include: { category: true, author: true },
      orderBy: { createdAt: "desc" },
   });

   const totalPosts = posts.length;
   const totalViews = posts.reduce((sum, post) => sum + (post.views || 0), 0);

   return {
      posts,
      stats: {
         totalPosts,
         totalViews,
      }
   };
}


export async function createPost(formData: FormData) {
   const user = await currentUser()
   if (!user) {
      throw new Error("User not found")
   }

   const data = {
      title: formData.get("title"),
      excerpt: formData.get("excerpt"),
      content: formData.get("content"),
      imageUrl: formData.get("imageUrl"),
      categorySlug: formData.get("categorySlug"),
   }

   const validatedData = postFormSchema.parse(data)

   let slug = slugify(validatedData.title, { lower: true, strict: true })

   // Ensure unique slug
   const existingCount = await prisma.post.count({ where: { slug: { startsWith: slug } } })
   if (existingCount > 0) {
      slug += `-${existingCount}`
   }

   await prisma.post.create({
      data: {
         title: validatedData.title,
         slug,
         excerpt: validatedData.excerpt,
         content: validatedData.content,
         imageUrl: validatedData.imageUrl,
         categorySlug: validatedData.categorySlug,
         authorId: user.id,
      },
   })

   return { success: true, message: "Post created successfully" }
}

export async function updatePost(id: string, formData: FormData) {
   const user = await currentUser()
   if (!user) {
      throw new Error("User not found")
   }

   const existingPost = await prisma.post.findUnique({
      where: { id },
   })

   if (!existingPost) {
      throw new Error("Post not found")
   }

   if (existingPost.authorId !== user.id) {
      throw new Error("You are not authorized to update this post")
   }

   const data = {
      title: formData.get("title"),
      excerpt: formData.get("excerpt"),
      content: formData.get("content"),
      imageUrl: formData.get("imageUrl"),
      categorySlug: formData.get("categorySlug"),
   }

   const validatedData = postFormSchema.parse(data)

   let slug = existingPost.slug
   if (validatedData.title !== existingPost.title) {
      slug = slugify(validatedData.title, { lower: true, strict: true })

      // Ensure unique slug if title changes
      const existingCount = await prisma.post.count({ where: { slug: { startsWith: slug } } })
      if (existingCount > 0) {
         slug += `-${existingCount}`
      }
   }

   await prisma.post.update({
      where: { id },
      data: {
         title: validatedData.title,
         slug,
         excerpt: validatedData.excerpt,
         content: validatedData.content,
         imageUrl: validatedData.imageUrl,
         categorySlug: validatedData.categorySlug,
      },
   })

   revalidatePath(`/post/${slug}`)

   return { success: true, message: "Post updated successfully" }
}

export async function deletePost(id: string) {
   const post = await prisma.post.findUnique({ where: { id } })
   if (!post) {
      throw new Error(`Post with ID "${id}" not found`)
   }

   await prisma.post.delete({ where: { id } })
   revalidatePath("/author/dashboard")

   return { success: true, message: "Post deleted successfully" }
}
