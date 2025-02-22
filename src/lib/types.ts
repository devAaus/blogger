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

