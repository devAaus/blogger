import { getAllCategories } from "@/actions/category-actions"
import { getPostBySlug } from "@/actions/posts-actions"
import NotFound from "@/app/not-found"
import EditBlog from "@/components/post/edit-blog"


type ParamsProps = {
   params: Promise<{ slug: string }>
}

export default async function EditPost(
   { params }: ParamsProps
) {
   const slug = (await params).slug
   const post = await getPostBySlug(slug)
   if (!post) {
      return <NotFound />
   }
   const category = await getAllCategories()
   return (
      <EditBlog post={post} category={category} />
   )
}
