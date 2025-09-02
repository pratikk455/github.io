"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { LineChart, BarChart4, TrendingUp, Shield } from "lucide-react"

export function UpcomingInternship() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >
      <div className="bg-white p-8 rounded-xl border border-beige-200 shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/4 flex justify-center">
            <div className="relative w-48 h-48">
              <Image src="/logos/baron-capital-logo.png" alt="Baron Capital Logo" fill className="object-contain" />
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Incoming Portfolio & Risk Analytics Intern</h3>
                <p className="text-primary font-medium">Baron Capital</p>
                <p className="text-gray-600">New York City, New York</p>
              </div>
              <p className="text-gray-600 mt-2 md:mt-0">Summer 2025</p>
            </div>

            <p className="text-gray-700 mb-6">
              Selected for a competitive internship position at Baron Capital, where I will apply my quantitative
              analysis skills to portfolio management and risk assessment. This opportunity will allow me to gain
              hands-on experience in financial modeling, risk analytics, and investment strategy in a professional asset
              management environment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-md">
                  <LineChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Portfolio Analysis</h4>
                  <p className="text-sm text-gray-600 font-light">
                    Analyzing investment portfolios and performance metrics
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-md">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Risk Management</h4>
                  <p className="text-sm text-gray-600 font-light">Evaluating and mitigating investment risks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-md">
                  <BarChart4 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Financial Modeling</h4>
                  <p className="text-sm text-gray-600 font-light">
                    Building quantitative models for investment analysis
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-md">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Market Research</h4>
                  <p className="text-sm text-gray-600 font-light">
                    Conducting research on market trends and opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
