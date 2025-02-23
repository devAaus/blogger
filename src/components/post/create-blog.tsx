"use client"

import { useRef, useState } from "react"
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
import { createPost } from "@/actions/posts-actions"
import { useUploadThing } from "@/utils/uploadthing"
import type { CategoriesProps } from "@/lib/types"
import BlogForm from "./blog-form"

export default function CreateBlog(
   { category }: CategoriesProps
) {
   const router = useRouter()
   const [isPreviewOpen, setIsPreviewOpen] = useState(false)
   const [selectedImage, setSelectedImage] = useState<File | null>(null)
   const [previewUrl, setPreviewUrl] = useState<string | null>(null)
   const fileInputRef = useRef<HTMLInputElement>(null)
   const { startUpload, isUploading } = useUploadThing("imageUploader")

   const form = useForm<PostFormValues>({
      resolver: zodResolver(postFormSchema),
      defaultValues: {
         title: "",
         excerpt: "",
         content: "",
         categorySlug: "",
         imageUrl: ""
      },
   })

   const { isSubmitting } = form.formState

   async function onSubmit(data: PostFormValues) {
      try {
         if (!selectedImage) {
            toast.error("Please select an image before publishing.");
            return;
         }

         if (!data.categorySlug) {
            toast.error("Please select a category");
            return;
         }

         // Upload image if one is selected
         const uploadResult = await startUpload([selectedImage]);
         if (!uploadResult) {
            toast.error("Failed to upload image");
            return;
         }
         const imageUrl = uploadResult[0]?.url ?? "";

         // Create form data with image URL
         const formData = new FormData();
         Object.entries(data).forEach(([key, value]) => {
            if (value) formData.append(key, value);
         });

         if (imageUrl) {
            formData.append("imageUrl", imageUrl);
         }

         const result = await createPost(formData);

         if (result.success) {
            toast.success("Post created successfully");
            router.push("/posts");
         } else {
            toast.error("Failed to create post");
         }
      } catch (error) {
         toast.error("Something went wrong");
         console.error("Failed to create post:", error);
      }
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
                  categories={category}
                  setSelectedImage={setSelectedImage}
                  previewUrl={previewUrl}
                  setPreviewUrl={setPreviewUrl}
                  fileInputRef={fileInputRef}
               />

               <div className="flex justify-end items-center">
                  <div className="space-x-4">
                     <Button
                        type="button"
                        variant="outline"
                        onClick={(e) => {
                           e.preventDefault()
                           setIsPreviewOpen(true)
                        }}
                     >
                        Preview
                     </Button>
                     <Button
                        type="submit"
                        disabled={isSubmitting || isUploading}
                        className="bg-black text-white hover:bg-black/90"
                     >
                        {(isSubmitting || isUploading) &&
                           <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        }
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

