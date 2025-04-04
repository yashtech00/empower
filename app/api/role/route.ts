import prisma from "@/db";
import { authOptions } from "@/app/lib/auth";

import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
 // Update path as per your project

export async function POST(req: NextRequest) {
 

    const session = await getServerSession( authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ message: "Unauthorized" },{ status: 401 });
  }

  const { role } = await req.json();
  if (!["ENTREPRENEUR", "INVESTOR"].includes(role)) {
    return NextResponse.json({ message: "Invalid role" },{status:400});
  }

    try {
        await prisma.user.update({
            where: { email: session.user.email },
            data: { role },
        });

        return NextResponse.json({ message: "Role updated successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
       return  NextResponse.json({ message: "Server error" }, {status:500});
  }
}
