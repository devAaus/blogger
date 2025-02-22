import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "./ui/badge";

export default function BlogDetails(
   { post }: { post: any }
) {
   const formattedDate = new Date(post.createdAt).toLocaleDateString();
   const user = post?.user

   return (
      <article className="max-w-4xl mx-auto px-4 py-12">
         <div className="space-y-4 text-center mb-12">
            <div className="space-y-2">
               <Link
                  href={`/categories/${post.category.slug}`}
                  className="inline-block mr-2"
               >
                  <Badge className="w-fit mb-2 text-gray-500 hover:text-gray-900 text-sm font-medium" variant="outline">
                     {post.category.title}
                  </Badge>
               </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-instrument-serif leading-tight">
               {post.title}
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
               {post.excerpt}
            </p>
         </div>

         <div className="flex items-center justify-between py-6 border-y">
            <div className="flex items-center space-x-4">
               <Avatar>
                  <AvatarImage src={user?.imageUrl} alt={user.firstName} />
                  <AvatarFallback>{user.firstName}</AvatarFallback>
               </Avatar>
               <div>
                  <p className="font-medium">{user.firstName}</p>
               </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
               <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formattedDate}
               </div>
               {/* <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readingTime}
               </div> */}
            </div>
         </div>

         <div className="relative aspect-[2/1] my-8">
            <Image
               src={post.imageUrl || "/placeholder.svg"}
               alt={post.title}
               fill
               className="object-cover rounded-lg"
               priority
            />
         </div>

         <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
         </div>
      </article>
   )
}
