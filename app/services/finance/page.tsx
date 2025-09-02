import { ServiceDetailPage } from "@/components/service-detail-page"
import { LineChart, BarChart4, TrendingUp, PieChart, Shield } from "lucide-react"

export default function FinancePage() {
  const serviceData = {
    title: "Financial Services",
    description:
      "Leverage data-driven financial analysis to optimize investment strategies, manage risk, and make informed financial decisions. Our financial services combine quantitative analysis with machine learning to provide actionable insights for your financial goals.",
    icon: <LineChart className="h-16 w-16 text-primary" />,
    features: [
      {
        title: "Financial Data Analysis",
        description: "Extract meaningful insights from financial data to identify trends and opportunities.",
        icon: <TrendingUp className="h-8 w-8 text-primary" />,
      },
      {
        title: "Portfolio Risk Analytics",
        description: "Assess and optimize investment portfolios using advanced risk management techniques.",
        icon: <Shield className="h-8 w-8 text-secondary" />,
      },
      {
        title: "Investment Strategy Development",
        description: "Create data-driven investment strategies tailored to your financial goals and risk tolerance.",
        icon: <PieChart className="h-8 w-8 text-primary" />,
      },
      {
        title: "Financial Forecasting",
        description: "Predict financial outcomes and market trends using statistical models and machine learning.",
        icon: <BarChart4 className="h-8 w-8 text-secondary" />,
      },
    ],
    process: [
      {
        title: "Financial Assessment",
        description: "We analyze your current financial situation, goals, and constraints to establish a baseline.",
      },
      {
        title: "Data Collection & Analysis",
        description:
          "We gather relevant financial data and perform comprehensive analysis to identify patterns and opportunities.",
      },
      {
        title: "Strategy Development",
        description: "We develop customized financial strategies based on quantitative analysis and market insights.",
      },
      {
        title: "Implementation & Monitoring",
        description: "We help you implement the strategies and continuously monitor performance against benchmarks.",
      },
      {
        title: "Optimization & Adjustment",
        description:
          "We regularly review and refine strategies to adapt to changing market conditions and financial goals.",
      },
    ],
    caseStudies: [
      {
        title: "Portfolio Optimization for Individual Investor",
        description:
          "Increased portfolio returns by 18% while reducing volatility by 25% through data-driven asset allocation and risk management.",
      },
      {
        title: "Algorithmic Trading Strategy Development",
        description:
          "Developed a quantitative trading strategy that achieved a Sharpe ratio of 2.3, outperforming benchmark indices by 12%.",
      },
    ],
  }

  return <ServiceDetailPage serviceData={serviceData} />
}
