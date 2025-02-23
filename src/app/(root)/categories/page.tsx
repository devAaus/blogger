import { getCategory } from "@/actions/category-actions"
import Categorycard from "@/components/category-card"

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
            {categories.map((category) => (
               <Categorycard key={category.id} category={category} />
            ))}
         </div>
      </main>
   )
}
