"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 font-bold">
          <span>Entrepreneur Platform</span>
        </Link>
        <nav className="hidden md:flex md:gap-6">
          <Link href="/funding" className="text-sm font-medium hover:underline underline-offset-4">
            Funding
          </Link>
          <Link href="/learning/courses" className="text-sm font-medium hover:underline underline-offset-4">
            Courses
          </Link>
          <Link href="/learning/resources" className="text-sm font-medium hover:underline underline-offset-4">
            Resources
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <div className="hidden md:flex md:gap-2">
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                Log In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-3 pb-4">
            <Link
              href="/funding"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Funding
            </Link>
            <Link
              href="/learning/courses"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/learning/resources"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="flex gap-2 pt-2">
              <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm">
                  Log In
                </Button>
              </Link>
              <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

