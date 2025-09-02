"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState("programming")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Define consistent colors for skill levels
  const levelColors = {
    Expert: "bg-purple-600",
    Advanced: "bg-blue-500",
    Intermediate: "bg-green-500",
    Beginner: "bg-orange-500",
  }

  const skillCategories = [
    {
      id: "programming",
      name: "Programming & Libraries",
      skills: [
        {
          name: "Python",
          icon: "/skills/python.svg",
          level: "Expert",
        },
        {
          name: "R",
          icon: "/skills/r-lang.svg",
          level: "Advanced",
        },
        {
          name: "SQL",
          icon: "/skills/sql.svg",
          level: "Expert",
        },
        {
          name: "Pandas",
          icon: "/skills/pandas.svg",
          level: "Expert",
        },
        {
          name: "NumPy",
          icon: "/skills/numpy.svg",
          level: "Expert",
        },
        {
          name: "TensorFlow",
          icon: "/skills/tensorflow.png",
          level: "Advanced",
        },
        {
          name: "PyTorch",
          icon: "/skills/pytorch.png",
          level: "Advanced",
        },
        {
          name: "Scikit-learn",
          icon: "/skills/scikit-learn.png",
          level: "Expert",
        },
        {
          name: "Java",
          icon: "/skills/java.png",
          level: "Intermediate",
        },
        {
          name: "JavaScript",
          icon: "/skills/javascript.png",
          level: "Beginner",
        },
      ],
    },
    {
      id: "data",
      name: "Data & Analytics",
      skills: [
        {
          name: "Tableau",
          icon: "/skills/tableau.png",
          level: "Expert",
        },
        {
          name: "Power BI",
          icon: "/skills/power-bi.png",
          level: "Advanced",
        },
        {
          name: "Excel",
          icon: "/skills/excel.png",
          level: "Expert",
        },
        {
          name: "SPSS",
          icon: "/skills/spss.png",
          level: "Intermediate",
        },
        {
          name: "SAS",
          icon: "/skills/sas.png",
          level: "Intermediate",
        },
        {
          name: "QGIS",
          icon: "/skills/qgis.png",
          level: "Advanced",
        },
        {
          name: "Matplotlib",
          icon: "/skills/matplotlib.png",
          level: "Expert",
        },
        {
          name: "Seaborn",
          icon: "/skills/seaborn.png",
          level: "Expert",
        },
        {
          name: "Plotly",
          icon: "/skills/plotly.png",
          level: "Advanced",
        },
        {
          name: "D3.js",
          icon: "/skills/d3.png",
          level: "Beginner",
        },
      ],
    },
    {
      id: "tools",
      name: "Tools & Infrastructure",
      skills: [
        {
          name: "Git",
          icon: "/skills/git.png",
          level: "Advanced",
        },
        {
          name: "AWS",
          icon: "/skills/aws.png",
          level: "Advanced",
        },
        {
          name: "Docker",
          icon: "/skills/docker.png",
          level: "Intermediate",
        },
        {
          name: "Snowflake",
          icon: "/skills/snowflake.png",
          level: "Advanced",
        },
        {
          name: "Spark",
          icon: "/skills/spark.png",
          level: "Advanced",
        },
        {
          name: "Airflow",
          icon: "/skills/airflow.png",
          level: "Intermediate",
        },
        {
          name: "Jupyter",
          icon: "/skills/jupyter.png",
          level: "Expert",
        },
        {
          name: "VS Code",
          icon: "/skills/vscode.png",
          level: "Expert",
        },
        {
          name: "Kubernetes",
          icon: "/skills/kubernetes.png",
          level: "Beginner",
        },
        {
          name: "Terraform",
          icon: "/skills/terraform.png",
          level: "Beginner",
        },
      ],
    },
  ]

  const getCategory = (id: string) => {
    return skillCategories.find((category) => category.id === id) || skillCategories[0]
  }

  const currentCategory = getCategory(activeCategory)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <div className="max-w-5xl mx-auto" ref={ref}>
      <Tabs defaultValue="programming" value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto">
          {skillCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="bg-white p-8 rounded-xl border border-beige-200 shadow-lg"
      >
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">{currentCategory.name}</h3>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {currentCategory.skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="relative w-16 h-16 mb-3 transition-transform duration-300 hover:rotate-12">
                <Image
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-md"
                />
              </div>
              <h4 className="font-medium text-gray-800 text-center">{skill.name}</h4>
              <Badge className={`mt-1 ${levelColors[skill.level]} text-white border-0`} variant="outline">
                {skill.level}
              </Badge>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-purple-600/10 to-purple-600/5 p-4 rounded-xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-purple-600"></div>
              <h4 className="font-medium text-purple-600">Expert</h4>
            </div>
            <p className="text-3xl font-bold text-purple-600 text-center">
              {currentCategory.skills.filter((s) => s.level === "Expert").length}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-4 rounded-xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <h4 className="font-medium text-blue-500">Advanced</h4>
            </div>
            <p className="text-3xl font-bold text-blue-500 text-center">
              {currentCategory.skills.filter((s) => s.level === "Advanced").length}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 p-4 rounded-xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <h4 className="font-medium text-green-500">Intermediate</h4>
            </div>
            <p className="text-3xl font-bold text-green-500 text-center">
              {currentCategory.skills.filter((s) => s.level === "Intermediate").length}
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 p-4 rounded-xl">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <h4 className="font-medium text-orange-500">Beginner</h4>
            </div>
            <p className="text-3xl font-bold text-orange-500 text-center">
              {currentCategory.skills.filter((s) => s.level === "Beginner").length}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
