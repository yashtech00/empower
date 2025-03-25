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
    const userFunding = await prisma.funding.findMany({
      where: {
        userId: session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json(userFunding)
  } catch (error) {
    console.error("Error fetching user funding:", error)
    return NextResponse.json({ error: "Failed to fetch user funding" }, { status: 500 })
  }
}

