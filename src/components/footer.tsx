import Link from 'next/link'
import React from 'react'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import logo from "public/logo-white.png"

export default function Footer() {
   return (
      <footer className="bg-black text-gray-200">
         <div className="px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
               <div className="space-y-4">
                  <div className="w-[120px] h-[32px] relative">
                     <Image
                        src={logo}
                        alt="Blog Logo"
                        fill
                        sizes="120px"
                        className="object-contain object-left"
                        priority
                        quality={100}
                     />
                  </div>
                  <p className="text-gray-400 text-sm">Discover stories, thinking and expertise from writers on any topic.</p>
                  <div className="flex space-x-4">
                     <Link href="https://twitter.com" className="hover:text-white transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                     </Link>
                     <Link href="https://facebook.com" className="hover:text-white transition-colors">
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                     </Link>
                     <Link href="https://instagram.com" className="hover:text-white transition-colors">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                     </Link>
                     <Link href="https://linkedin.com" className="hover:text-white transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                     </Link>
                     <Link href="https://youtube.com" className="hover:text-white transition-colors">
                        <Youtube className="h-5 w-5" />
                        <span className="sr-only">YouTube</span>
                     </Link>
                     <Link href="https://github.com" className="hover:text-white transition-colors">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                     </Link>
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                           About Us
                        </Link>
                     </li>
                     <li>
                        <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                           Contact
                        </Link>
                     </li>
                     <li>
                        <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                           Careers
                        </Link>
                     </li>
                     <li>
                        <Link href="/press" className="text-gray-400 hover:text-white transition-colors">
                           Press Kit
                        </Link>
                     </li>
                     <li>
                        <Link href="/advertise" className="text-gray-400 hover:text-white transition-colors">
                           Advertise with Us
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Categories */}
               <div>
                  <h3 className="font-semibold text-lg mb-4">Categories</h3>
                  <ul className="space-y-3">
                     <li>
                        <Link href="/categories/technology" className="text-gray-400 hover:text-white transition-colors">
                           Technology
                        </Link>
                     </li>
                     <li>
                        <Link href="/categories/design" className="text-gray-400 hover:text-white transition-colors">
                           Design
                        </Link>
                     </li>
                     <li>
                        <Link href="/categories/development" className="text-gray-400 hover:text-white transition-colors">
                           Development
                        </Link>
                     </li>
                     <li>
                        <Link href="/categories/business" className="text-gray-400 hover:text-white transition-colors">
                           Business
                        </Link>
                     </li>
                     <li>
                        <Link href="/categories/lifestyle" className="text-gray-400 hover:text-white transition-colors">
                           Lifestyle
                        </Link>
                     </li>
                  </ul>
               </div>

               {/* Contact Info */}
               <div>
                  <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                  <ul className="space-y-3">
                     <li className="flex items-center space-x-3">
                        <Mail className="h-5 w-5" />
                        <span className="text-gray-400">contact@example.com</span>
                     </li>
                     <li className="flex items-center space-x-3">
                        <Phone className="h-5 w-5" />
                        <span className="text-gray-400">+1 (555) 123-4567</span>
                     </li>
                     <li className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5" />
                        <span className="text-gray-400">
                           123 Blog Street
                           <br />
                           San Francisco, CA 94105
                        </span>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Newsletter */}
            <div className="mt-12 pt-8 border-t border-gray-800">
               <div className="max-w-md">
                  <h3 className="font-semibold text-lg mb-4">Subscribe to our newsletter</h3>
                  <div className="flex gap-2">
                     <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                     />
                     <Button className="bg-white text-black hover:bg-white/90">Subscribe</Button>
                  </div>
               </div>
            </div>
         </div>
         <div className="border-t border-gray-800">
            <div className=" px-4 py-6">
               <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-sm text-gray-400">
                     © {new Date().getFullYear()} Your Blog Name. All rights reserved.
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                     <Link href="/privacy" className="hover:text-white transition-colors">
                        Privacy Policy
                     </Link>
                     <Separator orientation="vertical" className="h-4 bg-gray-800" />
                     <Link href="/terms" className="hover:text-white transition-colors">
                        Terms of Service
                     </Link>
                     <Separator orientation="vertical" className="h-4 bg-gray-800" />
                     <Link href="/cookies" className="hover:text-white transition-colors">
                        Cookie Policy
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   )
}
