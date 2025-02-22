import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <div className=" bg-[#f3f1ea]">
         <Navbar />
         <main className="min-h-screen">
            {children}
         </main>
         <Footer />
      </div>
   )
}

export default RootLayout