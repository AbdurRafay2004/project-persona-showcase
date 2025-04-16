
import { useState } from "react"
import { Github, ExternalLink, Code, PenTool, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  links: {
    github?: string
    live?: string
  }
}

export function PortfolioSection() {
  const categories = ["All", "Tech", "Creative", "Hobby"]
  const [activeCategory, setActiveCategory] = useState("All")
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with React and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      category: "Tech",
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with user authentication and payment processing.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Tech",
      links: {
        github: "https://github.com"
      }
    },
    {
      id: 3,
      title: "Social Media Banner",
      description: "A promotional banner design for a Facebook page.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=500",
      tags: ["Photoshop", "Design"],
      category: "Creative",
      links: {
        live: "https://example.com"
      }
    },
    {
      id: 4,
      title: "Cinematic Vlog",
      description: "A short vlog showcasing video editing and storytelling skills.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=800&h=500",
      tags: ["Premiere Pro", "Video Editing"],
      category: "Creative",
      links: {
        live: "https://youtube.com"
      }
    },
    {
      id: 5,
      title: "Anime Review Blog",
      description: "A personal hobby project for reviewing anime and manga.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=800&h=500",
      tags: ["WordPress", "Content Creation"],
      category: "Hobby",
      links: {
        live: "https://example.com"
      }
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "A weather application that displays forecast data from an API.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=800&h=500",
      tags: ["JavaScript", "API", "CSS"],
      category: "Tech",
      links: {
        github: "https://github.com",
        live: "https://example.com"
      }
    }
  ]

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Tech":
        return <Code className="h-4 w-4" />
      case "Creative":
        return <PenTool className="h-4 w-4" />
      case "Hobby":
        return <Video className="h-4 w-4" />
      default:
        return null
    }
  }

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary mb-4">My Portfolio</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A collection of my technical and creative projects.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="gap-2"
            >
              {getCategoryIcon(category)}
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group animate-fade-in">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="gap-1">
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 pt-0">
                {project.links.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.links.live && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
