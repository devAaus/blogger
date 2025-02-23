"use server"

import { postFormSchema } from "@/lib/validations/post"
import { prisma } from "@/server/db"
import slugify from "slugify"
import { currentUser } from '@clerk/nextjs/server'


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
         authorId: user.id,
      },
   })

   return {
      success: true,
      message: "Post created successfully",
   }
}
