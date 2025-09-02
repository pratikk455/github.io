"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Briefcase, Building, Globe } from "lucide-react"

export function CampusInvolvement() {
  // Organize involvement by categories
  const involvementCategories = [
    {
      title: "Fellowships",
      icon: <Award className="h-8 w-8 text-white" />,
      color: "bg-primary",
      items: [
        {
          title: "Furman Metropolitan Fellowship 2025",
          period: "",
          description:
            "Selected for prestigious fellowship program focused on professional development and networking in major metropolitan areas.",
          image: "/images/networking-event.jpeg",
        },
        {
          title: "Furman Fellows 2026",
          period: "",
          description:
            "Recognized for academic excellence, leadership potential, and commitment to university values through this selective fellowship program.",
        },
      ],
    },
    {
      title: "Executive Member",
      icon: <Building className="h-8 w-8 text-white" />,
      color: "bg-secondary",
      items: [
        {
          title: "Founder & President, Data Science and Machine Learning Club",
          period: "Nov 2022 - Present",
          description:
            "Initiated a club for data enthusiasts to experience the breadth of data science through collaborative projects across multiple departments. Organized and hosted 'DataFest' - National level Data Analytics Competition and 'DataMania' - Furman's data science competition, facilitating the participation of data science enthusiasts at Furman University.",
          logo: "/logos/data-science-club-logo.png",
        },
        {
          title: "Vice President, ASIA Club",
          period: "2023 - Present",
          description:
            "Lead initiatives to promote awareness and appreciation of Asian cultures through campus-wide events and activities. Organize cultural celebrations, including 'Diwali and Tihar - Festival of Lights', 'Squid Game - Celebrating Korean Games', 'Holi - Festival of Colors', and Asian Heritage Month events.",
          logo: "/logos/fuasia-logo.jpeg",
        },
      ],
    },
    {
      title: "On-Campus Work",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      color: "bg-primary",
      items: [
        {
          title: "Resident Assistant",
          period: "Aug 2023 - Present",
          description:
            "Foster a supportive and inclusive residential community for 40+ first-year students. Plan and implement educational and social programming to enhance student experience and development.",
        },
        {
          title: "Computer Science Teaching Assistant",
          period: "Jan 2023 - Present",
          description:
            "Assist professors in teaching introductory and intermediate programming courses in Python and Java. Hold weekly office hours to provide one-on-one support for students struggling with programming concepts.",
        },
        {
          title: "Social Media Intern",
          period: "2023 - Present",
          description:
            "Manage social media accounts for university departments, creating engaging content and analyzing performance metrics to improve outreach strategies.",
        },
        {
          title: "Trone Student Manager",
          period: "2022 - Present",
          description:
            "Oversee operations and student staff at the Trone Student Center, ensuring smooth functioning of facilities and services for the campus community.",
        },
        {
          title: "Information Technology Student Assistant",
          period: "Sept 2022 - Feb 2025",
          description:
            "Provide technical support to students, faculty, and staff for hardware and software issues. Assist with classroom technology setup and troubleshooting to ensure smooth academic operations.",
        },
      ],
    },
    {
      title: "Other Involvement",
      icon: <Globe className="h-8 w-8 text-white" />,
      color: "bg-secondary",
      items: [
        {
          title: "Investment Club",
          period: "Aug 2022 - Present",
          description:
            "Participate in weekly market analysis and stock pitches, contributing to club portfolio management decisions. Develop and present investment theses using fundamental and technical analysis.",
        },
        {
          title: "Shucker Leadership",
          period: "Aug 2022 - Present",
          description:
            "Serve as a student ambassador for Furman University, representing the institution to prospective students and families. Lead campus tours, highlighting academic programs, student life, and university facilities.",
        },
        {
          title: "EVM",
          period: "2023 - Present",
          description:
            "Engage with Exploration of Vocation Ministry initiatives, developing business acumen and networking with industry professionals.",
        },
        {
          title: "GVL Starts",
          period: "2023 - Present",
          description:
            "Participate in Greenville's startup ecosystem, connecting with local entrepreneurs and contributing to innovation projects in the community.",
        },
        {
          title: "FUISA (Furman University International Student Association)",
          period: "2022 - Present",
          description:
            "Participate in cultural performances including dance, fashion shows, and representing Nepali culture while engaging with and learning about other cultures on campus.",
        },
      ],
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Campus Involvement & Leadership</h3>
      </div>

      {involvementCategories.map((category, categoryIndex) => (
        <CategorySection key={categoryIndex} category={category} index={categoryIndex} />
      ))}
    </div>
  )
}

function CategorySection({ category, index }: { category: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center`}>
            {category.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.items.map((item: any, itemIndex: number) => (
            <InvolvementCard key={itemIndex} involvement={item} index={itemIndex} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function InvolvementCard({ involvement, index }: { involvement: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <div className="bg-white p-6 rounded-xl border border-beige-200 shadow-lg h-full">
        <div className="flex items-start gap-4 mb-4">
          {involvement.logo && (
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <div className="relative w-full h-full">
                <Image
                  src={involvement.logo || "/placeholder.svg"}
                  alt={involvement.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-800">{involvement.title}</h3>
            <p className="text-primary font-medium text-sm">{involvement.period}</p>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4">{involvement.description}</p>

        {involvement.image && (
          <div className="relative w-full h-64 rounded-lg overflow-hidden mt-4">
            <Image
              src={involvement.image || "/placeholder.svg"}
              alt={involvement.title}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>
    </motion.div>
  )
}
