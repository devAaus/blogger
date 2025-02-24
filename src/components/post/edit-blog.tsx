"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { PostFormValues } from "@/lib/validations/post";
import { postFormSchema } from "@/lib/validations/post";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { updatePost } from "@/actions/posts-actions"; // Update action
import { useUploadThing } from "@/utils/uploadthing";
import BlogForm from "./blog-form";
import type { Category, Post } from "@/lib/types";
import Preview from "./preview";

interface EditProps {
   post: Post;
   category: Category[];
}

export default function EditBlog({ post, category }: EditProps) {
   const router = useRouter();
   const [isPreviewOpen, setIsPreviewOpen] = useState(false);
   const [selectedImage, setSelectedImage] = useState<File | null>(null);
   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
   const fileInputRef = useRef<HTMLInputElement>(null);
   const { startUpload, isUploading } = useUploadThing("imageUploader");

   const form = useForm<PostFormValues>({
      resolver: zodResolver(postFormSchema),
      defaultValues: {
         title: post.title,
         excerpt: post.excerpt,
         content: post.content,
         categorySlug: post.categorySlug,
         imageUrl: post.imageUrl,
      },
   });

   const { isSubmitting } = form.formState;

   async function onSubmit(data: PostFormValues) {
      try {
         if (!data.categorySlug) {
            toast.error("Please select a category");
            return;
         }

         let imageUrl = post.imageUrl;

         const formData = new FormData();
         Object.entries(data).forEach(([key, value]) => {
            if (value) formData.append(key, value);
         });

         if (selectedImage) {
            // Upload only if a new image is selected
            const uploadResult = await startUpload([selectedImage]);
            if (!uploadResult) {
               toast.error("Failed to upload image");
               return;
            }
            imageUrl = uploadResult[0]?.url ?? "";
            formData.append("imageUrl", imageUrl)
         }

         const result = await updatePost(post.id, formData);

         if (result.success) {
            toast.success("Post updated successfully");
            router.push(`/posts/${post.slug}`);
         } else {
            toast.error("Failed to update post");
         }
      } catch (error) {
         toast.error("Something went wrong");
         console.error("Failed to update post:", error);
      }
   }

   return (
      <div className="container max-w-4xl mx-auto px-4 py-12">
         <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-instrument-serif">Edit Post</h1>
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
                           e.preventDefault();
                           setIsPreviewOpen(true);
                        }}
                     >
                        Preview
                     </Button>
                     <Button
                        type="submit"
                        disabled={isSubmitting || isUploading}
                        className="bg-black text-white hover:bg-black/90"
                     >
                        {(isSubmitting || isUploading) && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Update
                     </Button>
                  </div>
               </div>
            </form>
         </Form>

         <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
            <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-[#f3f1ea]">
               <DialogHeader>
                  <DialogTitle className="text-2xl font-instrument-serif">Preview Post</DialogTitle>
               </DialogHeader>
               <Preview
                  title={form.getValues("title") ?? ""}
                  excerpt={form.getValues("excerpt") ?? ""}
                  content={form.getValues("content") ?? ""}
                  imageUrl={form.getValues("imageUrl") ?? ""}
               />
            </DialogContent>
         </Dialog>
      </div>
   );
}
