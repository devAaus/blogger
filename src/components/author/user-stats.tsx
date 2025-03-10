import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Eye, ThumbsUp, MessageCircle } from "lucide-react"


interface UserStats {
   stats: {
      totalPosts: number;
      totalViews: number;
   }
}

export function UserStats({ stats }: UserStats) {
   const allStats = [
      {
         title: "Total Posts",
         value: stats.totalPosts,
         icon: BookOpen,
         description: "Published posts",
      },
      {
         title: "Total Views",
         value: stats.totalViews,
         icon: Eye,
         description: "All-time views",
      },
      {
         title: "Likes",
         value: "184",
         icon: ThumbsUp,
         description: "Across all posts",
      },
      {
         title: "Comments",
         value: "56",
         icon: MessageCircle,
         description: "Total comments received",
      },
   ]

   return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
         {allStats.map((stat) => (
            <Card key={stat.title}>
               <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <stat.icon className="h-4 w-4 text-gray-500" />
               </CardHeader>
               <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-gray-500">{stat.description}</p>
               </CardContent>
            </Card>
         ))}
      </div>
   )
}

