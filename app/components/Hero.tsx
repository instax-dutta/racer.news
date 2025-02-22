"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase, Users, Award } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative min-h-[100dvh] flex items-center isolate bg-background border-b">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/90 to-background"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
              {[
                { icon: Briefcase, text: "100+ Portfolios Created" },
                { icon: Users, text: "98% Client Satisfaction" },
                { icon: Award, text: "Award-winning Designs" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  <span className="whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6">
                Launch Your Career with a <span className="text-gradient">Professional Portfolio</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8">
                We transform your resume into a stunning portfolio website that helps you stand out in the job market.
                Perfect for students and fresh graduates.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#pricing"
                className="apple-button w-full sm:w-auto group"
                aria-label="Get started with your portfolio"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#examples"
                className="text-sm font-medium leading-6 text-muted-foreground hover:text-foreground transition-colors w-full sm:w-auto text-center group"
                aria-label="View portfolio examples"
              >
                View Examples{" "}
                <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto lg:mx-0 max-w-2xl lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-background/10 via-background/5 to-background/0 z-10 pointer-events-none"></div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leonardo_Phoenix_10_3D_image_of_a_sleek_modern_portfolio_websi_1.jpg-S7nmINhOlLYaR6JZ5ITm9Cc7WywiNr.jpeg"
                alt="3D visualization of a portfolio website with a vibrant sports car"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square">
              <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-tr from-primary via-background to-secondary"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

