import React from 'react'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { ImagePlus, X } from "lucide-react";
import type { FileProps } from '@/lib/types';
import Image from 'next/image';
import { Input } from './ui/input';

export default function FileUploader(
   {
      setSelectedImage,
      previewUrl,
      setPreviewUrl,
      fileInputRef,
   }: FileProps
) {
   const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0]
      if (file) {
         // Validate file type
         if (!file.type.startsWith("image/")) {
            toast.error("Please select an image file")
            return
         }

         // Validate file size (4MB)
         if (file.size > 4 * 1024 * 1024) {
            toast.error("Image must be less than 4MB")
            return
         }

         // Create preview URL
         const url = URL.createObjectURL(file)
         setSelectedImage(file)
         setPreviewUrl(url)
      }
   }

   const handleRemoveImage = () => {
      setSelectedImage(null)
      setPreviewUrl(null)
      if (fileInputRef.current) {
         fileInputRef.current.value = ""
      }
   }

   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
      const file = event.dataTransfer.files?.[0]
      if (file) {
         if (!file.type.startsWith("image/")) {
            toast.error("Please drop an image file")
            return
         }
         if (file.size > 4 * 1024 * 1024) {
            toast.error("Image must be less than 4MB")
            return
         }
         const url = URL.createObjectURL(file)
         setSelectedImage(file)
         setPreviewUrl(url)
      }
   }

   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault()
   }
   return (
      <div
         className="relative border-2 border-dashed rounded-lg p-4 text-center hover:border-gray-400 transition-colors"
         onDrop={handleDrop}
         onDragOver={handleDragOver}
      >
         <Input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={handleImageSelect}
         />
         {previewUrl ? (
            <div className="relative">
               <Image
                  src={previewUrl || "/placeholder.svg"}
                  alt="Cover preview"
                  width={300}
                  height={300}
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
            <div className="py-8 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
               <ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
               <p className="mt-2 text-sm text-gray-500">Click or drag to upload cover image</p>
               <p className="text-xs text-gray-400 mt-1">PNG, JPG or GIF up to 4MB</p>
            </div>
         )}
      </div>
   )
}
