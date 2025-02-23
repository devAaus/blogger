import { Card, CardContent, } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Author } from "@/lib/types"
import Link from "next/link";

interface AuthorCardProps {
   author: Author;
}

export default function AuthorCard(
   { author }: AuthorCardProps
) {
   return (
      <Link href={`/author/${author.userName}`}>
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
      </Link>
   )
}
