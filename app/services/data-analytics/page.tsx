import { ServiceDetailPage } from "@/components/service-detail-page"
import { Database, BarChart4, PieChart, LineChart, Table } from "lucide-react"

export default function DataAnalyticsPage() {
  const serviceData = {
    title: "Data Analytics",
    description:
      "Transform your raw data into actionable insights with our comprehensive data analytics services. We help businesses make data-driven decisions through advanced analytics techniques and visualization.",
    icon: <Database className="h-16 w-16 text-primary" />,
    features: [
      {
        title: "Data Cleaning & Preprocessing",
        description: "Transform messy, unstructured data into clean, analysis-ready datasets.",
        icon: <Table className="h-8 w-8 text-primary" />,
      },
      {
        title: "Exploratory Data Analysis",
        description: "Uncover patterns, anomalies, and relationships in your data to drive insights.",
        icon: <LineChart className="h-8 w-8 text-secondary" />,
      },
      {
        title: "Data Visualization",
        description: "Create compelling visual representations of your data to communicate insights effectively.",
        icon: <PieChart className="h-8 w-8 text-primary" />,
      },
      {
        title: "Business Intelligence",
        description: "Develop dashboards and reporting systems to monitor key performance indicators.",
        icon: <BarChart4 className="h-8 w-8 text-secondary" />,
      },
    ],
    process: [
      {
        title: "Requirements Gathering",
        description: "We work closely with you to understand your business objectives and data needs.",
      },
      {
        title: "Data Collection & Preparation",
        description: "We collect, clean, and prepare your data for analysis, ensuring quality and consistency.",
      },
      {
        title: "Analysis & Modeling",
        description: "We apply statistical methods and analytical techniques to extract insights from your data.",
      },
      {
        title: "Visualization & Reporting",
        description: "We create intuitive visualizations and reports to communicate findings effectively.",
      },
      {
        title: "Implementation & Support",
        description: "We help you implement data-driven strategies and provide ongoing support.",
      },
    ],
    caseStudies: [
      {
        title: "Retail Sales Optimization",
        description:
          "Helped a retail client increase sales by 15% through customer segmentation and product recommendation analysis.",
      },
      {
        title: "Marketing Campaign Effectiveness",
        description:
          "Improved marketing ROI by 25% by analyzing campaign performance data and optimizing channel allocation.",
      },
    ],
  }

  return <ServiceDetailPage serviceData={serviceData} />
}
