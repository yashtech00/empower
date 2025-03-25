import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface FundingCardProps {
  id: string
  title: string
  description: string
  type: "crowdfunding" | "loan" | "revenue"
  amount: number
  raised?: number
  goal?: number
  interest?: number
  term?: string
  imageUrl: string
}

export default function FundingCard({
  id,
  title,
  description,
  type,
  amount,
  raised,
  goal,
  interest,
  term,
  imageUrl,
}: FundingCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
            {type === "crowdfunding" && "Crowdfunding"}
            {type === "loan" && "P2P Loan"}
            {type === "revenue" && "Revenue-Based"}
          </span>
        </div>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {type === "crowdfunding" && goal && raised !== undefined && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>${raised.toLocaleString()}</span>
              <span>${goal.toLocaleString()}</span>
            </div>
            <Progress value={(raised / goal) * 100} />
            <p className="text-xs text-muted-foreground">{Math.round((raised / goal) * 100)}% funded</p>
          </div>
        )}
        {type === "loan" && interest && (
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-xs text-muted-foreground">Amount</p>
                <p className="font-medium">${amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Interest Rate</p>
                <p className="font-medium">{interest}%</p>
              </div>
              {term && (
                <div>
                  <p className="text-xs text-muted-foreground">Term</p>
                  <p className="font-medium">{term}</p>
                </div>
              )}
            </div>
          </div>
        )}
        {type === "revenue" && (
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-xs text-muted-foreground">Amount</p>
                <p className="font-medium">${amount.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Revenue Share</p>
                <p className="font-medium">{interest}%</p>
              </div>
              {term && (
                <div>
                  <p className="text-xs text-muted-foreground">Cap</p>
                  <p className="font-medium">${(amount * 1.5).toLocaleString()}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/funding/${type}/${id}`} className="w-full">
          <Button className="w-full">{type === "crowdfunding" ? "View Campaign" : "Apply Now"}</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

