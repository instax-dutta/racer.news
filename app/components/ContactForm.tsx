"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, AlertCircle, Link2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const plans = [
  {
    value: "cool",
    label: "COOL Plan",
    price: { usd: 5, inr: 415 },
  },
  {
    value: "normal",
    label: "NORMAL Plan",
    price: { usd: 8, inr: 665 },
  },
  {
    value: "hot",
    label: "HOT Plan",
    price: { usd: 10, inr: 830 },
  },
] as const

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  plan: z.enum(["cool", "normal", "hot"], {
    required_error: "Please select a plan.",
  }),
  resumeLink: z.string().url({ message: "Please enter a valid URL for your resume." }),
  graduationYear: z.string().optional(),
  message: z.string().optional(),
})

export default function ContactForm() {
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      plan: undefined,
      resumeLink: "",
      graduationYear: "",
      message: "",
    },
  })

  // Set the selected plan from localStorage when component mounts
  useEffect(() => {
    const selectedPlan = localStorage.getItem("selectedPlan")
    if (selectedPlan) {
      form.setValue("plan", selectedPlan as "cool" | "normal" | "hot")
      // Clear the localStorage after setting the value
      localStorage.removeItem("selectedPlan")
    }
  }, [form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true)
      setResult("Sending....")

      const formData = new FormData()
      formData.append("access_key", "19f3f5f2-bed7-452c-ae94-55018f2c7418")

      // Append all form fields
      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          if (key === "plan") {
            const selectedPlan = plans.find((p) => p.value === value)
            formData.append("plan", `${selectedPlan?.label} ($${selectedPlan?.price.usd})`)
          } else {
            formData.append(key, value)
          }
        }
      })

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult("success")
        form.reset()
      } else {
        console.log("Error", data)
        setResult(data.message)
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setResult("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedPlan = form.watch("plan")
  const currentPlan = plans.find((p) => p.value === selectedPlan)

  if (result === "success") {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-background p-8 rounded-xl shadow-lg text-center"
          >
            <Alert variant="default" className="border-primary/50 bg-primary/5">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <AlertTitle className="text-2xl font-bold mb-4">Thanks for Your Order!</AlertTitle>
              <AlertDescription className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  We're excited to start creating your professional portfolio. Our team will review your details and get
                  back to you within 24 hours to begin the development process.
                </p>
                <div className="text-sm text-muted-foreground mt-4 space-y-2">
                  <p>Order Reference: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  <p>A confirmation email has been sent to your inbox.</p>
                </div>
              </AlertDescription>
            </Alert>
            <div className="mt-8 space-y-4">
              <p className="text-muted-foreground">
                Have questions? Feel free to reach out to us at{" "}
                <a href="mailto:support@racersolutions.com" className="text-primary hover:underline">
                  support@racersolutions.com
                </a>
              </p>
              <Button variant="outline" onClick={() => setResult("")}>
                Place Another Order
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Start Your Journey</h2>
          <p className="text-lg text-muted-foreground">
            Ready to create your professional portfolio? Fill out the form below to get started.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-background p-8 rounded-xl shadow-lg"
        >
          {result && result !== "Sending...." && result !== "success" && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{result}</AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Select Your Plan <span className="text-destructive">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a plan" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {plans.map((plan) => (
                          <SelectItem key={plan.value} value={plan.value}>
                            <span className="font-medium">{plan.label}</span>
                            <span className="ml-2 text-muted-foreground">
                              (${plan.price.usd} / ₹{plan.price.inr})
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {currentPlan && (
                      <FormDescription>
                        Selected plan price: ${currentPlan.price.usd} (₹{currentPlan.price.inr})
                      </FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Full Name <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Phone Number <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="resumeLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Resume Link <span className="text-destructive">*</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="https://drive.google.com/..." {...field} />
                        <Link2 className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormDescription className="text-sm text-muted-foreground">
                      Please upload your resume to Google Drive or a similar service and share the link here
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="graduationYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Graduation Year (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="2024" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Comments (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your career goals and any specific requirements..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Get Started"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}

