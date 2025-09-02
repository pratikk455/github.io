"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { LineChart, BarChart4, TrendingUp, Shield } from "lucide-react"

export function TimelineExperience() {
  const experiences = [
    {
      title: "Quantitative Trader Intern",
      company: "Little Engine",
      location: "Florida, United States",
      period: "June 2024 - Aug 2024",
      description: [
        "Optimized arbitrage trading strategies using funding rates of cryptocurrencies across multiple exchanges to execute long and short positions.",
        "Designed dynamic visualization systems with Plotly by integrating real-time data updates from APIs and ensuring data quality of financial markets to support informed decision-making in live trading environments.",
        "Achieved a 29.41% increase in average gain/loss per trade by applying risk management techniques such as volatility-adjusted position sizing and strategic leverage management, ensuring a strong Sharpe ratio with zero drawdowns.",
      ],
      logo: null, // No logo available yet
      skills: [
        {
          name: "Algorithmic Trading",
          icon: <LineChart className="h-5 w-5 text-primary" />,
        },
        {
          name: "Risk Management",
          icon: <Shield className="h-5 w-5 text-primary" />,
        },
        {
          name: "Data Visualization",
          icon: <BarChart4 className="h-5 w-5 text-primary" />,
        },
        {
          name: "Market Analysis",
          icon: <TrendingUp className="h-5 w-5 text-primary" />,
        },
      ],
    },
    {
      title: "Quantitative Analyst Intern",
      company: "Young Company Finance",
      location: "Edinburgh, Scotland",
      period: "Sept 2023 - Dec 2023",
      description: [
        "Sorted and cleaned a legacy 25-year-old database using Pandas and established a systematic data management pipeline in the company.",
        "Created reports showcasing seasonality in trends, quarterly growth, and geographic distributions in investments using Seaborn and Tableau.",
        "Performed statistical analysis and machine learning to predict future investment trends and potential growth sectors, helping local angel investors make data-driven investment decisions and boosting their portfolios by 8%.",
      ],
      logo: "/young-company-finance-logo.jpeg",
      skills: [
        {
          name: "Data Analysis",
          icon: <BarChart4 className="h-5 w-5 text-primary" />,
        },
        {
          name: "Financial Modeling",
          icon: <LineChart className="h-5 w-5 text-primary" />,
        },
        {
          name: "Machine Learning",
          icon: <TrendingUp className="h-5 w-5 text-primary" />,
        },
        {
          name: "Data Visualization",
          icon: <BarChart4 className="h-5 w-5 text-primary" />,
        },
      ],
    },
    {
      title: "Data Analyst Intern",
      company: "BIM Marketing",
      location: "Bali, Indonesia",
      period: "July 2023 - Aug 2023",
      description: [
        "Managed Google Search Console and Google Analytics to reduce multi-site clicks and streamlined the L1-L3 flow of the website for 5 clients.",
        "Employed Excel and Python for data modeling and delivered weekly reports that drove a 50% surge in website traffic in 2 months.",
        "Developed a predictive model to forecast revenue based on historical traffic data which boosted online sales and achieved a 20% increase in revenue.",
      ],
      logo: "/bim-marketing-logo.jpeg",
      skills: [
        {
          name: "Web Analytics",
          icon: <BarChart4 className="h-5 w-5 text-primary" />,
        },
        {
          name: "Data Modeling",
          icon: <LineChart className="h-5 w-5 text-primary" />,
        },
        {
          name: "Predictive Analysis",
          icon: <TrendingUp className="h-5 w-5 text-primary" />,
        },
        {
          name: "Marketing Analytics",
          icon: <BarChart4 className="h-5 w-5 text-primary" />,
        },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} index={index} />
      ))}
    </div>
  )
}

function ExperienceCard({ experience, index }: { experience: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white p-8 rounded-xl border border-beige-200 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              {experience.logo ? (
                <div className="relative w-48 h-48">
                  <Image
                    src={experience.logo || "/placeholder.svg"}
                    alt={`${experience.company} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-lg font-medium">{experience.company}</span>
                </div>
              )}
            </div>
            <div className="md:w-3/4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{experience.title}</h3>
                  <p className="text-primary font-medium">{experience.company}</p>
                </div>
                <p className="text-gray-600 mt-2 md:mt-0">{experience.period}</p>
              </div>
              <p className="text-gray-600 mb-4">{experience.location}</p>

              <div className="mb-6">
                <ul className="space-y-2">
                  {experience.description.map((item: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.skills.map((skill: any, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">{skill.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">{skill.name}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
