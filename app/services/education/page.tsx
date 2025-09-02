import { ServiceDetailPage } from "@/components/service-detail-page"
import { School, GraduationCap, BookOpen, FileText, Users } from "lucide-react"

export default function EducationPage() {
  const serviceData = {
    title: "Education Services",
    description:
      "Navigate the complex process of US college applications and internships with personalized guidance and strategic support. Our education services help international students maximize their opportunities for academic and professional success in the United States.",
    icon: <School className="h-16 w-16 text-primary" />,
    features: [
      {
        title: "US College Application Assistance",
        description: "Comprehensive guidance for international students applying to US colleges and universities.",
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
      },
      {
        title: "Essay Review & Development",
        description: "Strategic development and refinement of application essays that highlight your unique strengths.",
        icon: <FileText className="h-8 w-8 text-secondary" />,
      },
      {
        title: "US Internship Assistance",
        description: "Support for securing internships in the US, including resume building and interview preparation.",
        icon: <Users className="h-8 w-8 text-primary" />,
      },
      {
        title: "Academic Planning",
        description: "Strategic academic planning to align coursework with college application and career goals.",
        icon: <BookOpen className="h-8 w-8 text-secondary" />,
      },
    ],
    process: [
      {
        title: "Initial Assessment",
        description: "We evaluate your academic background, extracurricular activities, and educational goals.",
      },
      {
        title: "Strategy Development",
        description:
          "We create a personalized strategy for college applications or internship search based on your profile.",
      },
      {
        title: "Application Preparation",
        description: "We guide you through each step of the application process, from essays to interviews.",
      },
      {
        title: "Document Review",
        description: "We review and refine application materials to ensure they effectively showcase your strengths.",
      },
      {
        title: "Decision Support",
        description: "We help you evaluate offers and make informed decisions about your educational and career path.",
      },
    ],
    caseStudies: [
      {
        title: "Ivy League Admission Success",
        description:
          "Guided an international student through the application process, resulting in acceptance to two Ivy League universities with scholarship offers.",
      },
      {
        title: "Tech Industry Internship Placement",
        description:
          "Helped a computer science student secure a summer internship at a leading tech company in Silicon Valley through strategic resume development and interview preparation.",
      },
    ],
  }

  return <ServiceDetailPage serviceData={serviceData} />
}
