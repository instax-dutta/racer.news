"use client"

import { motion } from "framer-motion"
import {
  Users,
  Layout,
  RefreshCw,
  Search,
  MessageSquare,
  FileText,
  Smartphone,
  BarChart,
  GraduationCap,
} from "lucide-react"

const services = [
  {
    icon: <GraduationCap className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />,
    title: "Led by Students, for Students",
    description:
      "Founded by final-year undergrads who understand your needs. We create portfolios that truly capture student aspirations.",
    featured: true,
  },
  {
    icon: <Layout className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />,
    title: "Custom Portfolio Websites",
    description:
      "No one-size-fits-all templates. We craft unique portfolios that authentically tell your story and showcase your talents.",
  },
  {
    icon: <RefreshCw className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />,
    title: "Effortless Updates",
    description:
      "Keep your portfolio current with our user-friendly interface. Update your achievements and milestones with just a few clicks.",
  },
  {
    icon: <Users className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />,
    title: "Dynamic Project Showcase",
    description:
      "Present your work and case studies in a visually stunning manner that strategically highlights your strengths.",
  },
  {
    icon: <Search className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />,
    title: "SEO Optimization",
    description:
      "Gain visibility with advanced SEO techniques. Stand out in search results and catch the attention of potential employers.",
  },
  {
    icon: <MessageSquare className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />,
    title: "Testimonials Integration",
    description:
      "Feature recommendations from professors, mentors, and employers to build credibility with potential recruiters.",
  },
  {
    icon: <FileText className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />,
    title: "Resume Transformation",
    description:
      "Transform your static resume into an engaging, interactive online experience that brings your achievements to life.",
  },
  {
    icon: <Smartphone className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />,
    title: "Responsive Design",
    description:
      "Your portfolio looks perfect on all devices, ensuring a flawless viewing experience for your audience anywhere.",
  },
  {
    icon: <BarChart className="w-8 h-8 sm:w-12 sm:h-12 mb-4" />,
    title: "Analytics & Tracking",
    description:
      "Monitor your portfolio's performance and visitor engagement with integrated analytics tools for data-driven improvements.",
  },
]

export default function Services() {
  return (
    <section id="why-us" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground">
            Empowering Student Success: Join us as we help fellow students make lasting impressions. With Racer
            Solutions, you're investing in a personal brand that sets you apart.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`bg-background p-6 rounded-lg shadow-lg border ${
                service.featured ? "border-primary ring-2 ring-primary/10" : "border-primary/10"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className={`${service.featured ? "text-primary" : "text-foreground"}`}>{service.icon}</div>
              <h3
                className={`text-lg sm:text-xl font-bold mb-2 tracking-tight ${
                  service.featured ? "text-primary" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

