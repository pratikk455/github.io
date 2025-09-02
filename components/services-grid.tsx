"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, School, User, BarChart4, LineChart } from "lucide-react"
import Link from "next/link"

export function ServicesGrid() {
  const services = [
    {
      title: "Data Analytics",
      description:
        "Comprehensive data analysis services including data cleaning, visualization, and insights generation to help businesses make data-driven decisions.",
      icon: <Database className="h-12 w-12 text-cyan-400" />,
      color: "from-cyan-500/20 to-cyan-500/5",
      borderColor: "border-cyan-500/30",
    },
    {
      title: "Data Science & Machine Learning",
      description:
        "Development of machine learning models and algorithms to solve complex business problems and extract valuable insights from your data.",
      icon: <Code className="h-12 w-12 text-purple-400" />,
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-500/30",
    },
    {
      title: "US College Application Assistance",
      description:
        "Personalized guidance for international students applying to US colleges, including application strategy, essay review, and interview preparation.",
      icon: <School className="h-12 w-12 text-cyan-400" />,
      color: "from-cyan-500/20 to-cyan-500/5",
      borderColor: "border-cyan-500/30",
    },
    {
      title: "US Internship Assistance",
      description:
        "Comprehensive support for securing internships in the US, including resume building, interview preparation, and networking strategies.",
      icon: <User className="h-12 w-12 text-purple-400" />,
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-500/30",
    },
    {
      title: "Financial Data Analysis",
      description:
        "Specialized analysis of financial data to identify trends, forecast outcomes, and provide actionable insights for investment decisions.",
      icon: <LineChart className="h-12 w-12 text-cyan-400" />,
      color: "from-cyan-500/20 to-cyan-500/5",
      borderColor: "border-cyan-500/30",
    },
    {
      title: "Portfolio Risk Analytics",
      description:
        "Advanced risk assessment and optimization for investment portfolios using statistical models and machine learning techniques.",
      icon: <BarChart4 className="h-12 w-12 text-purple-400" />,
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-500/30",
      actionButton: (
        <Link href="/book">
          <Button className="mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 border-0">
            Book Now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      ),
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  )
}

function ServiceCard({ service, index }: { service: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div
        className={`bg-gradient-to-b ${service.color} backdrop-blur-sm p-6 rounded-xl ${service.borderColor} border shadow-xl h-full flex flex-col`}
      >
        <div className="flex justify-center mb-6">{service.icon}</div>

        <h3 className="text-xl font-bold text-white text-center mb-4">{service.title}</h3>
        <p className="text-gray-300 text-center mb-6 flex-grow">{service.description}</p>

        {service.actionButton && <div className="flex justify-center">{service.actionButton}</div>}
      </div>
    </motion.div>
  )
}
