"use client"

import { AuthScreen } from "../components/Auth/AuthScreen";
import { useSession } from "next-auth/react";
import {  useSearchParams } from "next/navigation";
import { SignInFlow } from "../types/auth-types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Auth() {

    
    const searchParams = useSearchParams();

    const formType = searchParams.get("authType") as SignInFlow;
    const session = useSession();
    const router = useRouter();
     
    useEffect(() => {
        if (session.status === "authenticated") {
            router.push("/");
        }
    },[session.status, router])
    

    return <AuthScreen authType={ formType} />
}
