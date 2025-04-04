import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import Link from 'next/link';
import path from 'path';
import { Button } from '@/components/ui/button';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const session = useSession();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-80 transition-all duration-300 ease-in-out py-3 backdrop-blur-lg shadow-md bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-display font-bold tracking-tight">
              Empower<span className="text-primary">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/Investors" 
              className=" hover:text-primary hover:bg-orange-400 px-4 py-2 rounded-md transition duration-200"
            >
              Invest
            </Link>
            <Link 
              href="/funding" 
              className=" hover:text-primary hover:bg-orange-400 px-4 py-2 rounded-md transition duration-200"
            >
              Raise Capital
            </Link>
            <Link 
              href="/learning/courses" 
              className=" hover:text-primary hover:bg-orange-400 px-4 py-2 rounded-md transition duration-200"
            >
              Education
            </Link>
            
          </nav>
          {!session.data?.user ? (
          <div className="hidden md:flex items-center space-x-4">
          <Link 
            href={{
              pathname: "/Auth",
              query: {
                authType:"signin"
              }
            }}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Sign in
          </Link>
          <Link 
            href={{
              pathname: "/Auth",
              query: {
                authType:"signup"
              }
            }}
            className="button-primary bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>
          ): (
              <div>
                <Button onClick={async()=>await signOut()}>Logout</Button>
            </div>
        )}
          

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden rounded-md p-2 text-foreground focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out overflow-hidden border-b border-border shadow-sm",
          mobileMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        )}
      >
        <nav className="flex flex-col space-y-3 px-4 sm:px-6">
          <Link 
            href="/" 
            className="nav-link py-2 hover:bg-primary/20 hover:text-primary transition duration-200"
          >
            Home
          </Link>
          <Link 
            href="/funding" 
            className="nav-link py-2  hover:bg-primary/20 hover:text-primary transition duration-200"
          >
            Financing
          </Link>
          <Link 
            href="/learning/courses" 
            className="nav-link py-2  hover:bg-primary/20 hover:text-primary transition duration-200"
          >
            Literacy
          </Link>
          <Link 
            href="#about" 
            className="nav-link py-2 hover:bg-primary/20 hover:text-primary transition duration-200"
          >
            About
          </Link>
          
          <div className="pt-4 flex flex-col space-y-3">
            <Link 
              href="#" 
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Sign in
            </Link>
            <Link 
              href="#" 
              className="button-primary bg-primary px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
