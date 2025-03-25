import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, BookOpen, DollarSign } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entrepreneur Empowerment Platform</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Access alternative financing models and improve your financial literacy to grow your business.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/funding">
                <Button>
                  Explore Funding Options
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/learning/courses">
                <Button variant="outline">
                  Browse Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Alternative Financing</h3>
                <p className="text-muted-foreground">
                  Access crowdfunding, peer-to-peer loans, and revenue-based financing options.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Financial Literacy</h3>
                <p className="text-muted-foreground">
                  Learn essential financial skills through courses, resources, and tools.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-primary/10 p-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Business Growth</h3>
                <p className="text-muted-foreground">
                  Track your progress, manage funding, and grow your business with our tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

