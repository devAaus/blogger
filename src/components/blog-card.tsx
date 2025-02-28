import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { BookOpen, Calendar } from "lucide-react"
import { Post } from "@/lib/types"
import AuthorAvatar from "./author-avatar"
import { formattedDate } from "@/lib/utils"
import StyledLink from "./StyledLink"

interface CardContent {
   post: Post
}


export default function BlogCard({ post }: CardContent) {
   const author = post?.author;

   return (
      <Card className="h-full group hover:shadow-lg transition-shadow">
         <div className="aspect-[24/10] relative overflow-hidden rounded-t-lg border-b">
            <StyledLink href={`/posts/${post.slug}`}>
               <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105]"
               />
            </StyledLink>
            <div className="absolute top-2 right-2">
               <Badge variant="secondary" className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {post.views} views
               </Badge>
            </div>
         </div>
         <CardHeader>
            <Badge className="w-fit mb-2" variant="outline">
               {post.category.title}
            </Badge>
            <CardTitle className="text-xl font-instrument-serif">
               <StyledLink href={`/posts/${post.slug}`} className="hover:underline">
                  <CardTitle className="text-xl font-instrument-serif">
                     {post.title.length > 36
                        ? post.title.substring(0, 36) + "..."
                        : post.title
                     }
                  </CardTitle>
               </StyledLink>
            </CardTitle>
         </CardHeader>
         <CardContent>
            <p className="text-gray-500 text-sm line-clamp-2">
               {post.excerpt.length > 80
                  ? post.excerpt.substring(0, 80) + "..."
                  : post.excerpt
               }
            </p>
         </CardContent>
         <CardFooter className="flex justify-between items-center">
            <AuthorAvatar author={author} />
            <div className="flex items-center text-sm text-gray-500">
               <Calendar className="mr-1 h-4 w-4" />
               {formattedDate(post?.createdAt)}
            </div>
         </CardFooter>
      </Card>
   )
}
