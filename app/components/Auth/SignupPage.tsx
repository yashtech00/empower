import { SignInFlow } from "@/app/types/auth-types";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, useSession } from "next-auth/react";
import { useId, useState } from "react";
import { Toaster } from "sonner";
import { toast } from "sonner";


interface SigninCard {
    setFormType:(state:SignInFlow) =>void
}



function SignupPage({setFormType : setState}:SigninCard) {
   
    const id = useId();
    const session = useSession();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    if (session.status === "loading") {
        return null; 
    }

    const SigninProvider = (provider: "github" | "credentials") => {
        try {
            if (provider === "credentials") {
                signIn(provider, {
                    email,
                    password,
                    redirect: false,
                    callbackUrl: "/Role",
                }).then((res) => {
                    if (res?.error) {
                        setError(res.error);
                        toast.error("Invalid Credentials");
                    } else {
                        toast.success("Successfully Signed Up");
                    }
                    setLoading(false);
                });
            } else if (provider === "github") {
                signIn(provider, {
                    redirect: false,
                    callbackUrl: "/Role",
                }).then((res) => {
                    if (res?.error) {
                        setError(res.error);
                        toast.error("Invalid Github");
                    } else {
                        toast.success("Successfully Signed Up");
                    }
                    setLoading(false);
                });
            }
        } catch (e) {
            console.log(e);
            setError("Internal server error");
            setLoading(true);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        SigninProvider("credentials");
    };

    const handleGithub = () => {
        setError("");
        SigninProvider("github");
        setLoading(true);
    };

    return (
        <div>
            helo
       </div>

    );
}

export { SignupPage };
