"use client"

import { useEffect, useState } from "react"
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js"
import { Radar } from "react-chartjs-2"

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

export function SkillsRadar() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  })

  const [activeTab, setActiveTab] = useState("technical")

  useEffect(() => {
    const technicalSkills = {
      labels: [
        "Python",
        "Machine Learning",
        "Data Analysis",
        "SQL",
        "Statistical Modeling",
        "Deep Learning",
        "NLP",
        "Data Visualization",
      ],
      datasets: [
        {
          label: "Proficiency",
          data: [95, 90, 92, 85, 88, 80, 75, 90],
          backgroundColor: "rgba(0, 120, 168, 0.2)",
          borderColor: "rgba(0, 120, 168, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(217, 125, 54, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(0, 120, 168, 1)",
        },
      ],
    }

    const financialSkills = {
      labels: [
        "Quantitative Analysis",
        "Risk Management",
        "Portfolio Optimization",
        "Financial Modeling",
        "Algorithmic Trading",
        "Time Series Analysis",
        "Derivatives Pricing",
        "Market Microstructure",
      ],
      datasets: [
        {
          label: "Proficiency",
          data: [88, 85, 80, 90, 85, 92, 75, 70],
          backgroundColor: "rgba(217, 125, 54, 0.2)",
          borderColor: "rgba(217, 125, 54, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(0, 120, 168, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(217, 125, 54, 1)",
        },
      ],
    }

    const toolsSkills = {
      labels: ["Pandas", "TensorFlow/PyTorch", "Scikit-learn", "Tableau", "AWS", "Docker", "Git", "Snowflake"],
      datasets: [
        {
          label: "Proficiency",
          data: [95, 85, 90, 80, 75, 70, 85, 80],
          backgroundColor: "rgba(0, 120, 168, 0.2)",
          borderColor: "rgba(0, 120, 168, 1)",
          borderWidth: 2,
          pointBackgroundColor: "rgba(217, 125, 54, 1)",
          pointBorderColor: "#fff",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(0, 120, 168, 1)",
        },
      ],
    }

    if (activeTab === "technical") {
      setChartData(technicalSkills)
    } else if (activeTab === "financial") {
      setChartData(financialSkills)
    } else {
      setChartData(toolsSkills)
    }
  }, [activeTab])

  const options = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        pointLabels: {
          color: "rgba(0, 0, 0, 0.7)",
          font: {
            size: 12,
          },
        },
        ticks: {
          backdropColor: "transparent",
          color: "rgba(0, 0, 0, 0.5)",
          z: 100,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        titleColor: "rgba(0, 0, 0, 0.8)",
        bodyColor: "rgba(0, 0, 0, 0.8)",
        borderColor: "rgba(0, 120, 168, 0.5)",
        borderWidth: 1,
        padding: 10,
        displayColors: false,
        callbacks: {
          label: (context: any) => `Proficiency: ${context.raw}%`,
        },
      },
    },
    maintainAspectRatio: false,
  }

  return (
    <div className="h-[400px]">
      <div className="flex justify-center mb-6 space-x-2">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "technical" ? "bg-primary text-white" : "bg-beige-200 text-gray-700 hover:bg-beige-300"
          }`}
          onClick={() => setActiveTab("technical")}
        >
          Technical Skills
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "financial" ? "bg-secondary text-white" : "bg-beige-200 text-gray-700 hover:bg-beige-300"
          }`}
          onClick={() => setActiveTab("financial")}
        >
          Financial Skills
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeTab === "tools" ? "bg-primary text-white" : "bg-beige-200 text-gray-700 hover:bg-beige-300"
          }`}
          onClick={() => setActiveTab("tools")}
        >
          Tools & Frameworks
        </button>
      </div>
      <div className="h-[300px]">
        {chartData.labels && chartData.labels.length > 0 && <Radar data={chartData} options={options} />}
      </div>
    </div>
  )
}
