import { Card, CardContent, } from "@/components/ui/card"
import { Author } from "@/lib/types"
import AuthorAvatar from "../author-avatar";

interface AuthorCardProps {
   author: Author & {
      _count: { posts: number };
   }
}

export default function AuthorCard(
   { author }: AuthorCardProps
) {
   return (
      <Card key={author.firstName}>
         <CardContent className="p-6">
            <div className="flex justify-between items-center gap-4">
               <AuthorAvatar author={author} key={author.id} />
               <div className="text-right">
                  <div className="font-medium">
                     {author._count.posts} posts
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   )
}
