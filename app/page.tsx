import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Mail, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const hackathonData = {
  brand: {
    name: "Patent-a-thon 1.0",
    tagline: "Ideate • Innovate • Patent",
    logo: "/LOGO.png",
  },
  meta: {
    date: "17 October 2025",
    time: "Full Day Event",
    venue: "Chandigarh University", 
    city: "Chandigarh",
  },
  links: {
    register: "",
    brochure: "https://drive.google.com/patentathon-brochure",
    rulebook: "https://docs.google.com/patentathon-rules",
    whatsapp: "https://chat.whatsapp.com/patentathon2025",
    email: "cumail.in",
    phone: "+91-9876543210",
    map: "https://maps.google.com/chandigarh-university",
    website: "https://patentathon2025.com",
    socials: {
      instagram: "https://instagram.com/patentathon2025",
      linkedin: "https://linkedin.com/company/patentathon",
      twitter: "https://twitter.com/patentathon2025",
      youtube: "https://youtube.com/@patentathon2025",
    },
  },
  numbers: [
    { label: "Participants", value: "500+" },
    { label: "Ideas", value: "∞" },
    { label: "Tracks", value: "9" },
    { label: "Innovation", value: "∞" },
  ],
  tracks: [
    { title: "HealthTech Innovation", desc: "Revolutionary healthcare solutions and medical device patents" },
    { title: "Sustainable Technology", desc: "Green tech innovations for environmental sustainability" },
    { title: "AI & Machine Learning", desc: "Cutting-edge AI algorithms and intelligent systems" },
    { title: "IoT & Smart Systems", desc: "Connected devices and smart infrastructure solutions" },
    { title: "FinTech Solutions", desc: "Financial technology and blockchain innovations" },
    { title: "EdTech Platforms", desc: "Educational technology and learning management systems" },
    { title: "AgriTech Solutions", desc: "Agricultural technology and farming innovations" },
    { title: "Smart Manufacturing", desc: "Industry 4.0 and automated manufacturing systems" },
    { title: "Open Innovation", desc: "Any innovative solution across all domains and industries" },
  ],
  timeline: [
    { date: "29 Aug", label: "Registration Start" },
    { date: "13 Sep", label: "Registration End" },
    { date: "17 Sep", label: "Draft to Craft" },
    { date: "26 Sep", label: "Compile to File" },
    { date: "15 Oct", label: "Grand Finale" },
    { date: "17 Oct", label: "Patent-a-thon 1.0" },
  ],
  mentors: [
    { name: "Dr. Sachin Ahuja", role: "ED Engineering", org: "Chandigarh University" },
    { name: "Dr. Ruchika Gupta", role: "AD UIE Research", org: "Chandigarh University" },
    { name: "Dr. Puneet Kumar", role: "AD CSE", org: "Chandigarh University" },
    { name: "Abhishek Kumar", role: "AD, CSE", org: "Chandigarh University" },
    { name: "Dr. Gurmeet Saini", role: "Faculty Co-Advisor", org: "Chandigarh University" },
  ],
  communityPartners: ["Campus to Corporate"],
  faqs: [
    {
      q: "Who can participate in Patent-a-thon 1.0?",
      a: "All undergraduate and graduate students from recognized universities and colleges can participate.",
    },
    { q: "What is the team size limit?", a: "Teams can have 2-4 members. Solo participation is also allowed." },
    {
      q: "Do I need prior patent experience?",
      a: "No prior patent experience required. We'll provide workshops and mentorship on patent filing.",
    },
    {
      q: "What should I bring to the event?",
      a: "Bring your laptop, chargers, and any hardware you might need. Food and refreshments will be provided.",
    },
    {
      q: "How will intellectual property be handled?",
      a: "Participants retain full ownership of their innovations. We provide guidance on patent protection.",
    },
    { q: "Is there any registration fee?", a: "No, the event is completely free for all participants." },
  ],
}

export default function PatentaThonLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blackhole-animation"></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full orbit-animation"></div>
        <div
          className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blackhole-animation"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg">
              {hackathonData.brand.logo}
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">{hackathonData.brand.name}</h1>
              <p className="text-sm text-muted-foreground">{hackathonData.brand.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href={hackathonData.links.register} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={hackathonData.links.whatsapp} target="_blank" rel="noopener noreferrer">
                Join WhatsApp
              </a>
            </Button>
            <ThemeToggle className="ml-1" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {hackathonData.brand.name}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Join Chandigarh University's premier patent-focused innovation event where groundbreaking ideas transform
              into protected intellectual property.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="font-semibold">{hackathonData.meta.date}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-semibold">{hackathonData.meta.time}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <a
                  href={hackathonData.links.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-primary underline-offset-4 hover:underline"
                >
                  {hackathonData.meta.venue}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href={hackathonData.links.register} target="_blank" rel="noopener noreferrer">
                  Register Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={hackathonData.links.whatsapp} target="_blank" rel="noopener noreferrer">
                  Join WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {hackathonData.numbers.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Innovation Tracks</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Choose your domain and build groundbreaking solutions that can be patented
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathonData.tracks.map((track, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-balance">{track.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-pretty">{track.desc}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Event Timeline</h3>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {hackathonData.timeline.map((event, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Badge variant="secondary" className="min-w-20 justify-center">
                    {event.date}
                  </Badge>
                  <div className="text-foreground font-medium">{event.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Mentors */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Expert Mentors</h3>
            <p className="text-lg text-muted-foreground text-pretty">
              Learn from industry experts and academic leaders
            </p>
          </div>

          {(() => {
            const mentorPhotos: Record<string, string> = {
              "Dr. Sachin Ahuja": "/Sachin Sir.jpeg",
              "Dr. Ruchika Gupta": "/Ruchika M.jpeg",
              "Dr. Puneet Kumar": "/Puneet SIr.jpeg",
              "Abhishek Kumar": "/abhishek.jpeg",
              "Dr. Gurmeet Saini": "/Gurmeet.jpeg",
            }
            return (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {hackathonData.mentors.map((mentor, index) => (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <img
                        src={mentorPhotos[mentor.name] || "/placeholder.svg?height=128&width=128&query=mentor portrait"}
                        alt={`${mentor.name} portrait`}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                      <div className="font-semibold text-foreground text-lg mb-2">{mentor.name}</div>
                      <div className="text-sm text-primary font-medium mb-1">{mentor.role}</div>
                      <div className="text-sm text-muted-foreground">{mentor.org}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      {/* Community Partners */}
      <section className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Community Partners</h3>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-10">
            <img
              src="/LOGO.png"
              alt="Community partner logo 1"
              className="h-10 w-auto opacity-90"
            />
            <img
              src="/LOGO.png"
              alt="Community partner logo 2"
              className="h-10 w-auto opacity-90"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {hackathonData.faqs.map((faq, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-balance">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-foreground text-pretty">{faq.a}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-20 bg-primary text-primary-foreground relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Innovate?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
            Join Patent-a-thon 1.0 at Chandigarh University and turn your innovative ideas into protected intellectual
            property. Register now and be part of this groundbreaking innovation event!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" variant="secondary" asChild>
              <a href={hackathonData.links.register} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a href={hackathonData.links.whatsapp} target="_blank" rel="noopener noreferrer">
                Join WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-90">
            <a href={`mailto:${hackathonData.links.email}`} className="flex items-center gap-2 hover:opacity-100">
              <Mail className="w-4 h-4" />
              {hackathonData.links.email}
            </a>
            <a href={`tel:${hackathonData.links.phone}`} className="flex items-center gap-2 hover:opacity-100">
              <Phone className="w-4 h-4" />
              {hackathonData.links.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                {hackathonData.brand.logoText}
              </div>
              <span className="font-semibold text-foreground">{hackathonData.brand.name}</span>
            </div>

            <div className="flex gap-4">
              <a
                href={hackathonData.links.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                Instagram
              </a>
              <a
                href={hackathonData.links.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href={hackathonData.links.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                Twitter
              </a>
            </div>
          </div>

          <div className="text-center mt-6 pt-6 border-t text-sm text-muted-foreground">
            © 2025 Patent-a-thon 1.0 • Chandigarh University. All rights reserved. Built with innovation in mind.
          </div>
        </div>
      </footer>
    </div>
  )
}
