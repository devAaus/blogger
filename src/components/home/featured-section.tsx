import Link from 'next/link'
import React from 'react'
import { Card, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ArrowRight, Clock } from "lucide-react"

export default function FeaturedSection({ featuredPost }: { featuredPost: any }) {
   return (
      <section className=" px-4 md:px-6 py-12">
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-instrument-serif">Featured Post</h2>
            <Link href="/posts" className="text-gray-500 hover:text-gray-900 flex items-center">
               View all posts
               <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
         </div>
         <Link href={`/posts/${featuredPost.slug}`}>
            <Card className="group overflow-hidden">
               <div className="md:grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-video md:aspect-auto overflow-hidden">
                     <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                     />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                     <Badge className="w-fit mb-4" variant="secondary">
                        {featuredPost.category}
                     </Badge>
                     <CardTitle className="text-2xl md:text-3xl font-instrument-serif mb-4">{featuredPost.title}</CardTitle>
                     <p className="text-gray-500 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                     <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3">
                           <Avatar>
                              <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                              <AvatarFallback>{featuredPost.author.name[0]}</AvatarFallback>
                           </Avatar>
                           <div>
                              <p className="font-medium">{featuredPost.author.name}</p>
                              <p className="text-sm text-gray-500">{featuredPost.author.role}</p>
                           </div>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                           <Clock className="mr-1 h-4 w-4" />
                           {featuredPost.readTime}
                        </div>
                     </div>
                  </div>
               </div>
            </Card>
         </Link>
      </section>
   )
}
