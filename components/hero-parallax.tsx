"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="relative h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-white/5 z-0" />

      {/* Animated background elements */}
      <motion.div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5" style={{ y, opacity }} />
      <motion.div
        className="absolute bottom-40 left-20 w-40 h-40 rounded-full bg-primary/10"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "60%"]), opacity }}
      />
      <motion.div
        className="absolute top-40 left-1/3 w-20 h-20 rounded-full bg-primary/15"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]), opacity }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Pratik Shrestha</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Data Scientist & Quantitative Analyst</h2>
          <p className="text-lg text-gray-700 mb-8">
            Transforming complex data into actionable insights. Specializing in machine learning, data analytics, and
            financial modeling to drive data-informed decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/#projects">
              <Button size="lg">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline">
                Get In Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
