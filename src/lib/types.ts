import type { UseFormReturn } from "react-hook-form";
import type { PostFormValues } from "./validations/post";


export interface CreateUserParams {
   id: string;
   email: string;
   userName: string;
   firstName: string;
   lastName: string;
   avatar: string;
}

export interface User {
   id: string;
   email: string;
   userName: string;
   firstName: string;
   lastName: string;
   avatar: string;
   createdAt: Date;
}
export interface PostProps {
   id: string
   title: string
   excerpt: string
   content: string
   userId: string
   slug: string
   imageUrl: string
   createdAt: Date
   category: Category
   user: User
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

