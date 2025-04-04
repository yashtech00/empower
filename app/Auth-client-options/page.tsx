import Link from "next/link";


export default function AuthClient() {
    return (
        <div>
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
        </div>
    )
}