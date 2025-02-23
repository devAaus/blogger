import { Category } from '@/lib/types'
import Categorycard from '../category-card'

export default function PopularCategories(
   { categories }: { categories: Category[] }
) {
   return (
      <div>
         <h2 className="text-2xl font-instrument-serif mb-6">Popular Categories</h2>
         <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
               <Categorycard key={category.id} category={category} />
            ))}
         </div>
      </div>
   )
}
