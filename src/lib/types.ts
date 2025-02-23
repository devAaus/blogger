import type { UseFormReturn } from "react-hook-form";
import type { PostFormValues } from "./validations/post";


export interface CreateAuthorParams {
   clerkId: string;
   email: string;
   userName: string;
   firstName: string;
   lastName: string;
   avatar: string;
}

export interface Author {
   id: string;
   clerkId: string;
   email: string;
   userName: string;
   firstName: string;
   lastName: string;
   avatar: string;
   createdAt: Date;
   updatedAt: Date;
}

export interface Category {
   id: string;
   title: string;
   slug: string;
   description: string;
   createdAt: Date;
   updatedAt: Date;
}

export interface CategoriesProps {
   category: Category[];
}

export interface Post {
   id: string
   title: string
   excerpt: string
   content: string
   authorId: string
   slug: string
   imageUrl: string
   createdAt: Date
   category: Category
   author: Author
}

export interface PostProps {
   post: Post[]
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

