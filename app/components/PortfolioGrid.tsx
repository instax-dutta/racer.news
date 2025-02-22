"use client"

import { useState } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
import Image from "next/image"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Elaborative Space Themed Portfolio",
    description: "A cosmic journey through skills and projects with space-themed visuals and animations.",
    imageUrl: "https://i.postimg.cc/Y0s9cvzN/Screenshot-2025-02-22-at-11-45-24-PM.png",
    demoUrl: "https://sdad.pro",
    categories: ["Elaborative", "Theme Based"],
  },
  {
    id: 2,
    title: "A minimalistic Private Corner",
    description: "Clean, minimal design focusing on content with elegant typography and whitespace.",
    imageUrl: "https://i.postimg.cc/66jT4Px7/Screenshot-2025-02-22-at-11-46-34-PM.png",
    demoUrl: "https://s8m1t.xyz",
    categories: ["Minimalistic", "Designer"],
  },
  {
    id: 3,
    title: "A Horror Themed Portfolio",
    description: "Dark and atmospheric portfolio with horror elements and engaging animations.",
    imageUrl: "https://i.postimg.cc/fyLLgcmT/Screenshot-2025-02-22-at-11-47-47-PM.png",
    demoUrl: "https://horror-dev-portfolio.vercel.app",
    categories: ["Theme Based"],
  },
  {
    id: 4,
    title: "A Cool, Design Oriented Portfolio",
    description: "Sophisticated design portfolio with creative interactions and smooth transitions.",
    imageUrl: "https://i.postimg.cc/MG2nKj2d/Screenshot-2025-02-22-at-11-48-26-PM.png",
    demoUrl: "https://sdnayak.pp.ua",
    categories: ["Designer", "Elaborative"],
  },
]

const categories = ["All", "Minimalistic", "Theme Based", "Elaborative", "Designer"]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")
  const [imageError, setImageError] = useState<Record<number, boolean>>({})

  const filteredProjects =
    filter === "All" ? projects : projects.filter((project) => project.categories.includes(filter))

  return (
    <section id="examples" className="py-20 bg-background">
      <LayoutGroup>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Our Work Examples</h2>
            <p className="mt-4 text-lg text-muted-foreground">Choose from our range of professional portfolio styles</p>
          </motion.div>

          <div className="flex justify-center space-x-4 mb-8 overflow-x-auto pb-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  filter === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" layout>
            <AnimatePresence mode="wait" initial={false}>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.4,
                      delay: index * 0.1,
                      ease: [0.4, 0, 0.2, 1],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: {
                      duration: 0.3,
                      ease: [0.4, 0, 1, 1],
                    },
                  }}
                  className="relative bg-background rounded-xl shadow-lg overflow-hidden border border-primary/10 hover-lift"
                >
                  <div className="relative aspect-[16/9]">
                    {imageError[project.id] ? (
                      <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center">
                        <p className="text-muted-foreground text-sm">Portfolio Preview</p>
                      </div>
                    ) : (
                      <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={() => setImageError((prev) => ({ ...prev, [project.id]: true }))}
                        unoptimized
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-background/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center p-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-center max-w-md mx-auto">
                          <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                          >
                            <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                            <p className="text-base text-foreground/90 font-medium leading-relaxed mb-4">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                              {project.categories.map((category) => (
                                <span
                                  key={category}
                                  className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-medium backdrop-blur-md"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                            <Button
                              variant="secondary"
                              size="sm"
                              className="mt-4 bg-background/50 backdrop-blur-md hover:bg-background/80 transition-all duration-300"
                              onClick={() => window.open(project.demoUrl, "_blank")}
                            >
                              View Live Demo
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                  <motion.div className="p-6" layout>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                    <div className="flex justify-between items-center">
                      <a
                        href="#contact"
                        className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        onClick={() => {
                          localStorage.setItem("portfolioTitle", project.title)
                          localStorage.setItem(
                            "portfolioComment",
                            `I'm interested in creating a portfolio similar to "${project.title}"`,
                          )
                        }}
                      >
                        Create Similar Portfolio
                      </a>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-4"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        View Demo
                      </Button>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </LayoutGroup>
    </section>
  )
}

