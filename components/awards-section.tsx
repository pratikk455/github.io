"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Award, Users } from "lucide-react"

export function AwardsSection() {
  const awards = [
    {
      title: "Founder of Data Science and Machine Learning Club",
      organization: "Furman University",
      period: "Nov 2022 - Present",
      description: [
        "Initiated a club for data enthusiasts to experience the breadth of data science through collaborative projects across multiple departments.",
        "Organized and hosted 'Data Mania,' a competitive data science event, facilitating the participation of data science enthusiasts at Furman University.",
      ],
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-primary",
    },
    {
      title: "Alfred S. Reid Leadership Award",
      organization: "Furman University",
      period: "2023",
      description: [
        "Awarded for exceptional leadership qualities by demonstrating notable contributions to campus and community.",
      ],
      icon: <Award className="h-8 w-8 text-white" />,
      color: "bg-secondary",
    },
    {
      title: "Emerging Leader Award: The Pioneer",
      organization: "Furman University",
      period: "2023",
      description: [
        "Recognized for making a profound impact on the Furman community, demonstrating outstanding leadership skills, embracing challenges outside comfort zone, and actively pursuing new opportunities.",
      ],
      icon: <Award className="h-8 w-8 text-white" />,
      color: "bg-primary",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {awards.map((award, index) => (
        <AwardCard key={index} award={award} index={index} />
      ))}
    </div>
  )
}

function AwardCard({ award, index }: { award: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-white p-6 rounded-xl border border-beige-200 shadow-lg h-full">
        <div className="flex justify-center mb-6">
          <div className={`w-16 h-16 rounded-full ${award.color} flex items-center justify-center`}>{award.icon}</div>
        </div>

        <h3 className="text-xl font-bold text-gray-800 text-center mb-2">{award.title}</h3>
        <div className="text-center mb-4">
          <p className="text-primary font-medium">{award.organization}</p>
          <p className="text-gray-600">{award.period}</p>
        </div>

        <ul className="space-y-2 text-gray-700">
          {award.description.map((item: string, i: number) => (
            <li key={i} className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
