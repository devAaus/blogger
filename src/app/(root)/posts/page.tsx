import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { getAllPosts } from "@/actions/posts-actions"

export default async function AllPosts() {
   const allPosts = await getAllPosts()

   return (
      <div className="container px-4 py-12">
         <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            <h1 className="text-4xl font-instrument-serif">All Posts</h1>
            <div className="flex w-full md:w-auto gap-4">
               <div className="relative w-full md:w-[300px]">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input placeholder="Search posts..." className="pl-10" />
               </div>
               <Button className="bg-black text-white hover:bg-black/90">Filter</Button>
            </div>
         </div>

         {allPosts.length > 0 ? (
            <>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {allPosts.map((post) => (
                     <BlogCard key={post.id} post={post} />
                  ))}
               </div>

               <div className="flex justify-center mt-12">
                  <Button variant="outline" className="mx-2">
                     Previous
                  </Button>
                  <Button variant="outline" className="mx-2">
                     Next
                  </Button>
               </div>
            </>
         ) : (
            <>
               <h1>
                  No posts found. Please check back later or create a new post.
               </h1>
            </>
         )}
      </div>
   )
}

