import Link from "next/link"
import Image from "next/image"
import logo from "public/logo.png"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Button } from "./ui/button"

const navLinks = [
   {
      title: "All Posts",
      href: "/posts"
   },
   {
      title: "Categories",
      href: "/categories"
   },
   {
      title: "About",
      href: "/about"
   }
]

export default function Navbar() {
   return (
      <header className="sticky top-0 z-50 w-full border-b bg-[#F2F1EA]/80 backdrop-blur-lg">
         <div className="container flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-6">
               <Link href="/" className="flex items-center space-x-2">
                  <div className="w-[72px] h-[20px] relative">
                     <Image
                        src={logo}
                        alt="Blog Logo"
                        fill
                        sizes="72px"
                        className="object-contain object-left text-black"
                        priority
                        quality={100}
                     />
                  </div>
               </Link>
               <nav className="hidden md:flex gap-6">
                  {navLinks.map((link) => (
                     <Link key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:text-primary">
                        {link.title}
                     </Link>
                  ))}
               </nav>
            </div>
            <div className="flex items-center gap-4">
               <SignedIn>
                  <UserButton />
               </SignedIn>
               <SignedOut>
                  <Button asChild>
                     <Link href="/sign-in">Login</Link>
                  </Button>
               </SignedOut>
            </div>
         </div>
      </header>
   )
}
