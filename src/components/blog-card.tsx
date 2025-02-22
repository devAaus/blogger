import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { BookOpen } from "lucide-react"

export default function BlogCard({ post }: { post: any }) {
   return (
      <Card className="h-full group hover:shadow-lg transition-shadow">
         <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
            <Link href={`/posts/${post.slug}`}>
               <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
               /></Link>
            <div className="absolute top-2 right-2">
               <Badge variant="secondary" className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {post.views} views
               </Badge>
            </div>
         </div>
         <CardHeader>
            <Badge className="w-fit mb-2" variant="outline">
               {post.category}
            </Badge>
            <CardTitle className="text-xl font-instrument-serif">
               <Link href={`/posts/${post.slug}`} className="hover:underline">
                  {post.title}
               </Link>
            </CardTitle>
         </CardHeader>
         <CardContent>
            <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
         </CardContent>
         <CardFooter className="flex justify-between items-center">
            <div className="flex items-center gap-2">
               <Avatar className="h-8 w-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
               </Avatar>
               <span className="text-sm font-medium">{post.author.name}</span>
            </div>
            <span className="text-sm text-gray-500">{post.date}</span>
         </CardFooter>
      </Card>
   )
}
