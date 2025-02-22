import PricingCards from "@/components/PricingCards"

export default function PricingPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/90 to-background" />

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Simple, Transparent Pricing</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your portfolio needs. All plans include our core features to help you succeed.
          </p>
        </div>
        <PricingCards />
      </div>
    </div>
  )
}

