"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Height of the fixed header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Racer Solutions</span>
              <div className="flex flex-col">
                <div className="text-xl md:text-2xl font-bold text-primary">Racer Solutions</div>
                <div className="text-xs md:text-sm text-muted-foreground">Empowering Freshers</div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:gap-x-12">
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("examples")}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Examples
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="fixed inset-x-0 top-16 bg-background border-b px-4 py-2 shadow-lg">
            <div className="flex flex-col space-y-4 py-4">
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-base font-semibold leading-6 text-foreground hover:text-primary transition-colors text-left"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-base font-semibold leading-6 text-foreground hover:text-primary transition-colors text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("examples")}
                className="text-base font-semibold leading-6 text-foreground hover:text-primary transition-colors text-left"
              >
                Examples
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-base font-semibold leading-6 text-foreground hover:text-primary transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}

