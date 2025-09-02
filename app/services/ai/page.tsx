import { ServiceDetailPage } from "@/components/service-detail-page"
import { Cpu, Bot, Lightbulb, Workflow, Layers } from "lucide-react"

export default function AIPage() {
  const serviceData = {
    title: "Artificial Intelligence",
    description:
      "Leverage cutting-edge AI technologies to transform your business operations, enhance customer experiences, and drive innovation. Our AI solutions are designed to solve complex problems and create competitive advantages for your organization.",
    icon: <Cpu className="h-16 w-16 text-secondary" />,
    features: [
      {
        title: "AI Strategy & Consulting",
        description: "Develop a comprehensive AI roadmap aligned with your business objectives.",
        icon: <Lightbulb className="h-8 w-8 text-secondary" />,
      },
      {
        title: "Intelligent Automation",
        description: "Automate complex processes with AI-powered systems that learn and improve over time.",
        icon: <Workflow className="h-8 w-8 text-primary" />,
      },
      {
        title: "Conversational AI",
        description: "Build chatbots and virtual assistants that provide natural, helpful interactions.",
        icon: <Bot className="h-8 w-8 text-secondary" />,
      },
      {
        title: "AI Integration",
        description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
        icon: <Layers className="h-8 w-8 text-primary" />,
      },
    ],
    process: [
      {
        title: "Discovery & Assessment",
        description: "We evaluate your current capabilities and identify opportunities for AI implementation.",
      },
      {
        title: "Solution Design",
        description: "We design AI solutions tailored to your specific business challenges and objectives.",
      },
      {
        title: "Development & Testing",
        description: "We build and rigorously test AI systems to ensure they meet performance requirements.",
      },
      {
        title: "Implementation",
        description: "We deploy AI solutions in your environment and integrate them with existing systems.",
      },
      {
        title: "Continuous Improvement",
        description: "We monitor performance and continuously refine AI systems to improve outcomes over time.",
      },
    ],
    caseStudies: [
      {
        title: "Customer Service Transformation",
        description:
          "Implemented an AI-powered customer service system that reduced response times by 75% and improved satisfaction scores by 30%.",
      },
      {
        title: "Intelligent Document Processing",
        description:
          "Developed an AI solution that automated document processing, reducing manual effort by 90% and improving accuracy by 40%.",
      },
    ],
  }

  return <ServiceDetailPage serviceData={serviceData} />
}
