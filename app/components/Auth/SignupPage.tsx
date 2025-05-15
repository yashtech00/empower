"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { SignInFlow } from "@/app/types/auth-types";

interface SignUpFlowProps {
    setFormType: (state: SignInFlow) => void
}

export function SignUpCard({ setFormType: setState }: SignUpFlowProps) {


    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [pending, setPending] = useState(false);
    const router = useRouter();

     const SignUpWithProvider = async (provider: "CREDENTIALS") => {
        setPending(true);
        try {
            if (provider === "CREDENTIALS") {
                let callbackUrl = "/";
                if (role === "ENTREPRENEUR") {
                    callbackUrl = "/Entrepreneurs/Info";
                } else if (role === "INVESTOR") {
                    callbackUrl = "/Investors/question";
                }
                const res = await signIn(provider, {
                    name,
                    email,
                    password,
                    role,
                    redirect: false,
                    callbackUrl,
                });

                if (res?.error) {
                    setError(res.error);
                    setPending(false);
                    return;
                }

                // Fetch the session to get user role
                const sessionRes = await fetch("/api/auth/session");
                const session = await sessionRes.json();

                const userRole = session?.user?.role;

                if (userRole === "ENTREPRENEUR") {
                    router.push("/Entrepreneurs/Info");
                } else if (userRole === "INVESTOR") {
                    router.push("/Investors/question");
                } else {
                    router.push("/");
                }

                setPending(false);
            }
        } catch (e) {
            console.error("SignIn error:", e);
            setPending(false);
        }
    };

    const handleCredentials = async (provider: "CREDENTIALS") => {
        setError("");
        SignUpWithProvider(provider);
    }
   
    return (
         <div className="flex justify-center items-center min-h-screen text-white w-[70%]">
            <div className="flex  gap-14 justify-between w-full ">
            <div className=" flex justify-center  p-4 bg-neutral-900 rounded-2xl w-md  ">
                <div className="flex  justify-center md:flex-row bg-white-300  overflow-hidden w-full ">
                    <div className=" w-full mt-12">
                        <div className="text-center">
                        <h1 className="text-2xl font-bold ">Empower</h1>
                        <label className="text-stone-600">Hi there!</label>
                            <h1 className=" text-xl font-semibold my-6">Sign Up</h1>
                            </div>
                        
                        
                        <form className="space-y-4" >
                            
                           <div>
                                <label className="block text-sm font-medium text-neutral-300 ">Fullname</label>
                                <input
                                    type="email"
                                    disabled={pending}
                                    value={name}
                                    required
                                    placeholder="Enter your email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-black"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-300 ">Email</label>
                                <input
                                    type="email"
                                    disabled={pending}
                                    value={email}
                                    required
                                    placeholder="Enter your email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-black"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-300">Password</label>
                                <input
                                    type="Password"
                                    required
                                    disabled={pending}
                                    value={password}
                                    placeholder="Enter your Password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-black"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </div>
                                <div>
                                <label htmlFor="role-select" className="block text-sm font-medium text-neutral-300">Role</label>
                                <select
                                    id="role-select"
                                    required
                                    disabled={pending}
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 bg-black text-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                >
                                    <option value="" disabled>Select role</option>
                                    <option value="ENTREPRENEUR">Entrepreneur</option>
                                    <option value="INVESTOR">Investor</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                                onClick={() => handleCredentials("CREDENTIALS")}
                                disabled={pending}
                            >
                                Sign Up
                            </button>
                            <p className="flex justify-center">Already have an account?

                                <span className="mx-2 text-orange-600 underline" onClick={() => setState("signin")}>Log in</span>

                            </p>
                        </form>
                    </div>

                </div>
                
                </div>
                <div>
                    {/* <Image src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg" height={700} width={700} alt="Mobile Application Development" /> */}
                </div>
                </div>
        </div>
    );
}