"use client"
import { SignInFlow } from "@/app/types/auth-types";
import { useState } from "react"
import { SigninPage } from "./Signinpage";
import { SignupPage } from "./SignupPage";


export function AuthScreen({ authType }:{authType:SignInFlow}) {
    
    const [formType, setFormType] = useState<SignInFlow>(authType || "signin");

    return (
        <div>
            {formType == "signin" ? (
                <SigninPage setFormType={setFormType} />
            ) : (
                    <SignupPage setFormType={setFormType}/>
            )}
        </div>
    )
}