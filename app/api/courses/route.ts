import { NextResponse } from "next/server"
import  prisma  from "../../../db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/lib/auth"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const level = searchParams.get("level")
  const isFree = searchParams.get("isFree")

  try {
    const whereClause: any = {}

    if (level) {
      whereClause.level = level
    }

    if (isFree) {
      whereClause.isFree = isFree === "true"
    }

    const courses = await prisma.course.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(courses)
  } catch (error) {
    console.error("Error fetching courses:", error)
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { courseId } = body

    // Check if user is already enrolled
    const existingEnrollment = await prisma.userCourse.findUnique({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId,
        },
      },
    })

    if (existingEnrollment) {
      return NextResponse.json({ error: "Already enrolled in this course" }, { status: 400 })
    }

    // Enroll user in course
    const enrollment = await prisma.userCourse.create({
      data: {
        userId: session.user.id,
        courseId,
      },
    })

    return NextResponse.json(enrollment)
  } catch (error) {
    console.error("Error enrolling in course:", error)
    return NextResponse.json({ error: "Failed to enroll in course" }, { status: 500 })
  }
}

