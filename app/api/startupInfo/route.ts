import { authOptions } from "@/app/lib/auth";
import { getServerSession } from "next-auth";


export async function POST() {
    const session = await getServerSession(authOptions);

    if(!session) {
        return new Response("Unauthorized", { status: 401 });
    }
}