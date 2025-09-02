"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  Database,
  Code,
  School,
  BarChart4,
  LineChart,
  Plane,
  Cpu,
  CreditCard,
  BookOpen,
  GraduationCap,
  Briefcase,
  User,
} from "lucide-react"

export function ServicesOverview() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const buttonRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeCategory) {
        const dropdownRef = dropdownRefs.current[activeCategory]
        const buttonRef = buttonRefs.current[activeCategory]

        if (
          dropdownRef &&
          !dropdownRef.contains(event.target as Node) &&
          buttonRef &&
          !buttonRef.contains(event.target as Node)
        ) {
          setActiveCategory(null)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeCategory])

  const serviceCategories = [
    {
      id: "tech",
      name: "Technology",
      icon: <Cpu className="h-12 w-12 text-primary" />,
      services: [
        {
          title: "Data Analytics",
          description:
            "Comprehensive data analysis services including data cleaning, visualization, and insights generation.",
          icon: <Database className="h-8 w-8 text-primary" />,
          link: "/services/data-analytics",
        },
        {
          title: "Data Science",
          description: "Development of data science solutions to extract valuable insights from your data.",
          icon: <BarChart4 className="h-8 w-8 text-secondary" />,
          link: "/services/data-science",
        },
        {
          title: "Machine Learning",
          description: "Implementation of machine learning models and algorithms to solve complex business problems.",
          icon: <Code className="h-8 w-8 text-primary" />,
          link: "/services/machine-learning",
        },
        {
          title: "Artificial Intelligence",
          description: "Development of AI solutions including natural language processing and computer vision.",
          icon: <Cpu className="h-8 w-8 text-secondary" />,
          link: "/services/ai",
        },
      ],
    },
    {
      id: "finance",
      name: "Finance",
      icon: <LineChart className="h-12 w-12 text-secondary" />,
      services: [
        {
          title: "Financial Data Analysis",
          description: "Specialized analysis of financial data to identify trends and provide actionable insights.",
          icon: <LineChart className="h-8 w-8 text-primary" />,
          link: "/services/finance",
        },
        {
          title: "Portfolio Risk Analytics",
          description: "Advanced risk assessment and optimization for investment portfolios.",
          icon: <BarChart4 className="h-8 w-8 text-secondary" />,
          link: "/services/finance",
        },
        {
          title: "Credit Card Strategies",
          description: "Strategic advice on maximizing travel rewards, points, and benefits from credit cards.",
          icon: <CreditCard className="h-8 w-8 text-primary" />,
          link: "/services/travel#credit-cards",
        },
      ],
    },
    {
      id: "travel",
      name: "Travel",
      icon: <Plane className="h-12 w-12 text-primary" />,
      services: [
        {
          title: "Travel Planning",
          description: "Personalized itineraries tailored to your travel style, preferences, and budget.",
          icon: <Plane className="h-8 w-8 text-primary" />,
          link: "/services/travel",
        },
        {
          title: "Destination Guides",
          description: "In-depth guides to destinations I've personally explored, with insider tips.",
          icon: <BookOpen className="h-8 w-8 text-secondary" />,
          link: "/services/travel#destinations",
        },
      ],
    },
    {
      id: "education",
      name: "Education and Career",
      icon: <School className="h-12 w-12 text-secondary" />,
      services: [
        {
          title: "US College Application Assistance",
          description: "Personalized guidance for international students applying to US colleges.",
          icon: <GraduationCap className="h-8 w-8 text-primary" />,
          link: "/services/college-admission",
        },
        {
          title: "US Internship Assistance",
          description: "Comprehensive support for securing internships in the US.",
          icon: <Briefcase className="h-8 w-8 text-secondary" />,
          link: "/services/internship",
        },
        {
          title: "Career Counseling",
          description: "Professional guidance for career development and job search strategies.",
          icon: <User className="h-8 w-8 text-primary" />,
          link: "/services/education",
        },
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceCategories.map((category) => (
          <div key={category.id} className="relative">
            <div className="bg-white p-6 rounded-xl border border-beige-200 shadow-lg h-full flex flex-col">
              <div className="flex justify-center mb-6">{category.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{category.name}</h3>
              <div
                className="flex justify-center mt-auto"
                ref={(el) => (buttonRefs.current[category.id] = el)}
                onMouseEnter={() => setActiveCategory(category.id)}
              >
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  View Services <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Sideways dropdown */}
            {activeCategory === category.id && (
              <div
                ref={(el) => (dropdownRefs.current[category.id] = el)}
                className="absolute left-full top-0 ml-4 z-10 bg-white rounded-xl border border-beige-200 shadow-lg p-4 w-72 max-w-[calc(100vw-2rem)] lg:max-w-sm"
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="space-y-4">
                  {category.services.map((service, index) => (
                    <Link key={index} href={service.link} target="_blank" rel="noopener noreferrer">
                      <div className="p-3 rounded-lg hover:bg-beige-50 transition-colors cursor-pointer">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-md">{service.icon}</div>
                          <div>
                            <h4 className="font-medium text-gray-800">{service.title}</h4>
                            <p className="text-sm text-gray-600 font-light">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
