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
   console.log(slug);

   const cat = await prisma.category.findFirst({
      where: {
         slug,
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

   if (!cat) {
      throw new Error(`Category with slug "${slug}" not found.`);
   }

   return {
      category: cat,
   };
}