import { UseFormReturn } from "react-hook-form"
import { PostFormValues } from "./validations/post"

export type Role = "user" | "admin"

export interface User {
   id: string
   name: string
   email: string
   role: Role
}

export interface Post {
   id: string
   title: string
   content: string
   authorId: string
   published: boolean
   createdAt: Date
}

export interface Category {
   id: number;
   title: string;
   slug: string;
   description: string;
   createdAt: Date;
   updatedAt: Date;
   _count: {
      posts: number;
   };
}

export interface CategoriesProps {
   category: Category[];
}

export interface FileProps {
   setSelectedImage: (value: File | null) => void;
   previewUrl: string | null;
   setPreviewUrl: (value: string | null) => void;
   fileInputRef: React.RefObject<HTMLInputElement>;
}

export interface FormProps {
   form: UseFormReturn<PostFormValues>;
   categories: Category[];
   setSelectedImage: (value: File | null) => void;
   previewUrl: string | null;
   setPreviewUrl: (value: string | null) => void;
   fileInputRef: React.RefObject<HTMLInputElement>;
}

