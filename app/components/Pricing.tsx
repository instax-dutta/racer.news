"use client"

import { motion } from "framer-motion"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "COOL",
    value: "cool", // Added for form selection
    price: {
      usd: 5,
      inr: 415,
    },
    description: "Perfect for students getting started with their portfolio.",
    features: [
      "Basic portfolio template",
      "Mobile-responsive design",
      "Free subdomain (yourname.racer.news)",
      "Basic SEO optimization",
      "Contact form integration",
      "3 portfolio sections",
      "Basic analytics",
      "Email support",
      "Free Hosting: Until you land your first job",
    ],
    popular: false,
  },
  {
    name: "NORMAL",
    value: "normal", // Added for form selection
    price: {
      usd: 8,
      inr: 665,
    },
    description: "Great for students who want more customization options.",
    features: [
      "Everything in COOL, plus:",
      "Custom domain support",
      "Advanced portfolio templates",
      "Custom color schemes",
      "Blog section",
      "Social media integration",
      "5 portfolio sections",
      "Advanced analytics",
      "Priority email support",
      "Resume builder tool",
      "Free Hosting: For one year",
    ],
    popular: true,
  },
  {
    name: "HOT",
    value: "hot", // Added for form selection
    price: {
      usd: 10,
      inr: 830,
    },
    description: "The ultimate portfolio package with premium features.",
    features: [
      "Everything in NORMAL, plus:",
      "Custom domain support",
      "Premium portfolio templates",
      "Custom animations",
      "Multiple portfolio pages",
      "Password-protected sections",
      "Unlimited portfolio sections",
      "Real-time analytics",
      "24/7 priority support",
      "Custom feature requests",
      "Personal branding guide",
      "Free Hosting: Lifetime",
    ],
    popular: false,
  },
]

export default function Pricing() {
  const scrollToContact = (planValue: string) => {
    // Store the selected plan
    localStorage.setItem("selectedPlan", planValue)

    // Scroll to contact section
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold sm:text-5xl tracking-tight mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your portfolio needs. All plans include our core features to help you succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`relative flex flex-col h-full ${plan.popular ? "border-primary shadow-lg" : ""}`}>
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
                    {plan.features.map((feature, i) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-3 mt-1 shrink-0" />
                        <span
                          className={`text-muted-foreground ${
                            feature.includes("Free Hosting:") ? "font-medium text-primary" : ""
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full group"
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => scrollToContact(plan.value)}
                  >
                    Get Started
                    {plan.popular && <Zap className="w-4 h-4 ml-2 transition-transform group-hover:scale-110" />}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

