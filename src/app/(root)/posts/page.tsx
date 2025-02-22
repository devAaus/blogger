import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import BlogCard from "@/components/blog-card"
import { allPosts } from "@/lib/data"

export default function AllPosts() {
   return (
      <div className="px-4 py-12">
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

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.map((post) => (
               <BlogCard key={post.slug} post={post} />
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
      </div>
   )
}

