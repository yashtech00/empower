"use client"

import Navbar from "./Navbar"
import FinancingSection from "./FinancingSection"
import LiteracySection from "./LiteracySection"
import Image from "next/image"
import { HeroDemo } from "./Hero"

export function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <div>
                <Image src={"https://static.vecteezy.com/system/resources/previews/046/046/415/non_2x/bright-banner-with-place-for-text-for-international-women-s-day-women-of-different-cultures-and-nationalities-concept-of-the-movement-for-gender-equality-and-women-s-empowerment-free-vector.jpg"} alt='background image'
                    quality={100}
                    fill

                    style={{
                        objectFit: 'cover',
                    }} />
            </div>
            <Navbar />
            <div className="z-50">
                <Navbar/>
                <HeroDemo />
                <FinancingSection />
                <LiteracySection />
                
            </div>
        </div>
    )
}