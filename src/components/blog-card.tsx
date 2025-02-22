import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { BookOpen } from "lucide-react"

export default function BlogCard({ post }: { post: any }) {
   const formattedDate = new Date(post.createdAt).toLocaleDateString();

   return (
      <Card className="h-full group hover:shadow-lg transition-shadow">
         <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
            <Link href={`/posts/${post.slug}`}>
               <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 border-b"
               />
            </Link>
            <div className="absolute top-2 right-2">
               <Badge variant="secondary" className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {post?.views ?? 0} views
               </Badge>
            </div>
         </div>
         <CardHeader>
            <Badge className="w-fit mb-2" variant="outline">
               {post.category.title}
            </Badge>
            <CardTitle className="text-xl font-instrument-serif">
               <Link href={`/posts/${post.slug}`} className="hover:underline">
                  <CardTitle className="text-xl font-instrument-serif">
                     {post.title.length > 6 ? post.title.substring(0, 6) + "..." : post.title}
                  </CardTitle>
               </Link>
            </CardTitle>
         </CardHeader>
         <CardContent>
            <p className="text-gray-500 text-sm line-clamp-2">
               {post.excerpt.length > 30 ? post.excerpt.substring(0, 30) + "..." : post.excerpt}
            </p>
         </CardContent>
         <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-2">
               <Avatar className="h-8 w-8">
                  <AvatarImage src={post?.user?.imageUrl} alt={post?.user?.firstName} />
                  <AvatarFallback>
                     {post?.user?.firstName}
                  </AvatarFallback>
               </Avatar>
               <span className="text-sm font-medium">
                  {post?.user?.firstName} {post?.user?.lastName}
               </span>
            </div>
            <span className="text-sm text-gray-500">
               {formattedDate}
            </span>
         </CardFooter>
      </Card>
   )
}
