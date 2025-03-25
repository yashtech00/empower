import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-bold">
            Entrepreneur Platform
          </Link>
          <p className="text-sm text-muted-foreground">
            Empowering entrepreneurs with alternative financing and financial literacy.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <div className="space-y-2">
            <h4 className="font-medium">Funding</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/funding/crowdfunding" className="text-muted-foreground hover:underline">
                  Crowdfunding
                </Link>
              </li>
              <li>
                <Link href="/funding/loan-request" className="text-muted-foreground hover:underline">
                  Peer-to-Peer Loans
                </Link>
              </li>
              <li>
                <Link href="/funding/revenue-based" className="text-muted-foreground hover:underline">
                  Revenue-Based Financing
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Learning</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learning/courses" className="text-muted-foreground hover:underline">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/learning/resources" className="text-muted-foreground hover:underline">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Entrepreneur Empowerment Platform. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

