import CourseCard from "@/app/components/course-card"

// This would typically come from your database
const courses = [
  {
    id: "1",
    title: "Financial Fundamentals for Entrepreneurs",
    description: "Learn the basics of business finance, from accounting to financial statements.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    duration: "4 weeks",
    level: "Beginner" as const,
    students: 1250,
    free: true,
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
  },
  {
    id: "3",
    title: "Advanced Investment Strategies",
    description: "Explore advanced investment techniques to grow your business capital.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    duration: "6 weeks",
    level: "Advanced" as const,
    students: 620,
    price: 79.99,
  },
  {
    id: "4",
    title: "Cash Flow Management",
    description: "Learn how to effectively manage your business cash flow for sustainability.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    duration: "2 weeks",
    level: "Beginner" as const,
    students: 980,
    free: true,
  },
  {
    id: "5",
    title: "Tax Strategies for Small Businesses",
    description: "Understand tax obligations and strategies to optimize your business finances.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    duration: "4 weeks",
    level: "Intermediate" as const,
    students: 750,
    price: 59.99,
  },
  {
    id: "6",
    title: "Financial Forecasting and Planning",
    description: "Master the art of financial forecasting to make informed business decisions.",
    imageUrl: "/placeholder.svg?height=400&width=600",
    duration: "5 weeks",
    level: "Advanced" as const,
    students: 540,
    price: 69.99,
  },
]

export default function LearningPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Financial Literacy Courses</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Enhance your financial knowledge with our comprehensive courses
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}

