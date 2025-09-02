import { ServiceDetailPage } from "@/components/service-detail-page"
import { Users, FileText, Briefcase, MessageSquare, Award } from "lucide-react"

export default function InternshipPage() {
  const serviceData = {
    title: "US Internship Assistance",
    description:
      "Secure valuable internship opportunities in the United States with personalized guidance through every step of the process. Our comprehensive approach helps international students navigate the competitive internship landscape and develop the skills needed to stand out to employers.",
    icon: <Briefcase className="h-16 w-16 text-secondary" />,
    features: [
      {
        title: "Resume & Cover Letter Development",
        description:
          "Create professional, tailored application materials that highlight your relevant skills and experiences.",
        icon: <FileText className="h-8 w-8 text-primary" />,
      },
      {
        title: "Interview Preparation",
        description:
          "Comprehensive coaching for behavioral and technical interviews to help you communicate confidently.",
        icon: <MessageSquare className="h-8 w-8 text-secondary" />,
      },
      {
        title: "Networking Strategy",
        description: "Develop effective networking approaches to connect with professionals in your target industry.",
        icon: <Users className="h-8 w-8 text-primary" />,
      },
      {
        title: "Personal Branding",
        description: "Build a compelling professional brand across LinkedIn and other platforms to attract employers.",
        icon: <Award className="h-8 w-8 text-secondary" />,
      },
    ],
    process: [
      {
        title: "Career Assessment",
        description:
          "We evaluate your skills, experiences, interests, and career goals to define your internship targets.",
      },
      {
        title: "Application Material Development",
        description: "We help you create tailored resumes and cover letters that align with your target opportunities.",
      },
      {
        title: "Opportunity Identification",
        description: "We research and identify relevant internship opportunities that match your profile and goals.",
      },
      {
        title: "Interview Coaching",
        description: "We provide comprehensive interview preparation including mock interviews and feedback.",
      },
      {
        title: "Offer Evaluation",
        description:
          "We help you assess internship offers and negotiate terms to maximize the value of your experience.",
      },
    ],
    caseStudies: [
      {
        title: "Finance Internship Success",
        description:
          "Helped an international business student secure a summer internship at a leading investment bank in New York through targeted resume development and interview preparation.",
      },
      {
        title: "Tech Industry Placement",
        description:
          "Guided a computer science student through the competitive tech internship process, resulting in multiple offers from Silicon Valley companies.",
      },
    ],
  }

  return <ServiceDetailPage serviceData={serviceData} />
}
