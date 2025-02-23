
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Profile from "@/components/author/profile"
import BlogCard from "@/components/blog-card"
import { getAuthorByUsername } from "@/actions/author-actions"
import { getPostsByUsername } from "@/actions/posts-actions"

type ParamsProps = {
   params: Promise<{ username: string }>
}

export default async function UserProfilePage(
   { params }: ParamsProps
) {
   const username = (await params).username
   const author = await getAuthorByUsername(username)
   const posts = author?.posts

   if (!author) {
      notFound()
   }

   return (
      <main className="container px-4 py-12">
         {/* Profile Header */}
         <Profile user={author} />

         <div>
            <h2 className="text-2xl font-instrument-serif mb-6">
               All Posts
               (<span>
                  {posts?.length} posts
               </span>)
            </h2>

            {posts.length > 0 ? (
               <>
                  <div className="grid md:grid-cols-3 gap-6">
                     {posts.map((post) => (
                        <BlogCard
                           key={post.slug}
                           post={post}
                        />
                     ))}
                  </div>

                  {posts.length > 6 &&
                     <div className="flex justify-center mt-12">
                        <Button variant="outline" size="lg">
                           Load More Posts
                        </Button>
                     </div>
                  }
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

