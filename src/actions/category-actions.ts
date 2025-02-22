import { prisma } from "@/server/db";
import { getUserById } from "./users-actions";


export async function getCategory() {
   const categories = await prisma.category.findMany({
      include: {
         _count: {
            select: { posts: true }
         },
      },
   });

   return categories;
}



export async function getCategoryBySlug(slug: string) {
   const cat = await prisma.category.findFirst({
      where: {
         slug,
      },
      include: {
         posts: true,
      },
   })

   if (!cat) {
      throw new Error(`Category with slug "${slug}" not found.`);
   }

   const postsWithUserDetails = await Promise.all(
      cat.posts.map(async (post) => {
         // Fetch user details from Clerk using the userId
         const user = await getUserById(post.userId)
         return {
            ...post,
            user,
            category: cat
         }
      })
   )

   return {
      category: cat,
      posts: postsWithUserDetails,
   };

}