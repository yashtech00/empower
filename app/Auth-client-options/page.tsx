import Link from "next/link";


export default function AuthClient() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="hidden md:flex items-center space-x-4">
            <Link 
              href={{
                pathname: "/Auth",
                query: {
                  authType:"signin"
                }
              }}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
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
              className=" bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
                </div>
                </div>
        </div>
    )
}