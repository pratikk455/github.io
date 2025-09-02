"use client"

import { useState } from "react"
import { Database, Code, School, User, BarChart4, LineChart, Plane, Cpu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ServicesWithSidebar() {
  const [activeCategory, setActiveCategory] = useState("tech")

  const categories = [
    { id: "tech", name: "Technology", icon: <Cpu className="h-5 w-5" /> },
    { id: "finance", name: "Finance", icon: <LineChart className="h-5 w-5" /> },
    { id: "travel", name: "Travel", icon: <Plane className="h-5 w-5" /> },
    { id: "education", name: "Education", icon: <School className="h-5 w-5" /> },
  ]

  const services = {
    tech: [
      {
        title: "Data Analytics",
        description:
          "Comprehensive data analysis services including data cleaning, visualization, and insights generation to help businesses make data-driven decisions.",
        icon: <Database className="h-12 w-12 text-primary" />,
        link: "/services/data-analytics",
      },
      {
        title: "Data Science",
        description:
          "Development of data science solutions to extract valuable insights from your data, including statistical analysis, predictive modeling, and data mining.",
        icon: <BarChart4 className="h-12 w-12 text-secondary" />,
        link: "/services/data-science",
      },
      {
        title: "Machine Learning",
        description:
          "Implementation of machine learning models and algorithms to solve complex business problems, automate processes, and improve decision-making.",
        icon: <Code className="h-12 w-12 text-primary" />,
        link: "/services/machine-learning",
      },
      {
        title: "Artificial Intelligence",
        description:
          "Development of AI solutions including natural language processing, computer vision, and recommendation systems to enhance your products and services.",
        icon: <Cpu className="h-12 w-12 text-secondary" />,
        link: "/services/ai",
      },
    ],
    finance: [
      {
        title: "Financial Data Analysis",
        description:
          "Specialized analysis of financial data to identify trends, forecast outcomes, and provide actionable insights for investment decisions.",
        icon: <LineChart className="h-12 w-12 text-primary" />,
        link: "/services/finance",
      },
      {
        title: "Portfolio Risk Analytics",
        description:
          "Advanced risk assessment and optimization for investment portfolios using statistical models and machine learning techniques.",
        icon: <BarChart4 className="h-12 w-12 text-secondary" />,
        link: "/services/finance",
      },
    ],
    travel: [
      {
        title: "Travel Planning",
        description:
          "Personalized travel planning services for individuals and groups, including itinerary development, accommodation recommendations, and local experiences.",
        icon: <Plane className="h-12 w-12 text-primary" />,
        link: "/services/travel",
      },
    ],
    education: [
      {
        title: "US College Application Assistance",
        description:
          "Personalized guidance for international students applying to US colleges, including application strategy, essay review, and interview preparation.",
        icon: <School className="h-12 w-12 text-primary" />,
        link: "/services/college-admission",
      },
      {
        title: "US Internship Assistance",
        description:
          "Comprehensive support for securing internships in the US, including resume building, interview preparation, and networking strategies.",
        icon: <User className="h-12 w-12 text-secondary" />,
        link: "/services/internship",
      },
    ],
  }

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <div className="md:w-1/4">
        <div className="bg-white p-4 rounded-xl border border-beige-200 shadow-lg sticky top-24">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Categories</h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    activeCategory === category.id ? "bg-primary text-white" : "text-gray-700 hover:bg-beige-100"
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Services Grid */}
      <div className="md:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services[activeCategory as keyof typeof services].map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-beige-200 shadow-lg h-full flex flex-col">
      <div className="flex justify-center mb-6">{service.icon}</div>

      <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{service.title}</h3>
      <p className="text-gray-700 text-center mb-6 flex-grow">{service.description}</p>

      <div className="flex justify-center">
        <Link href={service.link}>
          <Button className="bg-primary hover:bg-primary-dark text-white">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
