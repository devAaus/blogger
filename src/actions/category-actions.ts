import { prisma } from "@/server/db";


export async function getCategory() {
   return await prisma.category.findMany({
      include: {
         posts: true,
      },
   })
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