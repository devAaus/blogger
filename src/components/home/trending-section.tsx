import { TrendingUp, BookOpen } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Image from "next/image"
import { Badge } from "../ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

export default function TrendingSection({ trendingPosts }: { trendingPosts: any[] }) {
   return (
      <section className=" px-4 md:px-6 py-12">
         <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-6 w-6" />
            <h2 className="text-3xl font-instrument-serif">Trending Now</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingPosts.map((post) => (
               <Link key={post.slug} href={`/posts/${post.slug}`}>
                  <Card className="h-full group hover:shadow-lg transition-shadow">
                     <div className="aspect-[16/9] relative overflow-hidden rounded-t-lg">
                        <Image
                           src={post.image || "/placeholder.svg"}
                           alt={post.title}
                           fill
                           className="object-cover transition-transform group-hover:scale-105"
                        />
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
                        <CardTitle className="text-xl font-instrument-serif">{post.title}</CardTitle>
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
               </Link>
            ))}
         </div>
      </section>
   )
}
