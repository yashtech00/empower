import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"

interface CourseCardProps {
  id: string
  title: string
  description: string
  imageUrl: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  students: number
  free?: boolean
  price?: number
  progress?: number
}

export default function CourseCard({
  id,
  title,
  description,
  imageUrl,
  duration,
  level,
  students,
  free = false,
  price,
  progress,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <Badge variant={level === "Beginner" ? "default" : level === "Intermediate" ? "secondary" : "destructive"}>
            {level}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{students.toLocaleString()} students</span>
          </div>
        </div>
        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="mt-1 h-2 w-full rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          {free ? (
            <span className="font-medium text-primary">Free</span>
          ) : (
            <span className="font-medium">${price?.toFixed(2)}</span>
          )}
        </div>
        <Link href={`/learning/courses/${id}`}>
          <Button variant={progress !== undefined ? "outline" : "default"}>
            {progress !== undefined ? "Continue" : "Enroll Now"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

