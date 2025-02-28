import { getAllCategories } from "@/actions/category-actions"
import Categorycard from "@/components/category-card"
import StyledLink from "@/components/StyledLink"

export default async function CategoriesPage() {
   const categories = await getAllCategories()

   return (
      <main className="container px-4 py-12 md:py-16">
         <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-instrument-serif mb-4">Categories</h1>
         </div>

         {categories.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
               {categories.map((category) => (
                  <Categorycard key={category.id} category={category} />
               ))}
            </div>
         ) : (
            <div className="text-center space-y-3">
               <h2>
                  No categories found. Check back later for more updates.
               </h2>
               <StyledLink href="/" button>
                  Visit the homepage
               </StyledLink>
            </div>
         )}
      </main>
   )
}
