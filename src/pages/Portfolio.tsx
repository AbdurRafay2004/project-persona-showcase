
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-primary mb-4">Portfolio</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                A showcase of my technical and creative projects.
              </p>
            </div>
            
            {/* This section will use the existing portfolio components */}
            {/* Import and use PortfolioSection component content here */}
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Portfolio
