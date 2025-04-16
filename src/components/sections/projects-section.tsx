
import { ArrowRight, Github, Lightbulb, LucideIcon, Brain, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Project = {
  id: number
  title: string
  description: string
  icon: LucideIcon
  progress: number
  link?: string
}

export function ProjectsSection() {
  const currentProjects: Project[] = [
    {
      id: 1,
      title: "Learning React Native",
      description: "Building cross-platform mobile applications. Currently working on a habit tracking app to apply my knowledge.",
      icon: Brain,
      progress: 60,
      link: "https://github.com"
    },
    {
      id: 2,
      title: "YouTube Tech Channel",
      description: "Creating educational content about programming, technologies, and my journey as a developer.",
      icon: Lightbulb,
      progress: 40,
      link: "https://youtube.com"
    },
    {
      id: 3,
      title: "Open-Source Contributions",
      description: "Contributing to open-source projects to gain experience and give back to the developer community.",
      icon: Github,
      progress: 25,
      link: "https://github.com"
    },
    {
      id: 4,
      title: "Personal Blog Website",
      description: "Developing a blog site to share my knowledge, experiences, and tutorials with others.",
      icon: Code,
      progress: 75,
      link: "https://github.com"
    }
  ]

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary mb-4">Current Projects</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            What I'm currently learning and building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentProjects.map((project) => (
            <Card key={project.id} className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{project.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    {project.link && (
                      <div className="mt-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                            View Project
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
