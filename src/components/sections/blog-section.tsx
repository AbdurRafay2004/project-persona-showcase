
import { ArrowRight, Calendar } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  image: string
  tags: string[]
  slug: string
}

export function BlogSection() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt: "Learn the basics of React Hooks and how they can simplify your code while making it more readable and maintainable.",
      date: "April 15, 2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800&h=500",
      tags: ["React", "JavaScript", "Web Development"],
      slug: "getting-started-with-react-hooks"
    },
    {
      id: 2,
      title: "My Journey Learning TypeScript",
      excerpt: "Reflections on my experience learning TypeScript, challenges faced, and how it improved my development workflow.",
      date: "March 22, 2023",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=500",
      tags: ["TypeScript", "Programming", "Learning"],
      slug: "my-journey-learning-typescript"
    },
    {
      id: 3,
      title: "Top 5 Anime of 2023 So Far",
      excerpt: "A review of my favorite anime series released this year, with recommendations based on different preferences.",
      date: "February 10, 2023",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=800&h=500",
      tags: ["Anime", "Reviews", "Entertainment"],
      slug: "top-5-anime-of-2023"
    }
  ]

  return (
    <section id="blog" className="section bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-primary mb-4">Blog & Notes</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Thoughts, tutorials, and things I've learned along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden h-full flex flex-col animate-fade-in">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6 flex-grow">
                <div className="flex items-center text-sm text-muted-foreground mb-3 gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="gap-2 hover:text-primary">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
