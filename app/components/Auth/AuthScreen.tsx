"use client"
import { SignInFlow } from "@/app/types/auth-types";
import { useState } from "react"
import { SignInCard } from "./Signinpage";
import { SignUpCard } from "./SignupPage";


export function AuthScreen({ authType }:{authType:SignInFlow}) {
    
    const [formType, setFormType] = useState<SignInFlow>(authType || "signin");

    return (
        <div className="flex justify-center">
            {formType == "signin" ? (
                <SignInCard setFormType={setFormType} />
            ) : (
                    <SignUpCard setFormType={setFormType}/>
            )}
        </div>
    )
}