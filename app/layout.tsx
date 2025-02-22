import type React from "react"
import "./globals.css"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Racer Solutions | Professional Portfolio Websites for Students",
  description: "Professional portfolio websites for students and fresh graduates.",
  metadataBase: new URL("https://www.racer.news"),
  openGraph: {
    title: "Racer Solutions | Professional Portfolio Websites for Students",
    description: "Professional portfolio websites for students and fresh graduates.",
    url: "https://www.racer.news",
    siteName: "Racer.news",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Racer Solutions | Professional Portfolio Websites for Students",
    description: "Professional portfolio websites for students and fresh graduates.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}



import './globals.css'
