import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function NotFound() {
   return (
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 text-center">
         <Search className="h-20 w-20 text-muted-foreground mb-8" />
         <h1 className="text-4xl font-instrument-serif mb-4">Page Not Found</h1>
         <p className="text-lg text-muted-foreground mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved.
         </p>
         <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
               <Link href="/">Go Home</Link>
            </Button>
            <Button variant="outline" asChild>
               <Link href="/posts">Browse Posts</Link>
            </Button>
         </div>
      </div>
   )
}