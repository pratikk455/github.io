import { Database, Code, Cpu, BarChart4 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function TechServicesPage() {
  const services = [
    {
      title: "Data Analytics",
      description:
        "Comprehensive data analysis services including data cleaning, visualization, and insights generation to help businesses make data-driven decisions.",
      icon: <Database className="h-12 w-12 text-primary" />,
      link: "/services/data-analytics",
      features: [
        "Data cleaning and preprocessing",
        "Exploratory data analysis",
        "Data visualization and dashboards",
        "Business intelligence solutions",
        "Reporting and insights generation",
      ],
    },
    {
      title: "Data Science",
      description:
        "Development of data science solutions to extract valuable insights from your data, including statistical analysis, predictive modeling, and data mining.",
      icon: <BarChart4 className="h-12 w-12 text-secondary" />,
      link: "/services/data-science",
      features: [
        "Statistical analysis and hypothesis testing",
        "Predictive modeling",
        "Data mining and pattern recognition",
        "Feature engineering",
        "Model evaluation and interpretation",
      ],
    },
    {
      title: "Machine Learning",
      description:
        "Implementation of machine learning models and algorithms to solve complex business problems, automate processes, and improve decision-making.",
      icon: <Code className="h-12 w-12 text-primary" />,
      link: "/services/machine-learning",
      features: [
        "Supervised and unsupervised learning",
        "Deep learning and neural networks",
        "Natural language processing",
        "Computer vision",
        "Reinforcement learning",
      ],
    },
    {
      title: "Artificial Intelligence",
      description:
        "Development of AI solutions including natural language processing, computer vision, and recommendation systems to enhance your products and services.",
      icon: <Cpu className="h-12 w-12 text-secondary" />,
      link: "/services/ai",
      features: [
        "AI strategy and consulting",
        "Intelligent automation",
        "Recommendation systems",
        "Conversational AI and chatbots",
        "AI integration with existing systems",
      ],
    },
  ]

  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Technology Services</h1>
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Leverage cutting-edge technology solutions to transform your data into actionable insights and drive
          innovation in your organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </main>
  )
}

function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-beige-200 shadow-lg h-full flex flex-col">
      <div className="flex justify-center mb-6">{service.icon}</div>

      <h3 className="text-xl font-bold text-gray-800 text-center mb-4">{service.title}</h3>
      <p className="text-gray-700 text-center mb-6">{service.description}</p>

      <div className="mb-6 flex-grow">
        <h4 className="font-medium text-primary mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start">
              <span className="text-secondary mr-2">•</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

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
