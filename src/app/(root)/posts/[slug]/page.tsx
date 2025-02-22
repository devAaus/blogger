import { getPostBySlug } from "@/actions/posts-actions"
import BlogDetails from "@/components/blog-details"

export default async function PostPage(
   { params }: { params: { slug: string } }
) {
   const { slug } = await Promise.resolve(params);
   const post = await getPostBySlug(slug)
   console.log(post);

   return (
      <BlogDetails post={post} />
   )
}