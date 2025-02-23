import { Card, CardContent, } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Author } from "@/lib/types"

interface TopAuthorsProps {
   topAuthors: Author[]
}

export default function TopAuthors(
   { topAuthors }: TopAuthorsProps
) {
   return (
      <div>
         <h2 className="text-2xl font-instrument-serif mb-6">Top Authors</h2>
         <div className="space-y-4">
            {topAuthors.map((author) => (
               <Card key={author.firstName}>
                  <CardContent className="p-6">
                     <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                           <AvatarImage src={author.avatar} alt={author.firstName} />
                           <AvatarFallback>{author.firstName}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                           <h3 className="font-medium">{author.firstName}</h3>
                        </div>
                        <div className="text-right">
                           <div className="font-medium">5 posts</div>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
   )
}
