import { getPostBySlug, incrementPostViews } from "@/actions/posts-actions"
import NotFound from "@/app/not-found"
import BlogDetails from "@/components/blog-details"

type ParamsProps = {
   params: Promise<{ slug: string }>
}

export default async function PostPage(
   { params }: ParamsProps
) {
   const slug = (await params).slug
   await incrementPostViews(slug)
   const post = await getPostBySlug(slug)
   if (!post) {
      return <NotFound />
   }

   return (
      <BlogDetails post={post} />
   )
}