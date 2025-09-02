"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { BookOpen, GraduationCap, Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function EducationCards() {
  const educations = [
    {
      degree: "Bachelor in Information Technology with Finance Specialization, Data Analytics Minor",
      institution: "Furman University",
      location: "Greenville, South Carolina",
      period: "Graduating in May 2026",
      gpa: "Major GPA: 3.92/4.0",
      coursework: [
        "Machine Learning with Big Data",
        "Data Mining",
        "Python Programming",
        "Corporate Finance",
        "Financial and Managerial Accounting",
        "Data Structures and Algorithms",
        "Statistical Methods in R",
        "Calculus",
        "Linear Algebra",
        "Discrete Structures",
        "Business Analytics",
        "Statistics",
        "Economics",
        "GIS",
      ],
      logo: "/logos/furman-university-logo.png",
      color: "purple", // Color theme for Furman
    },
    {
      degree: "Semester Study Abroad and Internship",
      institution: "Edinburgh Napier University",
      location: "Edinburgh, Scotland",
      period: "Sept 2023 - Dec 2023",
      coursework: [
        "Database Management System",
        "International Internship",
        "Digital Media Content Creation",
        "Economic Thought of Scotland",
      ],
      logo: "/logos/edinburgh-napier-logo.png",
      color: "red", // Color theme for Edinburgh Napier
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-12">
      {educations.map((education, index) => (
        <EducationCard key={index} education={education} index={index} />
      ))}
    </div>
  )
}

function EducationCard({ education, index }: { education: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Define color schemes based on the university
  const colorSchemes = {
    purple: {
      gradient: "from-purple-100 to-purple-200",
      primary: "text-purple-700",
      secondary: "text-purple-600",
      iconBg: "text-purple-500",
      starColor: "text-purple-500",
      courseBg: "bg-purple-50",
      courseBorder: "border-purple-200",
    },
    red: {
      gradient: "from-red-100 to-red-200",
      primary: "text-red-700",
      secondary: "text-red-600",
      iconBg: "text-red-500",
      starColor: "text-red-500",
      courseBg: "bg-red-50",
      courseBorder: "border-red-200",
    },
  }

  // Get the color scheme based on the university or default to primary/secondary
  const colorScheme = education.color
    ? colorSchemes[education.color as keyof typeof colorSchemes]
    : {
        gradient: "from-primary/10 to-secondary/10",
        primary: "text-primary",
        secondary: "text-secondary",
        iconBg: "text-secondary",
        starColor: "text-yellow-500",
        courseBg: "bg-beige-50",
        courseBorder: "border-beige-200",
      }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-white rounded-xl border border-beige-200 shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className={cn("bg-gradient-to-r p-8", colorScheme.gradient)}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              {education.logo ? (
                <div className="relative w-48 h-48 bg-white p-4 rounded-full shadow-md">
                  <Image
                    src={education.logo || "/placeholder.svg"}
                    alt={`${education.institution} Logo`}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ) : (
                <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-lg font-medium">{education.institution}</span>
                </div>
              )}
            </div>
            <div className="md:w-3/4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{education.degree}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                <p className={cn("font-semibold text-xl", colorScheme.primary)}>{education.institution}</p>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                <p className="text-gray-600">{education.location}</p>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className={cn("h-5 w-5", colorScheme.iconBg)} />
                  <p className="text-gray-700">{education.period}</p>
                </div>
                {education.gpa && (
                  <>
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    <div className="flex items-center gap-2">
                      <Star className={cn("h-5 w-5", colorScheme.starColor)} />
                      <p className="text-gray-700 font-medium">{education.gpa}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Coursework Section with individual boxes */}
          {education.coursework && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className={cn("h-6 w-6", colorScheme.iconBg)} />
                <h4 className={cn("text-xl font-semibold", colorScheme.secondary)}>Relevant Coursework</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course: string, i: number) => (
                  <div
                    key={i}
                    className={cn(
                      "px-3 py-1.5 rounded-md border text-sm font-medium",
                      colorScheme.courseBg,
                      colorScheme.courseBorder,
                      "text-gray-700",
                    )}
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
