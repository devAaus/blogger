import BlogDetails from "@/components/blog-details"
import { post } from "@/lib/data"

export default function PostPage(
   { params }: { params: { slug: string } }
) {
   return (
      <BlogDetails post={post} />
   )
}