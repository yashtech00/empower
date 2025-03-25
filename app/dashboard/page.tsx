import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, BarChart3, BookOpen, DollarSign, Users } from "lucide-react"
import CourseCard from "../components/course-card"
import FundingCard from "../components/funding-card"

// This would typically come from your database based on the authenticated user
const userCourses = [
  {
    id: "1",
    title: "Financial Fundamentals for Entrepreneurs",
    description: "Learn the basics of business finance, from accounting to financial statements.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    duration: "4 weeks",
    level: "Beginner" as const,
    students: 1250,
    free: true,
    progress: 75,
  },
  {
    id: "2",
    title: "Understanding Business Loans",
    description: "Master the concepts of business loans, interest rates, and repayment strategies.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    duration: "3 weeks",
    level: "Intermediate" as const,
    students: 850,
    price: 49.99,
    progress: 30,
  },
]

const userFunding = [
  {
    id: "3",
    title: "Organic Food Delivery Service",
    description: "Expand our organic food delivery service to new neighborhoods and increase our product range.",
    type: "revenue" as const,
    amount: 75000,
    interest: 12,
    term: "Until 1.5x cap",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">Welcome back! Here's an overview of your entrepreneurial journey.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Funding</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$75,000</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">2 courses in progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234</div>
            <p className="text-xs text-muted-foreground">+15.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+4 new connections this week</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-8">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="courses">Courses</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Active Funding</CardTitle>
                <CardDescription>Your current funding applications and campaigns</CardDescription>
              </CardHeader>
              <CardContent>
                {userFunding.length > 0 ? (
                  <div className="space-y-4">
                    {userFunding.map((funding) => (
                      <div key={funding.id} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{funding.title}</p>
                          <p className="text-sm text-muted-foreground">
                            ${funding.amount.toLocaleString()} - {funding.type}
                          </p>
                        </div>
                        <Link href={`/funding/${funding.type}/${funding.id}`}>
                          <Button variant="ghost" size="icon">
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No active funding found.</p>
                )}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
                <CardDescription>Your enrolled courses and learning progress</CardDescription>
              </CardHeader>
              <CardContent>
                {userCourses.length > 0 ? (
                  <div className="space-y-4">
                    {userCourses.map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{course.title}</p>
                          <p className="text-sm font-medium">{course.progress}%</p>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary" style={{ width: `${course.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No courses enrolled.</p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="funding" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {userFunding.map((funding) => (
              <FundingCard key={funding.id} {...funding} />
            ))}
            <Card className="flex flex-col items-center justify-center p-6">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Find More Funding</h3>
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Explore more financing options to grow your business
              </p>
              <Link href="/funding">
                <Button>Browse Options</Button>
              </Link>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="courses" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {userCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
            <Card className="flex flex-col items-center justify-center p-6">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-medium">Discover Courses</h3>
              <p className="mb-4 text-center text-sm text-muted-foreground">
                Enhance your financial literacy with our courses
              </p>
              <Link href="/learning/courses">
                <Button>Browse Courses</Button>
              </Link>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

