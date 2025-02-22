import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, BookOpen, Clock, Filter, Search, TrendingUp } from "lucide-react"
import { getCategoryBySlug } from "@/actions/category-actions"
import { allCategories } from "@/lib/data"
import BlogCard from "@/components/blog-card"

export default async function CategoryPage(
   { params }: { params: { slug: string } }
) {
   const { slug } = await params;
   const { category, posts } = await getCategoryBySlug(slug)

   if (!category) {
      return <div>Category not found</div>
   }

   const matchedCategory = allCategories.find((c) => c.name === category.title)

   console.log(posts);


   return (
      <main className="container px-4 py-12">
         {/* Back Button */}
         <Button variant="ghost" className="mb-8" asChild>
            <Link href="/categories">
               <ArrowLeft className="mr-2 h-4 w-4" />
               All Categories
            </Link>
         </Button>

         {/* Category Header */}
         <div className="mb-8">
            <div className="flex items-start justify-between">
               <div>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="text-4xl">
                        {matchedCategory?.icon || "📌"}
                     </span>
                     <h1 className="text-4xl font-instrument-serif">
                        {category.title}
                     </h1>
                  </div>
                  <p className="text-lg text-muted-foreground max-w-2xl mb-6">
                     {category.description}
                  </p>
               </div>
            </div>
         </div>

         {/* Filters and Search */}
         <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="relative w-full md:w-[300px]">
               <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
               <Input placeholder="Search posts..." className="pl-10" />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto">
               <Select defaultValue="newest">
                  <SelectTrigger className="w-full md:w-[180px]">
                     <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="newest">Newest First</SelectItem>
                     <SelectItem value="popular">Most Popular</SelectItem>
                     <SelectItem value="trending">Trending</SelectItem>
                  </SelectContent>
               </Select>
               <Button variant="outline" className="w-full md:w-auto">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
               </Button>
            </div>
         </div>


         {/* All Posts */}
         <div>
            <h2 className="text-2xl font-instrument-serif mb-6">
               All Posts
               (<span>
                  {category?.posts?.length} posts
               </span>)
            </h2>

            {posts.length > 0 ? (
               <>
                  <div className="grid md:grid-cols-3 gap-6">
                     {posts.map((post: any) => (
                        < BlogCard key={post.slug} post={post} />
                     ))}
                  </div>

                  <div className="flex justify-center mt-12">
                     <Button variant="outline" size="lg">
                        Load More Posts
                     </Button>
                  </div>
               </>
            ) : (
               <h2 className="text-xl text-center mt-12">
                  No posts found in this category. Please check back later.
               </h2>
            )}
         </div>

      </main>
   )
}

