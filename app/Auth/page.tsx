"use client"

import { AuthScreen } from "../components/Auth/AuthScreen";
import { useSession } from "next-auth/react";
import {  useSearchParams } from "next/navigation";
import { SignInFlow } from "../types/auth-types";
import { useRouter } from "next/navigation";


export default function Auth() {

    
    const searchParams = useSearchParams();

    const formType = searchParams.get("authType") as SignInFlow;
    const session = useSession();
    const router = useRouter();
     
    if (session.status === "authenticated") {
        router.push("/");
    }

    return <AuthScreen authType={ formType} />
}
