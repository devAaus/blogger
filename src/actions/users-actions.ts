"use server"

import { CreateUserParams } from '@/lib/types';
import { prisma } from '@/server/db';
import { createClerkClient } from '@clerk/nextjs/server';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function getAllUsers() {
   const user = await prisma.user.findMany()

   return user;
}

export async function getUserById(userId: string) {
   const user = await prisma.user.findUnique({
      where: { id: userId }
   });

   if (!user) {
      throw new Error("User not found");
   }

   return user;
}

export async function createUser(user: CreateUserParams) {
   const newUser = await prisma.user.create({
      data: user
   })

   return newUser;
}
