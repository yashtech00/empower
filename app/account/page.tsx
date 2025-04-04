"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Account() {
    const [role, setRole] = useState<"ENTREPRENEUR" | "INVESTOR" | "">("");
    const router = useRouter();
    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!role) {
            alert("Please select a role before signing in.");
            return;
        }

        // Store selected role in localStorage
        localStorage.setItem("selectedRole", role);
        router.push("/Auth-client-options");
    };

    return (
        <div className="flex flex-col items-center h-screen bg-orange-50">
            <div className="mt-20 flex flex-col items-center space-y-10">
                <h1 className="text-3xl font-bold">Create your account</h1>
                <form onSubmit={handleSignIn}>
                    <div className="flex flex-wrap justify-center items-center gap-8 w-full px-4">
                        <div className={`p-6 bg-white rounded-lg shadow-md w-full max-w-sm ${role === "ENTREPRENEUR" ? "border-2 border-blue-500" : ""
                            }`}
                            onClick={() => setRole("ENTREPRENEUR")}>
                            <h2 className="text-lg font-semibold text-center mb-4">
                                I want to run a fundraiser
                            </h2>
                            <p className="text-sm text-center mb-6">
                                Register your team to run a donation campaign, auction, or ticketed event on the BetterWorld platform.
                            </p>
                            <Button
                                className="w-full p-2 rounded">
                                Entrepreneur
                            </Button>
                        </div>
                        <div
                            className={`p-6 bg-white rounded-lg shadow-md w-full max-w-sm ${role === "INVESTOR" ? "border-2 border-blue-500" : ""
                                }`}
                            onClick={() => setRole("INVESTOR")}
                        >
                            <h2 className="text-lg font-semibold text-center mb-4">
                                I want to support Fundraiser
                            </h2>
                            <p className="text-sm text-center mb-6">
                                Create a personal account to donate to donation campaigns, bid on auction items, or purchase event tickets.
                            </p>
                            <Button className="w-full p-2 rounded">Investor</Button>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <Button>Get started by signin/signup</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
