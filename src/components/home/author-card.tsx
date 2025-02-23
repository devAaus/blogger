import { Card, CardContent, } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Author } from "@/lib/types"
import Link from "next/link";
import AuthorAvatar from "../author-avatar";

interface AuthorCardProps {
   author: Author;
}

export default function AuthorCard(
   { author }: AuthorCardProps
) {
   return (
      <Card key={author.firstName}>
         <CardContent className="p-6">
            <div className="flex items-center gap-4">
               <AuthorAvatar author={author} />
               <div className="text-right">
                  <div className="font-medium">5 posts</div>
               </div>
            </div>
         </CardContent>
      </Card>
   )
}
