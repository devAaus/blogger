import { getPostBySlug } from "@/actions/posts-actions"
import BlogDetails from "@/components/blog-details"

type ParamsProps = {
   params: Promise<{ slug: string }>
}

export default async function PostPage(
   { params }: ParamsProps
) {
   const slug = (await params).slug
   const post = await getPostBySlug(slug)
   console.log(post);

   return (
      <BlogDetails post={post} />
   )
}