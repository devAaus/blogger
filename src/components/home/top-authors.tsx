
import { Author } from "@/lib/types"
import AuthorCard from "./author-card"

interface TopAuthorsProps {
   topAuthors: (Author & { _count: { posts: number } })[]
}

export default function TopAuthors(
   { topAuthors }: TopAuthorsProps
) {
   return (
      <div>
         <h2 className="text-2xl font-instrument-serif mb-6">Top Authors</h2>
         <div className="space-y-4">
            {topAuthors.map((author) => (
               <AuthorCard author={author} />
            ))}
         </div>
      </div>
   )
}
