
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PenSquare } from "lucide-react"
import { UserPostsCard } from "@/components/author/user-post-card"
import { UserStats } from "@/components/author/user-stats"
import { getCurrentUserPosts } from "@/actions/posts-actions"
import { getLoggedInUser } from "@/actions/author-actions"
import StyledLink from "@/components/StyledLink"

export default async function DashboardPage() {
   const posts = await getCurrentUserPosts()
   const user = await getLoggedInUser()

   const firstName = user?.firstName ?? '';
   const lastName = user?.lastName ?? '';

   return (
      <div className="container max-w-7xl mx-auto px-4 py-12">
         <div className="grid gap-8">
            {/* User Profile Section */}
            <Card>
               <CardContent className="p-6">
                  <div className="flex items-center gap-8">
                     <Avatar className="h-24 w-24">
                        <AvatarImage src={user?.avatar} alt={user?.firstName} />
                        <AvatarFallback>{user?.firstName}</AvatarFallback>
                     </Avatar>
                     <div className="flex-1">
                        <h1 className="text-3xl font-instrument-serif">
                           {firstName + ' ' + lastName}
                        </h1>
                        <p className="text-gray-500">
                           @{user?.userName}
                        </p>
                        <p className="text-gray-500 mb-2">
                           {user?.email}
                        </p>
                        <div className="flex gap-4">
                           <Button asChild>
                              <StyledLink href="/posts/new">
                                 <PenSquare className="mr-2 h-4 w-4" />
                                 Create New Post
                              </StyledLink>
                           </Button>
                        </div>
                     </div>
                  </div>
               </CardContent>
            </Card>

            {/* Stats Cards */}
            <UserStats />

            <div>
               <h2 className="text-2xl font-instrument-serif mb-6">
                  All Posts
               </h2>

               {posts.length > 0 ? (
                  <>
                     <div className="grid md:grid-cols-3 gap-6">
                        {posts.map((post) => (
                           <UserPostsCard
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
         </div>
      </div>
   )
}

