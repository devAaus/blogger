"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button, buttonVariants } from "@/components/ui/button"
import { Calendar, Eye, MessageCircle, Pencil, ThumbsUp, Trash } from "lucide-react"
import { Post } from "@/lib/types"
import { formattedDate } from "@/lib/utils"
import { deletePost } from "@/actions/posts-actions"
import { toast } from "sonner"

interface UserPostsProps {
   post: Post
}

export function UserPostsCard({ post }: UserPostsProps) {


   const handledelete = async () => {
      const res = await deletePost(post.id)
      if (res.success) {
         toast.success("Post deleted successfully")
      } else {
         toast.error("Failed to delete post")
      }
   }

   return (
      <Card key={post.id} className="group">
         <div className="aspect-[24/10] relative overflow-hidden rounded-t-lg">
            <Link href={`/posts/${post.slug}`}>
               <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105 border-b]"
               />
            </Link>
            <div className="absolute top-2 right-2">
               <div className="flex items-center gap-3">
                  <Link href={`/posts/${post.id}/edit`} className={buttonVariants({ variant: "outline", size: "icon" })}>
                     <Pencil className="h-5 w-5" />
                  </Link>
                  <Button
                     variant={"outline"}
                     size={"icon"}
                     className="text-red-600 hover:text-red-500"
                     onClick={handledelete}
                  >
                     <Trash className="h-5 w-5" />
                  </Button>
               </div>
            </div>
         </div>
         <CardHeader className="relative">
            <CardTitle className="text-xl font-instrument-serif line-clamp-2">
               <Link href={`/posts/${post.slug}`} className="hover:underline">
                  {post.title.length > 30
                     ? post.title.substring(0, 30) + "..."
                     : post.title
                  }
               </Link>
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
         <CardFooter className="flex justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
               <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {post.views}
               </span>
               <span className="flex items-center gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  {/* {post.likes} */} 20
               </span>
               <span className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {/* {post.comments} */} 5
               </span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
               <Calendar className="mr-1 h-4 w-4" />
               {formattedDate(post?.createdAt)}
            </div>
         </CardFooter>
      </Card>
   )
}

