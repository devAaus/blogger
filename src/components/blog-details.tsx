import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Badge } from "./ui/badge";
import type { Post } from "@/lib/types";
import NotFound from "@/app/not-found";
import { Button } from "./ui/button";
import parse, { domToReact, HTMLReactParserOptions, Element, DOMNode } from 'html-react-parser';

interface CardContent {
   post: Post
}

export default function BlogDetails(
   { post }: CardContent
) {
   const formattedDate = new Date(post.createdAt).toLocaleDateString();
   const author = post?.author

   return (
      <article className="max-w-4xl mx-auto px-4 py-12">
         <Button variant="ghost" className="mb-8" asChild>
            <Link href="/posts">
               <ArrowLeft className="mr-2 h-4 w-4" />
               All Posts
            </Link>
         </Button>
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
                  <AvatarImage src={author?.avatar} alt={author.firstName} />
                  <AvatarFallback>{author.firstName}</AvatarFallback>
               </Avatar>
               <div>
                  <p className="font-medium">{author.firstName}</p>
               </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
               <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formattedDate}
               </div>
               <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  5 min read
               </div>
            </div>
         </div>

         <div className="relative aspect-[24/10] my-8">
            <Image
               src={post.imageUrl || "/placeholder.svg"}
               alt={post.title}
               fill
               className="object-cover rounded-lg"
               priority
            />
         </div>

         <div className="max-w-none tiptap">
            {parse(post.content)}
         </div>
      </article>
   )
}
