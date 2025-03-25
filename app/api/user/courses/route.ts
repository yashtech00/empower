import { NextResponse } from "next/server"
import  prisma  from "../../../db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/lib/auth"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const userCourses = await prisma.userCourse.findMany({
      where: {
        userId: session.user.id,
      },
      include: {
        course: true,
      },
      orderBy: {
        enrolledAt: "desc",
      },
    })

    return NextResponse.json(userCourses)
  } catch (error) {
    console.error("Error fetching user courses:", error)
    return NextResponse.json({ error: "Failed to fetch user courses" }, { status: 500 })
  }
}

export async function PATCH(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { courseId, progress, completed } = body

    const updatedCourse = await prisma.userCourse.update({
      where: {
        userId_courseId: {
          userId: session.user.id,
          courseId,
        },
      },
      data: {
        progress,
        completed,
      },
    })

    return NextResponse.json(updatedCourse)
  } catch (error) {
    console.error("Error updating course progress:", error)
    return NextResponse.json({ error: "Failed to update course progress" }, { status: 500 })
  }
}

