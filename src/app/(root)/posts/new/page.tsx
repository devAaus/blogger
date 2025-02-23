import { getAllCategories } from '@/actions/category-actions'
import CreateBlog from '@/components/post/create-blog'

export default async function NewPostPage() {
   const category = await getAllCategories()
   return (
      <CreateBlog category={category} />
   )
}
