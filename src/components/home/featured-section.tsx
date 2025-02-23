import Link from 'next/link'
import React from 'react'
import { Card, CardTitle } from '../ui/card'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { ArrowRight, Clock } from "lucide-react"
import { Post } from '@/lib/types'
import AuthorAvatar from '../author-avatar'

interface FeaturedProps {
   featuredPost: Post | undefined
}

export default function FeaturedSection(
   { featuredPost }: FeaturedProps
) {
   const author = featuredPost?.author
   return (
      <section className="container px-4 md:px-6 py-12">
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-instrument-serif">Featured Post</h2>
            <Link href="/posts" className="text-gray-500 hover:text-gray-900 flex items-center">
               View all posts
               <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
         </div>

         <Card className="group overflow-hidden p-1">
            <div className="md:grid md:grid-cols-2 gap-6">
               <div className="relative aspect-video md:aspect-auto overflow-hidden">
                  <Link href={`/posts/${featuredPost?.slug}`}>
                     <Image
                        src={featuredPost?.imageUrl || "/placeholder.svg"}
                        alt={featuredPost?.title ?? ''}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                     />
                  </Link>
               </div>
               <div className="p-6 flex flex-col justify-center">
                  <Badge className="w-fit mb-4" variant="secondary">
                     {featuredPost?.category.title}
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl font-instrument-serif mb-4">
                     {featuredPost?.title}
                  </CardTitle>
                  <p className="text-gray-500 mb-6 line-clamp-3">{featuredPost?.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                     <AuthorAvatar author={author} />
                     <div className="flex items-center text-sm text-gray-500">
                        <Clock className="mr-1 h-4 w-4" />
                        5 min read
                     </div>
                  </div>
               </div>
            </div>
         </Card>
      </section >
   )
}
