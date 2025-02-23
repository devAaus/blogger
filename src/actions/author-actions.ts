"use server"

import type { CreateAuthorParams } from '@/lib/types';
import { prisma } from '@/server/db';

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

export async function getAuthorById(authorId: string) {
   const author = await prisma.author.findUnique({
      where: { id: authorId },
      include: {
         posts: {
            include: {
               category: true,
               author: true,
            },
         },
      },
   });

   if (!author) {
      throw new Error("Author not found");
   }

   return author;
}

export async function createAuthor(author: CreateAuthorParams) {
   const newAuthor = await prisma.author.create({
      data: author
   })

   return newAuthor;
}
