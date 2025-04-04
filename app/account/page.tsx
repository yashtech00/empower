"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Account() {
    const [role, setRole] = useState<"ENTREPRENEUR" | "INVESTOR" | "">("");

    const handleSignIn = async () => {
        if (!role) {
            alert("Please select a role before signing in.");
            return;
        }

        // Store selected role in localStorage
        localStorage.setItem("selectedRole", role);

        // Sign in with GitHub
        signIn("github");
    };

    return (
        <div className="flex flex-col items-center h-screen bg-orange-50">
            <div className="mt-20 flex flex-col items-center space-y-10">
                <h1 className="text-3xl font-bold">Create your account</h1>
                <div className="flex flex-wrap justify-center items-center gap-8 w-full px-4">
                    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-sm">
                        <h2 className="text-lg font-semibold text-center mb-4">
                            I want to run a fundraiser
                        </h2>
                        <p className="text-sm text-center mb-6">
                            Register your team to run a donation campaign, auction, or ticketed event on the BetterWorld platform.
                        </p>
                        <Button
                            className="w-full p-2 rounded"
                            onClick={() => setRole("ENTREPRENEUR")}
                        >
                            Entrepreneur
                        </Button>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-sm">
                        <h2 className="text-lg font-semibold text-center mb-4">
                            I want to support Fundraiser
                        </h2>
                        <p className="text-sm text-center mb-6">
                            Create a personal account to donate to donation campaigns, bid on auction items, or purchase event tickets.
                        </p>
                        <Button
                            className="w-full p-2 rounded"
                            onClick={() => setRole("INVESTOR")}
                        >
                            Investor
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
