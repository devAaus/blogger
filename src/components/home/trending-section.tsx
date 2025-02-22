import { TrendingUp } from "lucide-react"
import BlogCard from "../blog-card"

export default function TrendingSection({ trendingPosts }: { trendingPosts: any[] }) {
   return (
      <section className="container px-4 md:px-6 py-12">
         <div className="flex items-center gap-2 mb-8">
            <TrendingUp className="h-6 w-6" />
            <h2 className="text-3xl font-instrument-serif">Trending Now</h2>
         </div>
         {trendingPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {trendingPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
               ))}
            </div>
         ) : (
            <h2>
               No trending posts found. Check back later for more updates.
               <br />
               <a href="/posts">View all posts</a>
            </h2>
         )}
      </section>
   )
}
