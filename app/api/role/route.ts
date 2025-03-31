import prisma from "@/app/db";
import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest, res:NextResponse) {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 404 });
    }
    try {
        const body = await req.json();
        const { role } = body;
        const newRole = await prisma.role.create({
            data: {
                role: body.role,
                userId:session.user.id
            }
        })
        return NextResponse.json({message:"Role created successfully"},{status:201})
    } catch (e) {
        console.error("Internal server error");

        
    }
}

