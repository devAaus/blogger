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

export interface categories {
   value: string;
   label: string;
}

export interface FormProps {
   form: UseFormReturn<PostFormValues>;
   coverImage: string | null;
   setCoverImage: (value: string | null) => void;
   categories: categories[];
}

