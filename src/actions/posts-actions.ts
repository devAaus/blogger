"use server"

import { postFormSchema } from "@/lib/validations/post"
import { prisma } from "@/server/db"
import slugify from "slugify"
import { currentUser } from '@clerk/nextjs/server'
import { getUserById } from "./users-actions"


export async function getAllPosts() {
   const posts = await prisma.post.findMany({
      include: {
         category: true,
      },
      orderBy: { createdAt: "desc" },
   })

   // Fetch user details from Clerk for each post's userId
   const postsWithUserDetails = await Promise.all(
      posts.map(async (post) => {
         // Fetch user details from Clerk using the userId
         const user = await getUserById(post.userId)
         return {
            ...post,
            user
         }
      })
   )

   return postsWithUserDetails;
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

   const slug = slugify(validatedData.title, { lower: true, strict: true })

   await prisma.post.create({
      data: {
         title: validatedData.title,
         slug,
         excerpt: validatedData.excerpt,
         content: validatedData.content,
         imageUrl: validatedData.imageUrl,
         categorySlug: validatedData.categorySlug,
         userId: user.id,
      },
   })

   return {
      success: true,
      message: "Post created successfully",
   }
}


export async function getPostBySlug(slug: string) {
   const post = await prisma.post.findUnique({
      where: {
         slug,
      },
      include: {
         category: true,
      },
   })

   return post;
}
