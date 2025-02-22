import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"
import { allCategories } from "@/lib/data"
import { getCategory } from "@/actions/category-actions"

export default async function CategoriesPage() {
   const categories = await getCategory()

   return (
      <main className="container px-4 py-12 md:py-16">
         <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-instrument-serif mb-4">Categories</h1>
            <p className="text-muted-foreground">
               Explore our diverse collection of articles across various topics and interests.
            </p>
         </div>

         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
               // Find the matching category in allCategories
               const matchedCategory = allCategories.find((c) => c.name === category.title)

               return (
                  <Link key={category.id} href={`/categories/${category.slug}`}>
                     <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                           <div className="flex items-center justify-between mb-4">
                              <span className="text-3xl">{matchedCategory?.icon ?? "📌"}</span>
                              <Badge variant="secondary" className="flex items-center gap-1">
                                 <BookOpen className="h-3 w-3" />
                                 {category._count.posts} posts
                              </Badge>
                           </div>
                           <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
                           <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                        </CardContent>
                     </Card>
                  </Link>
               )
            })}
         </div>
      </main>
   )
}
