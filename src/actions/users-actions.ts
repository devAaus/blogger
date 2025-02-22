"use server"

import { createClerkClient } from '@clerk/nextjs/server';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function getAllUsers() {
   try {
      const userList = await clerkClient.users.getUserList();

      return userList;
   } catch (error) {
      console.error("Error fetching users from Clerk:", error);
      throw error;
   }
}

export async function getUserById(userId: string) {
   try {
      const user = await clerkClient.users.getUser(userId);
      return {
         id: user.id,
         firstName: user.firstName,
         lastName: user.lastName,
         imageUrl: user.imageUrl,
         email: user.primaryEmailAddress
      };
   } catch (error) {
      console.error("Error fetching user from Clerk:", error);
      throw error;
   }
}
