"use client"
import { SessionProvider } from "next-auth/react"
import Navbar from "./components/Landing/Navbar"
import { usePathname } from "next/navigation"


export default function Providers({ children }: { children: React.ReactNode }) {

    const pathName = usePathname()
    
        const hideNavbar = pathName.startsWith("/Entrepreneurs/Pages")
    return (
        <SessionProvider>
            <div className="bg-black ">
                {children}
                </div>
        </SessionProvider>
    )
}