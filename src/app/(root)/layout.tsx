import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className="min-h-screen bg-[#f3f1ea]">
         <Navbar />
         {children}
         <Footer />
      </div>
   )
}

export default RootLayout