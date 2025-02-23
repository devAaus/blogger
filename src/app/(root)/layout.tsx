import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Toaster } from "sonner"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className=" bg-[#f3f1ea]">
         <div className="container">
            <Navbar />
            <Toaster />
            <main className="min-h-screen">
               {children}
            </main>
            <Footer />
         </div>
      </div>
   )
}

export default RootLayout