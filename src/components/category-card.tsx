import { Card, CardContent } from "@/components/ui/card"
import { allCategories } from '@/lib/data'
import { Badge } from './ui/badge'
import { BookOpen } from 'lucide-react'
import { Category } from '@/lib/types'
import StyledLink from './StyledLink'

interface CardContent {
   category: Category
}

export default function Categorycard(
   { category }: CardContent
) {
   const matchedCategory = allCategories.find((c) => c.name === category.title)
   return (
      <StyledLink href={`/categories/${category.slug}`}>
         <Card className="h-full hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
               <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{matchedCategory?.icon ?? "📌"}</span>
                  <Badge variant="secondary" className="flex items-center gap-1">
                     <BookOpen className="h-3 w-3" />
                     {category?._count?.posts ?? 0} posts
                  </Badge>
               </div>
               <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
               <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
            </CardContent>
         </Card>
      </StyledLink>
   )
}
