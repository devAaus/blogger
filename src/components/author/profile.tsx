import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Calendar, Globe, MapPin } from "lucide-react"
import { Author } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

interface ProfileProps {
   user: Author
}

export default function Profile(
   { user }: { user: any }
) {

   const firstName = user?.firstName ?? ''
   const lastName = user?.lastName ?? ''
   return (
      <div className="mb-12">
         <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
               <Avatar className="w-32 h-32">
                  <AvatarImage src={user?.avatar} alt={user?.firstName} />
                  <AvatarFallback>{user?.firstName}</AvatarFallback>
               </Avatar>
            </div>

            {/* User Info */}
            <div className="flex-1">
               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                     <h1 className="text-3xl font-instrument-serif mb-1">
                        {firstName + ' ' + lastName}
                     </h1>
                     <p className="text-muted-foreground">@{user.userName}</p>
                  </div>
                  <div className="flex gap-3">
                     <Button>Follow</Button>
                     <Button variant="outline">Share Profile</Button>
                  </div>
               </div>

               {/* <div className="mb-6">
                  <p className="text-lg mb-4">{user.bio}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                     <div className="flex items-center gap-1">
                        <Badge variant="secondary">{user.role}</Badge>
                     </div>
                     <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Joined {user.joinedDate}
                     </div>
                     <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {user.location}
                     </div>
                     <div className="flex items-center gap-1">
                        <Globe className="h-4 w-4" />
                        <a
                           href={user.website}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="hover:text-foreground transition-colors"
                        >
                           {user.website.replace("https://", "")}
                        </a>
                     </div>
                  </div>
               </div> */}

               {/* Stats */}
               {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Card>
                     <CardContent className="p-4">
                        <div className="text-2xl font-bold">{user.stats.posts}</div>
                        <div className="text-sm text-muted-foreground">Posts</div>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardContent className="p-4">
                        <div className="text-2xl font-bold">{user.stats.followers}</div>
                        <div className="text-sm text-muted-foreground">Followers</div>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardContent className="p-4">
                        <div className="text-2xl font-bold">{user.stats.views}</div>
                        <div className="text-sm text-muted-foreground">Views</div>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardContent className="p-4">
                        <div className="text-2xl font-bold">{user.stats.likes}</div>
                        <div className="text-sm text-muted-foreground">Likes</div>
                     </CardContent>
                  </Card>
               </div> */}
            </div>
         </div>
      </div>
   )
}
