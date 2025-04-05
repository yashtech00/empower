import { authOptions } from "@/app/lib/auth";
import { InvestorSchema, StartupSchema } from "@/app/lib/schema";
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    

    const session = await getServerSession(authOptions);
    if(!session) {
        return new Response("Unauthorized", { status: 401 });
    }

    const StartupValidation = StartupSchema.parse(await req.json());
    const { company_name, contact_name, phone_number, email, company_url, company_do, financial_stage, financial_request, previous_funding, industry } = StartupValidation;

    if (!StartupValidation) {
        return new Response("Invalid data", { status: 400 });
    }


    try {
        const investor_info = await prisma.startupInfo.create({
            data: {
                company_name,
                contact_name,
                phone_number,
                email,
                company_url,
                company_do,
                financial_stage:"EARLY",
                financial_request,
                previous_funding,
                industry,
                user: { connect: { email: session.user.email } },
            },
        });
        return NextResponse.json({ message: "Investor information created successfully", investor_info }, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json("Internal Server error", { status: 500 });
        
    }
       
}