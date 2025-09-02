"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ParticleCanvas } from "@/components/particle-canvas"
import { TypewriterEffect } from "@/components/typewriter-effect"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                Pratik Shrestha
              </span>
            </h1>

            <div className="h-20 mb-6">
              <TypewriterEffect
                words={["Data Scientist", "Machine Learning Engineer", "Quantitative Analyst", "AI Enthusiast"]}
              />
            </div>

            <p className="text-lg text-gray-300 mb-8">
              Transforming complex data into actionable insights. Specializing in machine learning, data analytics, and
              financial modeling to drive data-informed decisions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0"
                >
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <Image src="/pratik-profile.jpg" alt="Pratik Shrestha" fill className="object-cover" priority />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <svg className="w-6 h-10 text-cyan-400" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2" />
          <circle className="animate-pulse" cx="12" cy="12" r="4" fill="currentColor" />
        </svg>
      </motion.div>
    </section>
  )
}
