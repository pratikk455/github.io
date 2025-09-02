"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  label: string
  suffix?: string
  duration?: number
}

export function AnimatedCounter({ value, label, suffix = "", duration = 1000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isInView) return

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const progress = timestamp - startTimeRef.current

      const percentage = Math.min(progress / duration, 1)
      const easedProgress = easeOutCubic(percentage)

      setCount(Math.floor(value * easedProgress * 100) / 100)

      if (progress < duration) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)

    return () => {
      startTimeRef.current = null
    }
  }, [isInView, value, duration])

  // Easing function for smoother animation
  const easeOutCubic = (x: number): number => {
    return 1 - Math.pow(1 - x, 3)
  }

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-2"
      >
        <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          {count.toFixed(2)}
          {suffix}
        </div>
      </motion.div>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  )
}
