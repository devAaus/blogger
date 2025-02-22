"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { PostFormValues } from "@/lib/validations/post"
import { postFormSchema } from "@/lib/validations/post"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { toast } from "sonner"
import BlogForm from "@/components/blog-form"
import { createPost } from "@/actions/posts-actions"

const categories = [
   { value: "technology", label: "Technology" },
   { value: "design", label: "Design" },
   { value: "development", label: "Development" },
   { value: "business", label: "Business" },
]

export default function NewPostPage() {
   const router = useRouter()
   const [isPreviewOpen, setIsPreviewOpen] = useState(false)
   const [coverImage, setCoverImage] = useState<string | null>(null)

   const form = useForm<PostFormValues>({
      resolver: zodResolver(postFormSchema),
      defaultValues: {
         title: "",
         excerpt: "",
         content: "",
         categoryId: "",
      },
   })

   const { isSubmitting } = form.formState

   async function onSubmit(data: PostFormValues) {
      try {
         const formData = new FormData()
         Object.entries(data).forEach(([key, value]) => {
            if (value) formData.append(key, value)
         })
         if (coverImage) {
            formData.append("coverImage", coverImage)
         }

         const result = await createPost(formData)

         if (result.success) {
            toast.success(result.message)
            router.push("/posts")
         } else {
            toast.error("Failed to create post")
         }
      } catch (error) {
         toast.error("Something went wrong")
         console.error("Failed to create post:", error)
      }
   }

   const handlePreview = () => {
      setIsPreviewOpen(true)
   }

   return (
      <div className="container max-w-4xl mx-auto px-4 py-12">
         <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-instrument-serif">Create New Post</h1>
         </div>

         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               <BlogForm
                  form={form}
                  coverImage={coverImage}
                  setCoverImage={setCoverImage}
                  categories={categories}
               />

               <div className="flex justify-between items-center">
                  <Button
                     type="button"
                     variant="ghost"
                     className="text-red-500 hover:text-red-600"
                     onClick={() => {
                        if (confirm("Are you sure you want to delete this draft?")) {
                           router.push("/posts")
                        }
                     }}
                  >
                     Delete Draft
                  </Button>
                  <div className="space-x-4">
                     <Button
                        type="button"
                        variant="outline"
                        onClick={(e) => {
                           e.preventDefault()
                           handlePreview()
                        }}
                     >
                        Preview
                     </Button>
                     <Button type="submit" disabled={isSubmitting} className="bg-black text-white hover:bg-black/90">
                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Publish
                     </Button>
                  </div>
               </div>
            </form>
         </Form>

         <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
               <DialogHeader>
                  <DialogTitle className="text-2xl font-instrument-serif">Preview Post</DialogTitle>
               </DialogHeader>
               <article className="prose prose-lg max-w-none">
                  <h1 className="text-4xl font-instrument-serif mb-4">{form.getValues("title") || "Untitled Post"}</h1>
                  {form.getValues("excerpt") && <p className="text-xl text-gray-500 mb-8">{form.getValues("excerpt")}</p>}
                  <div dangerouslySetInnerHTML={{ __html: form.getValues("content") }} />
               </article>
            </DialogContent>
         </Dialog>
      </div>
   )
}

