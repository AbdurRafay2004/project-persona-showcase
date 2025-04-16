
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
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
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get In Touch</a>
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
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
