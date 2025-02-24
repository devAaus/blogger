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
import {
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from "@/components/ui/form";
import type { FormProps } from "@/lib/types";
import FileUploader from "../file-uploader";
import TiptapEditor from "../tiptap-editor";


export default function BlogForm(
   {
      form,
      categories,
      setSelectedImage,
      previewUrl,
      setPreviewUrl,
      fileInputRef,
   }: FormProps
) {
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
                     <FileUploader
                        setSelectedImage={setSelectedImage}
                        previewUrl={previewUrl}
                        setPreviewUrl={setPreviewUrl}
                        fileInputRef={fileInputRef}
                     />
                  </FormControl>
                  <FormDescription>Recommended size: 1200x630 pixels. Max size: 5MB.</FormDescription>
               </FormItem>

               <div className="grid grid-cols-2 gap-6">
                  <FormField
                     control={form.control}
                     name="categorySlug"
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
                                    <SelectItem key={category.slug} value={category.slug}>
                                       {category.title}
                                    </SelectItem>
                                 ))}
                              </SelectContent>
                           </Select>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>

               {/* <FormField
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
               /> */}

               <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                           <TiptapEditor
                              initialContent={field.value}
                              onChange={field.onChange}
                           />
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
