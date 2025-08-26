import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"

const scheduleData = [
  { time: "9:00 AM", item: "Registration & Welcome" },
  { time: "9:30 AM", item: "Opening Ceremony" },
  { time: "10:30 AM", item: "Patent Workshop" },
  { time: "11:30 AM", item: "Team Formation & Networking" },
  { time: "12:00 PM", item: "Innovation Challenge Begins" },
  { time: "1:00 PM", item: "Lunch Break" },
  { time: "2:00 PM", item: "Mentor Check-in Session" },
  { time: "3:30 PM", item: "Technical Workshop" },
  { time: "4:30 PM", item: "Progress Review" },
  { time: "6:00 PM", item: "Final Presentations" },
  { time: "7:00 PM", item: "Judging & Evaluation" },
  { time: "8:00 PM", item: "Awards Ceremony" },
  { time: "8:30 PM", item: "Networking & Closing" },
]

export default function SchedulePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              P1
            </div>
            <span className="font-semibold text-foreground">Patent-a-thon 1.0</span>
          </div>
        </div>
      </header>

      {/* Schedule Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Event Schedule</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Complete timeline for Patent-a-thon 1.0 at Chandigarh University
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-primary">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">17 October 2025 • B1 Seminar Hall</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {scheduleData.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-card/80 backdrop-blur-sm">
                  <CardContent className="flex items-center gap-4 p-6">
                    <Badge variant="outline" className="min-w-24 justify-center font-mono">
                      {item.time}
                    </Badge>
                    <div className="text-foreground font-medium text-lg">{item.item}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
