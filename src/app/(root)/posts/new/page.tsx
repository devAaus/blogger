import { getCategory } from '@/actions/category-actions'
import CreateBlog from '@/components/post/create-blog'
import React from 'react'

export default async function NewPostPage() {
   const category = await getCategory()
   return (
      <CreateBlog category={category} />
   )
}
