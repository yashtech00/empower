import FundingCard from "../../components/funding-card"

// This would typically come from your database
const fundingOptions = [
  {
    id: "1",
    title: "Eco-Friendly Packaging Solution",
    description: "Help us revolutionize packaging with our biodegradable solution that reduces plastic waste.",
    type: "crowdfunding" as const,
    amount: 50000,
    raised: 32500,
    goal: 50000,
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Seeking funding to complete our mobile app that helps small businesses manage inventory.",
    type: "loan" as const,
    amount: 25000,
    interest: 8.5,
    term: "24 months",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "3",
    title: "Organic Food Delivery Service",
    description: "Expand our organic food delivery service to new neighborhoods and increase our product range.",
    type: "revenue" as const,
    amount: 75000,
    interest: 12,
    term: "Until 1.5x cap",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "4",
    title: "Handcrafted Furniture Workshop",
    description: "Help us open a workshop to create sustainable, handcrafted furniture using reclaimed materials.",
    type: "crowdfunding" as const,
    amount: 35000,
    raised: 21000,
    goal: 35000,
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "5",
    title: "Educational Technology Platform",
    description: "Developing an interactive platform to make financial education accessible to everyone.",
    type: "loan" as const,
    amount: 40000,
    interest: 7.5,
    term: "36 months",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "6",
    title: "Sustainable Fashion Brand",
    description: "Expanding our eco-friendly fashion line with new products and marketing campaigns.",
    type: "revenue" as const,
    amount: 60000,
    interest: 10,
    term: "Until 1.5x cap",
    imageUrl: "/placeholder.svg?height=400&width=600",
  },
]

export default function FundingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Funding Options</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover alternative financing models tailored for entrepreneurs
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fundingOptions.map((option) => (
          <FundingCard key={option.id} {...option} />
        ))}
      </div>
    </div>
  )
}

