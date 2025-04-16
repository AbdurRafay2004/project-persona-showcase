
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="min-h-screen flex items-center pt-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="font-bold">
                  <span className="text-primary">Hello, I'm</span>
                  <br />
                  <span className="text-4xl sm:text-5xl md:text-6xl">Your Name</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Computer Science Student & Creative Developer
                </p>
                <p className="text-lg md:text-xl max-w-lg">
                  Building beautiful digital experiences and solving problems through code. 
                  I blend technical skills with creative thinking.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild size="lg">
                    <Link to="/portfolio">View My Work</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Get In Touch</Link>
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end animate-scale-in">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-primary/10 overflow-hidden border-2 border-primary/20">
                  {/* Add your photo here */}
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800&h=800" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <Link to="/about" aria-label="Go to About page">
                <ArrowDown className="h-6 w-6 text-primary" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Home
