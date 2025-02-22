"use client"

import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "COOL",
    price: {
      usd: 5,
      inr: 415, // Approximate conversion
    },
    description: "Perfect for students getting started with their portfolio.",
    features: [
      "Basic portfolio template",
      "Mobile responsive design",
      "Custom domain support",
      "Basic SEO optimization",
      "Contact form integration",
      "3 portfolio sections",
      "Basic analytics",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "NORMAL",
    price: {
      usd: 8,
      inr: 665, // Approximate conversion
    },
    description: "Great for students who want more customization options.",
    features: [
      "Everything in COOL, plus:",
      "Advanced portfolio templates",
      "Custom color schemes",
      "Blog section",
      "Social media integration",
      "5 portfolio sections",
      "Advanced analytics",
      "Priority email support",
      "Resume builder tool",
    ],
    popular: true,
  },
  {
    name: "HOT",
    price: {
      usd: 10,
      inr: 830, // Approximate conversion
    },
    description: "The ultimate portfolio package with all premium features.",
    features: [
      "Everything in NORMAL, plus:",
      "Premium portfolio templates",
      "Custom animations",
      "Multiple portfolio pages",
      "Password protected sections",
      "Unlimited portfolio sections",
      "Real-time analytics",
      "24/7 priority support",
      "Custom feature requests",
      "Personal branding guide",
    ],
    popular: false,
  },
]

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-0 right-0 mx-auto w-32 rounded-full bg-primary px-3 py-1 text-center text-sm text-primary-foreground">
                Most Popular
              </div>
            )}

            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="mt-2">{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">${plan.price.usd}</span>
                <span className="text-muted-foreground">/one-time</span>
                <div className="text-sm text-muted-foreground mt-1">≈ ₹{plan.price.inr}</div>
              </div>

              <ul className="space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-3 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button className="w-full group" variant={plan.popular ? "default" : "outline"}>
                Get Started
                {plan.popular && <Zap className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

