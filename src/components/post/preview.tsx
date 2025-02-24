import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock } from "lucide-react"
import { Badge } from "../ui/badge";
import parse from 'html-react-parser';

interface PostPreviewProps {
   title: string
   excerpt: string
   content: string
   imageUrl: string
}

export default function Preview(
   {
      title,
      excerpt,
      content,
      imageUrl,
   }: PostPreviewProps
) {
   return (
      <article className="max-w-4xl mx-auto px-4 py-12">
         <div className="space-y-4 text-center mb-12">
            <div className="space-y-2">
               <Badge className="w-fit mb-2 text-gray-500 hover:text-gray-900 text-sm font-medium" variant="outline">
                  Development
               </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-instrument-serif leading-tight">
               {title}
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
               {excerpt}
            </p>
         </div>

         <div className="flex items-center justify-between py-6 border-y">
            <div className="flex items-center space-x-4">
               <Avatar>
                  <AvatarImage src='' alt='' />
                  <AvatarFallback>John</AvatarFallback>
               </Avatar>
               <div>
                  <p className="font-medium">
                     John Doe
                  </p>
               </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
               <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  20/12/2025
               </div>
               <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  5 min read
               </div>
            </div>
         </div>

         <div className="relative aspect-[24/10] my-8">
            <Image
               src={imageUrl || "/placeholder.svg"}
               alt={title}
               fill
               className="object-cover rounded-lg"
               priority
            />
         </div>

         <div className="max-w-none tiptap">
            {parse(content)}
         </div>
      </article>
   )
}
