import Image from "next/image"
import logo from "public/logo.png"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import StyledLink from "./StyledLink"

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
               <StyledLink href="/" className="flex items-center space-x-2">
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
               </StyledLink>
               <nav className="hidden md:flex gap-6">
                  {navLinks.map((link) => (
                     <StyledLink
                        key={link.href}
                        href={link.href}
                        className="text-sm font-medium transition-colors hover:text-primary"
                     >
                        {link.title}
                     </StyledLink>
                  ))}
               </nav>
            </div>
            <div className="flex items-center gap-4">
               <SignedIn>
                  <StyledLink href={'/posts/new'} button>
                     Create a Post
                  </StyledLink>
                  <StyledLink href={'/author/dashboard'} button>
                     Dashboard
                  </StyledLink>
                  <UserButton />
               </SignedIn>
               <SignedOut>
                  <StyledLink href="/sign-in" button>Login</StyledLink>
               </SignedOut>
            </div>
         </div>
      </header>
   )
}
