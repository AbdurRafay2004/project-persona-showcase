
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const About = () => {
  const skills = [
    { category: "Programming", items: ["JavaScript", "TypeScript", "Python", "React", "Node.js"] },
    { category: "Design", items: ["UI/UX", "Figma", "Photoshop", "Video Editing"] },
    { category: "Languages", items: ["English (Fluent)", "Your Native Language"] },
    { category: "Other", items: ["Git", "RESTful APIs", "Problem Solving", "Communication"] },
  ]

  const interests = [
    "Programming & Software Development",
    "English Literature & Writing",
    "Manga & Anime",
    "YouTube Content Creation",
    "Technology & Innovation",
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="section bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-primary mb-4">About Me</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Get to know me, my background, and what drives me.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h2>My Story</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    Hello! I'm <span className="font-semibold">Your Name</span>, a Computer Science student passionate about 
                    building digital solutions and creative projects.
                  </p>
                  <p>
                    I believe in the power of technology to solve problems and improve lives. My journey in tech started with 
                    [your story here], and I've been expanding my skills ever since.
                  </p>
                  <p>
                    When I'm not coding, you can find me creating YouTube content, exploring manga, or diving into English 
                    literature. I enjoy bringing creativity into everything I do.
                  </p>
                  <p>
                    Currently, I'm focusing on [your current focus], while also exploring opportunities in [areas of interest].
                  </p>
                </div>
                
                <div className="pt-4">
                  <Button className="gap-2">
                    <Download size={16} />
                    Download CV
                  </Button>
                </div>
              </div>
              
              <div className="space-y-8">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {skills.map((skillGroup) => (
                        <div key={skillGroup.category}>
                          <h4 className="font-semibold text-primary mb-2">{skillGroup.category}</h4>
                          <ul className="space-y-1">
                            {skillGroup.items.map((skill) => (
                              <li key={skill} className="flex items-center">
                                <span className="mr-2">•</span>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <span 
                          key={interest}
                          className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default About
