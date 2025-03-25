import { NextResponse } from "next/server"
import  prisma  from "../../db"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/lib/auth"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")
  const userId = searchParams.get("userId")

  try {
    const whereClause: any = {}

    if (type) {
      whereClause.type = type
    }

    if (userId) {
      whereClause.userId = userId
    }

    const funding = await prisma.funding.findMany({
      where: whereClause,
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(funding)
  } catch (error) {
    console.error("Error fetching funding:", error)
    return NextResponse.json({ error: "Failed to fetch funding options" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, description, type, amount, goal, interest, term, imageUrl } = body

    const funding = await prisma.funding.create({
      data: {
        title,
        description,
        type,
        amount,
        goal,
        interest,
        term,
        imageUrl,
        userId: session.user.id,
        raised: type === "crowdfunding" ? 0 : null,
      },
    })

    return NextResponse.json(funding)
  } catch (error) {
    console.error("Error creating funding:", error)
    return NextResponse.json({ error: "Failed to create funding request" }, { status: 500 })
  }
}

