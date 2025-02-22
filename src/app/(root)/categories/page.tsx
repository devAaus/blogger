import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen } from "lucide-react"
import { allCategories } from "@/lib/data"

export default function CategoriesPage() {


   return (
      <main className="container px-4 py-12 md:py-16">
         <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-instrument-serif mb-4">Categories</h1>
            <p className="text-muted-foreground">
               Explore our diverse collection of articles across various topics and interests.
            </p>
         </div>

         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allCategories.map((category) => (
               <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                     <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                           <span className="text-3xl">{category.icon}</span>
                           <Badge variant="secondary" className="flex items-center gap-1">
                              <BookOpen className="h-3 w-3" />
                              {category.count} posts
                           </Badge>
                        </div>
                        <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                        <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                        <div className="flex flex-wrap gap-2">
                           {category.featured.map((topic) => (
                              <Badge key={topic} variant="outline">
                                 {topic}
                              </Badge>
                           ))}
                        </div>
                     </CardContent>
                  </Card>
               </Link>
            ))}
         </div>
      </main>
   )
}

