
import { Calendar, Briefcase, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Bachelor of Computer Science",
      organization: "University Name",
      duration: "2020 - Present",
      description: "Studying computer science with a focus on software engineering and data structures. Participating in coding competitions and student developer groups.",
      type: "education"
    },
    {
      id: 2,
      title: "Web Development Intern",
      organization: "Tech Company",
      duration: "Summer 2022",
      description: "Developed and maintained company websites using React and Node.js. Collaborated with designers to implement user interfaces and improve user experience.",
      type: "work"
    },
    {
      id: 3,
      title: "High School Diploma",
      organization: "High School Name",
      duration: "2016 - 2020",
      description: "Graduated with honors. Participated in science and mathematics competitions. Led the school's technology club.",
      type: "education"
    },
    {
      id: 4,
      title: "Freelance Developer",
      organization: "Self-employed",
      duration: "2021 - Present",
      description: "Building websites and applications for small businesses and individuals. Providing technical consultation and solutions based on client needs.",
      type: "work"
    },
    {
      id: 5,
      title: "Online Courses & Certifications",
      organization: "Various Platforms",
      duration: "2019 - Present",
      description: "Completed courses in web development, machine learning, and UI/UX design from platforms like Coursera, Udemy, and freeCodeCamp.",
      type: "education"
    }
  ]

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education":
        return <GraduationCap className="h-5 w-5" />
      case "work":
        return <Briefcase className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="section bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-primary mb-4">My Experience</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                My educational background and professional journey.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {/* Timeline items */}
              <div className="space-y-12">
                {experiences.map((experience, index) => (
                  <div 
                    key={experience.id}
                    className={`relative flex flex-col md:flex-row ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline item content */}
                    <div className="md:w-1/2 md:px-8 z-10">
                      <Card className="animate-fade-in">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-full bg-primary/10 text-primary">
                              {getTypeIcon(experience.type)}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{experience.duration}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold">{experience.title}</h3>
                          <p className="text-primary font-medium">{experience.organization}</p>
                          <p className="mt-3">{experience.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline node */}
                    <div className="absolute left-0 md:left-1/2 top-6 w-6 h-6 rounded-full border-4 border-background bg-primary md:-translate-x-1/2" />
                  </div>
                ))}
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

export default Experience
