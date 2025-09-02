import { ServiceDetailPage } from "@/components/service-detail-page"
import { GraduationCap, FileText, Target, Award, Briefcase } from "lucide-react"

export default function CollegeAdmissionPage() {
  const serviceData = {
    title: "US College Application Assistance",
    description:
      "Navigate the competitive US college admissions process with personalized guidance from an experienced advisor. Our comprehensive approach helps international students showcase their unique strengths and maximize their chances of acceptance to their dream schools.",
    icon: <GraduationCap className="h-16 w-16 text-primary" />,
    features: [
      {
        title: "College Selection Strategy",
        description: "Develop a tailored list of target, reach, and safety schools based on your profile and goals.",
        icon: <Target className="h-8 w-8 text-primary" />,
      },
      {
        title: "Application Essay Development",
        description: "Craft compelling personal statements and supplemental essays that highlight your unique story.",
        icon: <FileText className="h-8 w-8 text-secondary" />,
      },
      {
        title: "Extracurricular Positioning",
        description: "Strategically present your activities and achievements to stand out to admissions committees.",
        icon: <Award className="h-8 w-8 text-primary" />,
      },
      {
        title: "Interview Preparation",
        description:
          "Comprehensive coaching for college interviews to help you communicate confidently and effectively.",
        icon: <Briefcase className="h-8 w-8 text-secondary" />,
      },
    ],
    process: [
      {
        title: "Profile Assessment",
        description:
          "We evaluate your academic record, test scores, extracurricular activities, and personal background.",
      },
      {
        title: "College List Development",
        description: "We create a strategic list of colleges that match your academic profile, preferences, and goals.",
      },
      {
        title: "Application Planning",
        description: "We develop a timeline and action plan for completing all application components on schedule.",
      },
      {
        title: "Essay Development",
        description: "We guide you through brainstorming, drafting, and refining compelling application essays.",
      },
      {
        title: "Application Review",
        description:
          "We provide comprehensive review of all application materials before submission to ensure quality and completeness.",
      },
    ],
    caseStudies: [
      {
        title: "First-Generation College Student Success",
        description:
          "Helped a first-generation international student secure admission to five top-30 US universities with significant scholarship offers.",
      },
      {
        title: "STEM Student Ivy League Admission",
        description:
          "Guided a STEM-focused student through the application process, resulting in acceptance to an Ivy League engineering program despite intense competition.",
      },
    ],
  }

  return <ServiceDetailPage serviceData={serviceData} />
}
