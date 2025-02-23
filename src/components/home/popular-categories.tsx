import { Category } from '@/lib/types'
import Categorycard from '../category-card'

export default function PopularCategories({ categories }: { categories: Category[] }) {
   // Sort categories by post count (descending) and take the top 3
   const topCategories = [...categories]
      .sort((a, b) => (b._count?.posts ?? 0) - (a._count?.posts ?? 0))
      .slice(0, 4);

   return (
      <div>
         <h2 className="text-2xl font-instrument-serif mb-6">Popular Categories</h2>
         <div className="grid grid-cols-2 gap-4">
            {topCategories.map((category) => (
               <Categorycard key={category.id} category={category} />
            ))}
         </div>
      </div>
   )
}
