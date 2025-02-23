"use server"

import type { CreateAuthorParams } from '@/lib/types';
import { prisma } from '@/server/db';
import { currentUser } from '@clerk/nextjs/server';

export async function getAllAuthors() {
   const author = await prisma.author.findMany({
      include: {
         _count: {
            select: { posts: true }
         },
      },
      orderBy: { updatedAt: "desc" },
   })

   return author;
}

export async function getAuthorByUsername(username: string) {
   if (!username) {
      throw new Error("Username is required")
   }

   const author = await prisma.author.findUnique({
      where: {
         userName: username
      },
      include: {
         posts: {
            include: {
               author: true,
               category: true
            }
         }
      },
   })

   if (!author) {
      throw new Error("Author not found")
   }

   return author;
}

export async function getLoggedInUser() {
   const user = await currentUser()
   if (!user) {
      throw new Error("User not found")
   }

   const author = await prisma.author.findMany({
      where: {
         clerkId: user.id,
      },
   })

   return author[0];
}

export async function createAuthor(author: CreateAuthorParams) {
   const newAuthor = await prisma.author.create({
      data: author
   })

   return newAuthor;
}
