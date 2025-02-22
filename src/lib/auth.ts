import { User } from "./types"



// Mock current user - in real app, this would come from your auth provider
export function getCurrentUser(): User | null {
   // This is mock data - replace with your actual auth logic
   return {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "user",
   }
}

export function canManagePost(userId: string, postAuthorId: string, userRole: string): boolean {
   return userId === postAuthorId || userRole === "admin"
}

