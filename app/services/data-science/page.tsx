import { ServiceDetailPage } from "@/components/service-detail-page"
import { BarChart4, Brain, Microscope, TrendingUp, Zap } from "lucide-react"

export default function DataSciencePage() {
  const serviceData = {
    title: "Data Science",
    description:
      "Unlock the full potential of your data with our advanced data science services. We combine statistical analysis, machine learning, and domain expertise to solve complex business problems and drive innovation.",
    icon: <BarChart4 className="h-16 w-16 text-secondary" />,
    features: [
      {
        title: "Statistical Analysis",
        description: "Apply rigorous statistical methods to test hypotheses and validate insights.",
        icon: <TrendingUp className="h-8 w-8 text-secondary" />,
      },
      {
        title: "Predictive Modeling",
        description: "Develop models that forecast future trends and outcomes based on historical data.",
        icon: <Brain className="h-8 w-8 text-primary" />,
      },
      {
        title: "Data Mining",
        description: "Discover hidden patterns and relationships in large datasets to extract valuable insights.",
        icon: <Microscope className="h-8 w-8 text-secondary" />,
      },
      {
        title: "Model Optimization",
        description: "Fine-tune models for maximum accuracy, efficiency, and business impact.",
        icon: <Zap className="h-8 w-8 text-primary" />,
      },
    ],
    process: [
      {
        title: "Problem Definition",
        description: "We work with you to clearly define the business problem and objectives.",
      },
      {
        title: "Data Collection & Exploration",
        description: "We gather relevant data and perform exploratory analysis to understand its characteristics.",
      },
      {
        title: "Feature Engineering",
        description: "We transform raw data into meaningful features that improve model performance.",
      },
      {
        title: "Model Development",
        description: "We build and train models using appropriate algorithms and techniques.",
      },
      {
        title: "Evaluation & Deployment",
        description: "We rigorously test models and deploy them in your production environment.",
      },
    ],
    caseStudies: [
      {
        title: "Customer Churn Prediction",
        description:
          "Developed a model that predicted customer churn with 85% accuracy, enabling proactive retention strategies.",
      },
      {
        title: "Demand Forecasting",
        description:
          "Created a forecasting system that reduced inventory costs by 20% while maintaining product availability.",
      },
    ],
  }

  return <ServiceDetailPage serviceData={serviceData} />
}
