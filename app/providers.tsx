"use client"
import { SessionProvider } from "next-auth/react"
import Navbar from "./components/Landing/Navbar"


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <Navbar/>
            {children}
        </SessionProvider>
    )
}