import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
   return (
      <section className="relative bg-[#f3f1ea] overflow-hidden">
         <div className="absolute inset-0 bg-grid-pattern opacity-5" />
         <div className=" px-4 md:px-6 py-20 md:py-32">
            <div className="flex flex-col items-center space-y-4 text-center relative z-10">
               <div className="space-y-2">
                  <h1 className="text-4xl font-instrument-serif sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto leading-tight">
                     Discover Stories That <span className="font-instrument-serif-italic">Inspire</span> and{" "}
                     <span className="font-instrument-serif-italic">Educate</span>
                  </h1>
                  <p className="max-w-[700px] text-gray-500 md:text-xl mx-auto">
                     Join our community of writers and readers. Explore stories on technology, design, and development.
                  </p>
               </div>
               <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
                  <Button asChild size="lg" className="bg-black text-white hover:bg-black/90">
                     <Link href="/posts">
                        Start Reading
                        <ArrowRight className="ml-2 h-4 w-4" />
                     </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                     <Link href="/posts/new">Start Writing</Link>
                  </Button>
               </div>
            </div>
         </div>
      </section>
   )
}
