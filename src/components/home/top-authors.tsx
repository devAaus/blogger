import { Author } from "@/lib/types"
import AuthorCard from "./author-card"

interface TopAuthorsProps {
   topAuthors: (Author & { _count: { posts: number } })[]
}

export default function TopAuthors({ topAuthors }: TopAuthorsProps) {
   // Sort authors by post count (descending) and take the top 3
   const topThreeAuthors = [...topAuthors]
      .sort((a, b) => (b._count?.posts ?? 0) - (a._count?.posts ?? 0))
      .slice(0, 3);

   return (
      <div>
         <h2 className="text-2xl font-instrument-serif mb-6">Top Authors</h2>
         <div className="space-y-4">
            {topThreeAuthors.map((author) => (
               <AuthorCard key={author.id} author={author} />
            ))}
         </div>
      </div>
   )
}
