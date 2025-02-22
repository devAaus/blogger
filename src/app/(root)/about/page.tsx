import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { stats, team } from "@/lib/data"

export default function AboutPage() {


   return (
      <main className="flex-1">
         {/* Hero Section */}
         <section className="container px-4 py-12 md:py-24">
            <div className="max-w-2xl mx-auto text-center mb-12">
               <h1 className="text-4xl font-instrument-serif mb-4">About Us</h1>
               <p className="text-xl text-muted-foreground mb-8">
                  We`&apos;`re building the best platform for discovering and sharing knowledge.
               </p>
               <div className="flex justify-center gap-4">
                  <Button asChild>
                     <Link href="/posts">Start Reading</Link>
                  </Button>
                  <Button variant="outline" asChild>
                     <Link href="/contact">Contact Us</Link>
                  </Button>
               </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
               {stats.map((stat) => (
                  <Card key={stat.label}>
                     <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </section>

         {/* Mission Section */}
         <section className="container px-4 py-12">
            <div className="max-w-3xl mx-auto">
               <h2 className="text-3xl font-instrument-serif mb-6">Our Mission</h2>
               <div className="prose prose-lg">
                  <p>
                     We believe in the power of knowledge sharing and the importance of making quality content accessible to
                     everyone. Our platform connects passionate writers with curious readers, creating a community where ideas
                     flourish and conversations matter.
                  </p>
                  <p>
                     Every day, thousands of readers come to our platform to learn, grow, and connect with writers who share
                     their expertise and experiences. We`&apos;`re committed to maintaining a space that promotes thoughtful discourse
                     and meaningful engagement.
                  </p>
               </div>
            </div>
         </section>

         {/* Team Section */}
         <section className="container px-4 py-12">
            <h2 className="text-3xl font-instrument-serif mb-8 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
               {team.map((member) => (
                  <Card key={member.name} className="overflow-hidden">
                     <div className="aspect-square relative">
                        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                     </div>
                     <CardContent className="p-6">
                        <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                        <Badge variant="secondary" className="mb-3">
                           {member.role}
                        </Badge>
                        <p className="text-sm text-muted-foreground">{member.bio}</p>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </section>

         {/* CTA Section */}
         <section className="container px-4 py-12">
            <Card className="bg-muted">
               <CardContent className="p-12 text-center">
                  <h2 className="text-2xl font-instrument-serif mb-4">Join Our Community</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                     Whether you`&apos;`re here to read, write, or connect, we`&apos;`d love to have you as part of our community.
                  </p>
                  <Button asChild size="lg">
                     <Link href="/posts">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                     </Link>
                  </Button>
               </CardContent>
            </Card>
         </section>
      </main>
   )
}

