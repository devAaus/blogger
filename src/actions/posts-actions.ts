"use server"

import { postFormSchema } from "@/lib/validations/post"
import { prisma } from "@/server/db"
import slugify from "slugify"
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from "next/cache"


export async function incrementPostViews(slug: string) {
   await prisma.post.update({
      where: {
         slug,
      },
      data: {
         views: {
            increment: 1,
         },
      },
   })
}

export async function getAllPosts() {
   const posts = await prisma.post.findMany({
      include: {
         category: true,
         author: true,
      },
      orderBy: { createdAt: "desc" },
   })

   return posts;
}

export async function getPostBySlug(slug: string) {
   await incrementPostViews(slug)
   return await prisma.post.findUnique({
      where: {
         slug,
      },
      include: {
         category: true,
         author: true,
      },
   })
}


export async function getPostsByUsername(username: string) {
   const user = await prisma.author.findUnique({
      where: { userName: username },
      select: { id: true },
   })

   if (!user) {
      throw new Error("User not found")
   }

   return await prisma.post.findMany({
      where: { authorId: user.id },
      include: {
         category: true,
         author: true,
      },
      orderBy: { createdAt: "desc" },
   })
}


export async function getCurrentUserPosts() {
   const user = await currentUser()
   if (!user) {
      throw new Error("User not found")
   }

   // Get posts created by the current user
   return await prisma.post.findMany({
      where: {
         authorId: user.id,
      },
      include: {
         category: true,
         author: true,
      },
      orderBy: { createdAt: "desc" },
   })
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
   let existingPost = await prisma.post.findUnique({
      where: { slug },
   })

   // If slug exists, append a random number
   while (existingPost) {
      const randomNum = Math.floor(1000 + Math.random() * 9000) // Generates a 4-digit random number
      slug = `${slug}-${randomNum}`

      existingPost = await prisma.post.findUnique({
         where: { slug },
      })
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

   return {
      success: true,
      message: "Post created successfully",
   }
}

export async function deletePost(id: string) {
   const post = await prisma.post.findUnique({
      where: { id },
   })
   if (!post) {
      throw new Error("Post not found")
   }
   await prisma.post.delete({
      where: { id },
   })
   revalidatePath("/author/dashboard")
   return {
      success: true,
      message: "Post deleted successfully",
   }
}
