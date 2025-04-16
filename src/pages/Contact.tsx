
import { useState } from "react"
import { Send, Github, Linkedin, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }
  
  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
    { name: "YouTube", url: "https://youtube.com", icon: Youtube },
    { name: "Email", url: "mailto:hello@example.com", icon: Mail }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="section">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-primary mb-4">Get In Touch</h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Have a question or want to work together? Feel free to contact me!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="animate-fade-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email address"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your message"
                          rows={5}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="h-4 w-4" />
                      </Button>
                      
                      {submitSuccess && (
                        <p className="text-center text-green-600 mt-2">
                          Message sent successfully! I'll get back to you soon.
                        </p>
                      )}
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              <div className="space-y-8 animate-fade-in">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <p className="text-muted-foreground mb-6">
                    You can find me on the following platforms or send me an email directly.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <Button key={link.name} variant="outline" size="lg" asChild>
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <Icon className="h-5 w-5" />
                            {link.name}
                          </a>
                        </Button>
                      )
                    })}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Looking For</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-lg">•</span>
                      <span>Freelance opportunities in web development and design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-lg">•</span>
                      <span>Collaboration on open-source projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-lg">•</span>
                      <span>Internship or part-time positions in tech</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary text-lg">•</span>
                      <span>Networking with fellow developers and creators</span>
                    </li>
                  </ul>
                </div>
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

export default Contact
