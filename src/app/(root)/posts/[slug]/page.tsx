import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Share2, BookmarkPlus } from "lucide-react"
import { getCurrentUser } from "@/lib/auth"
import { post } from "@/lib/data"
// import { deletePost } from "@/app/actions"

export default function PostPage({ params }: { params: { slug: string } }) {
   const user = getCurrentUser()

   const canEdit = user && (user.id === post.authorId || user.role === "admin")

   return (
      <article className="max-w-5xl mx-auto px-4 py-12">
         <div className="space-y-4 text-center mb-12">
            <div className="space-y-2">
               {post.categories.map((category) => (
                  <Link
                     key={category}
                     href={`/categories/${category.toLowerCase()}`}
                     className="inline-block text-sm font-medium text-gray-500 hover:text-gray-900 mr-2"
                  >
                     {category}
                  </Link>
               ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-instrument-serif leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">{post.excerpt}</p>
         </div>

         <div className="flex items-center justify-between py-6 border-y">
            <div className="flex items-center space-x-4">
               <Avatar>
                  <AvatarImage src={post.author.image} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
               </Avatar>
               <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.role}</p>
               </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
               <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.publishedAt}
               </div>
               <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readingTime}
               </div>
            </div>
         </div>

         <div className="relative aspect-[2/1] my-8">
            <Image
               src={post.coverImage || "/placeholder.svg"}
               alt={post.title}
               fill
               className="object-cover rounded-lg"
               priority
            />
         </div>

         <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
         </div>

         <div className="flex justify-center space-x-4 mt-12">
            <Button variant="outline" className="space-x-2">
               <BookmarkPlus className="h-4 w-4" />
               <span>Save</span>
            </Button>
            <Button variant="outline" className="space-x-2">
               <Share2 className="h-4 w-4" />
               <span>Share</span>
            </Button>
         </div>

         {canEdit && (
            <div className="flex justify-end space-x-4 mt-8">
               <Button variant="outline" asChild>
                  <Link href={`/posts/${params.slug}/edit`}>Edit Post</Link>
               </Button>
               <form
               // action={async () => {
               //    "use server"
               //    await deletePost(post.id, post.authorId)
               // }}
               >
                  <Button variant="destructive" type="submit">
                     Delete Post
                  </Button>
               </form>
            </div>
         )}
      </article>
   )
}