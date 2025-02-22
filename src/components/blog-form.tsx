import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ImagePlus, X } from "lucide-react";
import {
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from "@/components/ui/form";
import { FormProps } from "@/lib/types";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function BlogForm(
   {
      form,
      coverImage,
      setCoverImage,
      categories,
   }: FormProps
) {

   const fileInputRef = useRef<HTMLInputElement>(null)

   const handleImageClick = () => {
      fileInputRef.current?.click()
   }

   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
         if (file.size > 5 * 1024 * 1024) {
            toast.error("Image size should be less than 5MB")
            return
         }

         if (!file.type.startsWith("image/")) {
            toast.error("Please upload an image file")
            return
         }

         const reader = new FileReader()
         reader.onloadend = () => {
            setCoverImage(reader.result as string)
         }
         reader.readAsDataURL(file)
      }
   }

   const handleRemoveImage = () => {
      setCoverImage(null)
      if (fileInputRef.current) {
         fileInputRef.current.value = ""
      }
   }
   return (
      <Card>
         <CardContent className="p-6">
            <div className="space-y-6">
               <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                           <Input placeholder="Enter post title" className="text-lg" {...field} />
                        </FormControl>
                        <FormDescription>Write a clear, descriptive title for your post.</FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="excerpt"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Excerpt</FormLabel>
                        <FormControl>
                           <Textarea placeholder="Brief description of your post" className="h-20" {...field} />
                        </FormControl>
                        <FormDescription>
                           A short summary that appears in post previews (60-200 characters).
                        </FormDescription>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormItem>
                  <FormLabel>Cover Image</FormLabel>
                  <FormControl>
                     <div className="relative border-2 border-dashed rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                        <input
                           type="file"
                           ref={fileInputRef}
                           accept="image/*"
                           className="hidden"
                           onChange={handleImageChange}
                        />
                        {coverImage ? (
                           <div className="relative">
                              <img
                                 src={coverImage || "/placeholder.svg"}
                                 alt="Cover"
                                 className="mx-auto max-h-[300px] object-cover rounded-lg"
                              />
                              <Button
                                 type="button"
                                 variant="destructive"
                                 size="icon"
                                 className="absolute top-2 right-2"
                                 onClick={handleRemoveImage}
                              >
                                 <X className="h-4 w-4" />
                              </Button>
                           </div>
                        ) : (
                           <div className="py-8 cursor-pointer" onClick={handleImageClick}>
                              <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
                              <p className="mt-2 text-sm text-gray-500">Click or drag to upload cover image</p>
                              <p className="text-xs text-gray-400 mt-1">PNG, JPG or GIF up to 5MB</p>
                           </div>
                        )}
                     </div>
                  </FormControl>
                  <FormDescription>Recommended size: 1200x630 pixels. Max size: 5MB.</FormDescription>
               </FormItem>

               <div className="grid grid-cols-2 gap-6">
                  <FormField
                     control={form.control}
                     name="categoryId"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Category</FormLabel>
                           <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                 <SelectTrigger>
                                    <SelectValue placeholder="Select category" />
                                 </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                 {categories.map((category) => (
                                    <SelectItem key={category.value} value={category.value}>
                                       {category.label}
                                    </SelectItem>
                                 ))}
                              </SelectContent>
                           </Select>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>

               <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                           <Textarea placeholder="Write your post content here..." className="min-h-[400px]" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>
         </CardContent>
      </Card>
   );
}
