import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Facebook, Github, Instagram, Linkedin, X, } from 'lucide-react'
import logo from "public/logo-white.png"

export default function Footer() {
   const social = [
      {
         icon: <Facebook className="h-6 w-6" />,
         href: "https://facebook.com",
         title: "Facebook"
      },
      {
         icon: <Github className="h-6 w-6" />,
         href: "https://github.com",
         title: "Github"
      },
      {
         icon: <Instagram className="h-6 w-6" />,
         href: "https://instagram.com",
         title: "Instagram"
      },
      {
         icon: <Linkedin className="h-6 w-6" />,
         href: "https://linkedin.com",
         title: "Linkedin"
      },
      {
         icon: <X className="h-6 w-6" />,
         href: "https://twitter.com",
         title: "Twitter"
      },
   ]

   const currentYear = new Date().getFullYear()
   return (
      <footer className="bg-black text-gray-200">
         <div className=" px-4 py-8 md:py-12">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
               {/* Logo and Tagline */}
               <div className="flex flex-col items-center gap-2 md:items-start">
                  <div className="w-[72px] h-[20px] relative">
                     <Image
                        src={logo}
                        alt="Blog Logo"
                        fill
                        sizes="72px"
                        className="object-contain object-left"
                        priority
                        quality={100}
                     />
                  </div>
                  <p className="text-sm text-muted-foreground">Stories that inspire and educate.</p>
               </div>

               {/* Links */}
               <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
                  <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                     About
                  </Link>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                     Contact
                  </Link>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                     Privacy
                  </Link>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                     Terms
                  </Link>
               </nav>

               {/* Social Links */}
               <div className="flex items-center gap-4">
                  {social.map((s) => (
                     <Link key={s.href} href={s.href} className="text-muted-foreground hover:text-foreground transition-colors">
                        {s.icon}
                        <span className="sr-only">
                           {s.title}
                        </span>
                     </Link>
                  ))}
               </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 border-t pt-8">
               <p className="text-center text-sm text-muted-foreground">
                  © {currentYear} blogger. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   )
}
