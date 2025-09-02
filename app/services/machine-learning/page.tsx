import { ServiceDetailPage } from "@/components/service-detail-page"
import { Code, Network, Cpu, MessageSquare, Eye } from "lucide-react"

export default function MachineLearningPage() {
  const serviceData = {
    title: "Machine Learning",
    description:
      "Harness the power of machine learning to automate processes, gain predictive insights, and create intelligent systems that learn and improve over time. Our machine learning services help you build solutions that adapt to changing data and business needs.",
    icon: <Code className="h-16 w-16 text-primary" />,
    features: [
      {
        title: "Supervised Learning",
        description: "Build models that learn from labeled data to make accurate predictions on new data.",
        icon: <Network className="h-8 w-8 text-primary" />,
      },
      {
        title: "Deep Learning",
        description: "Implement neural networks for complex pattern recognition and feature extraction.",
        icon: <Cpu className="h-8 w-8 text-secondary" />,
      },
      {
        title: "Natural Language Processing",
        description: "Develop systems that understand, interpret, and generate human language.",
        icon: <MessageSquare className="h-8 w-8 text-primary" />,
      },
      {
        title: "Computer Vision",
        description: "Create applications that can analyze and understand visual information from images or videos.",
        icon: <Eye className="h-8 w-8 text-secondary" />,
      },
    ],
    process: [
      {
        title: "Requirements Analysis",
        description: "We identify your specific needs and determine the most suitable ML approach.",
      },
      {
        title: "Data Preparation",
        description: "We collect, clean, and preprocess data to ensure it's suitable for model training.",
      },
      {
        title: "Model Selection & Training",
        description: "We choose appropriate algorithms and train models on your data.",
      },
      {
        title: "Validation & Tuning",
        description: "We rigorously test models and optimize hyperparameters for best performance.",
      },
      {
        title: "Deployment & Monitoring",
        description: "We implement models in your environment and set up systems to monitor performance over time.",
      },
    ],
    caseStudies: [
      {
        title: "Fraud Detection System",
        description:
          "Implemented a machine learning system that reduced fraudulent transactions by 60% while minimizing false positives.",
      },
      {
        title: "Recommendation Engine",
        description:
          "Developed a personalized recommendation system that increased customer engagement by 35% and sales by 22%.",
      },
    ],
  }

  return <ServiceDetailPage serviceData={serviceData} />
}
