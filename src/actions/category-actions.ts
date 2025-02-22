import { prisma } from "@/server/db";


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
   return await prisma.category.findFirst({
      where: {
         slug,
      },
      include: {
         posts: true,
      },
   })
}