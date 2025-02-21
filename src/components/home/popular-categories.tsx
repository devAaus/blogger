import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Badge } from '../ui/badge'

export default function PopularCategories({ categories }: { categories: any[] }) {
   return (
      <div>
         <h2 className="text-2xl font-instrument-serif mb-6">Popular Categories</h2>
         <div className="grid grid-cols-2 gap-4">
            {categories.map((category) => (
               <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
                  <Card className="group hover:shadow-lg transition-shadow">
                     <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-2">
                           <span className="text-2xl">{category.icon}</span>
                           <Badge variant="secondary">{category.count} posts</Badge>
                        </div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">{category.name}</h3>
                     </CardContent>
                  </Card>
               </Link>
            ))}
         </div>
      </div>
   )
}
