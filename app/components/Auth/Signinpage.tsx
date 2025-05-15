"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { SignInFlow } from "@/app/types/auth-types";


interface SignInFlowProps {
    setFormType: (state: SignInFlow) => void
}

export function SignInCard({ setFormType: setState }: SignInFlowProps) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [error, setError] = useState("");
    const [pending, setPending] = useState(false);
    const router = useRouter();


    const SignInWithProvider = async (provider: "CREDENTIALS") => {
        setPending(true);
        try {
            if (provider === "CREDENTIALS") {
                const res = await signIn(provider, {
                    email,
                    password,
                    role,
                    redirect: false,
                    callbackUrl: "/account", // fallback if role-based redirect fails
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
                    router.push("/Entrepreneurs/dashboard");
                } else if (userRole === "INVESTOR") {
                    router.push("/Investors/dashboard");
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


    const handleCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        SignInWithProvider("CREDENTIALS");
    }


    return (
        <div className="flex justify-center items-center min-h-screen text-white">
            <div className=" flex justify-center  p-4 bg-neutral-900 rounded-2xl w-md  ">
                <div className="flex  justify-center md:flex-row bg-white-300  overflow-hidden w-full ">
                    <div className=" w-full mt-12">
                        <div className="text-center">
                        <h1 className="text-2xl font-bold ">Empower</h1>
                        <label className="text-stone-600">Hi there!</label>
                            <h1 className=" text-xl font-semibold my-6">Sign In</h1>
                            </div>
                        
                        <form className="space-y-4 " onClick={() => handleCredentials} >
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    required
                                    disabled={pending}
                                    value={email}
                                    placeholder="Enter your email"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Password</label>
                                <input
                                    type="Password"
                                    required
                                    disabled={pending}
                                    value={password}
                                    placeholder="Enter your Password"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>
                            <div>
                                <label htmlFor="role-select" className="block text-sm font-medium text-gray-700">Role</label>
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
                                className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 cursor-pointer"

                                disabled={pending}
                            >
                                Sign In
                            </button>
                            <p className="flex justify-center">Don't have an account

                                <span className="mx-2 text-orange-600 underline cursor-pointer" onClick={() => setState("signup")}>Sign Up</span>

                            </p>
                        </form>
                    </div>

                </div>
                
            </div>
            <div>
                    <Image src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg" height={700} width={700} alt="Mobile Application Development" />
                </div>
        </div>
    );
}