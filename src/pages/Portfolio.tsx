
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PortfolioSection } from "@/components/sections/portfolio-section"

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
            
            <PortfolioSection />
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Portfolio
