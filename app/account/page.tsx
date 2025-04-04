"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Account() {
    const [role, setRole] = useState<"ENTREPRENEUR" | "INVESTOR" | "">("");
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!role) return;
    
        try {
            const res = await axios.post("/api/role", { role })
            if (res.status === 200) {
                window.location.href = `${role === "ENTREPRENEUR" ? "/Entrepreneurs/Info" : "Investors/question"}`;
            } else {
              alert("Failed to update role");
            }
        } catch (e) {
            console.error(e);
            
        }
    
        
      };
    return (
        <div className="flex flex-col items-center h-screen bg-orange-50">
            <div className="mt-20 flex flex-col items-center space-y-10">
                <h1 className="text-5xl font-bold">Create your account</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap justify-center items-center gap-8 w-full px-4">
                        <div className={`p-6 bg-white rounded-lg shadow-md w-full max-w-lg h-[300px] cursor-pointer ${role === "ENTREPRENEUR" ? "border-2 border-orange-500" : ""
                            }`}
                            onClick={() => setRole("ENTREPRENEUR")}>
                            <h2 className="text-2xl font-semibold text-center mb-4">
                                I want to run a fundraiser
                            </h2>
                            <p className="text-lg text-center mb-6 text-gray-600 mt-10">
                                Register your team to run a donation campaign, auction, or ticketed event on the BetterWorld platform.
                            </p>
                            <Button
                                className="w-full p-2 rounded mt-10">
                                Create a Fundraiser
                            </Button>
                        </div>
                        <div
                            className={`p-6 bg-white rounded-lg shadow-md w-full max-w-lg h-[300px] cursor-pointer ${role === "INVESTOR" ? "border-2 border-orange-500" : ""
                                }`}
                            onClick={() => setRole("INVESTOR")}
                        >
                            <h2 className="text-2xl font-semibold text-center mb-4">
                                I want to support Fundraiser
                            </h2>
                            <p className="text-lg text-center mb-6 text-gray-600 mt-12">
                                Create a personal account to donate to donation campaigns, bid on auction items, or purchase event tickets.
                            </p>
                            <Button className="w-full p-2 rounded">Create a personal Account</Button>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <Button className="text-xl m-2" type="submit">Get started </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
