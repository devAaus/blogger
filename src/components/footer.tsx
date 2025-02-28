import React from 'react'
import Image from 'next/image'
import { Facebook, Github, Instagram, Linkedin, X, } from 'lucide-react'
import logo from "public/logo.png"
import StyledLink from './StyledLink'

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
      <footer className="">
         <div className="container px-4 pt-8 md:pt-12">
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
                  <StyledLink href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                     About
                  </StyledLink>
                  <StyledLink href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                     Contact
                  </StyledLink>
                  <StyledLink href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                     Privacy
                  </StyledLink>
                  <StyledLink href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">
                     Terms
                  </StyledLink>
               </nav>

               {/* Social Links */}
               <div className="flex items-center gap-4">
                  {social.map((s) => (
                     <StyledLink key={s.href} href={s.href} className="text-muted-foreground hover:text-foreground transition-colors" target='_blank'>
                        {s.icon}
                        <span className="sr-only">
                           {s.title}
                        </span>
                     </StyledLink>
                  ))}
               </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 border-t py-4">
               <p className="text-center text-sm text-muted-foreground">
                  © {currentYear} blogger. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   )
}
