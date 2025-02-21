import { Card, CardContent, } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TopAuthors({ topAuthors }: { topAuthors: any[] }) {
   return (
      <div>
         <h2 className="text-2xl font-instrument-serif mb-6">Top Authors</h2>
         <div className="space-y-4">
            {topAuthors.map((author) => (
               <Card key={author.name}>
                  <CardContent className="p-6">
                     <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                           <AvatarImage src={author.avatar} alt={author.name} />
                           <AvatarFallback>{author.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                           <h3 className="font-medium">{author.name}</h3>
                           <p className="text-sm text-gray-500">{author.role}</p>
                        </div>
                        <div className="text-right">
                           <div className="font-medium">{author.posts} posts</div>
                           <div className="text-sm text-gray-500">{author.followers} followers</div>
                        </div>
                     </div>
                  </CardContent>
               </Card>
            ))}
         </div>
      </div>
   )
}
