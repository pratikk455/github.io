import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"
import { TimelineExperience } from "@/components/timeline-experience"
import { EducationCards } from "@/components/education-cards"
import { CampusInvolvement } from "@/components/campus-involvement"
import { UpcomingInternship } from "@/components/upcoming-internship"
import { Award } from "lucide-react"
import { SkillsShowcase } from "@/components/skills-showcase"
import Image from "next/image"

export default function ResumePage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Resume</h1>
          <Button className="bg-primary hover:bg-primary-dark text-white">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>

        {/* Education Section */}
        <section id="education" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Education</h2>
            <EducationCards />
          </div>
        </section>

        {/* Upcoming Internship Section */}
        <section id="upcoming-internship" className="py-12 bg-beige-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Upcoming Internship</h2>
            <UpcomingInternship />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Professional Experience</h2>
            <TimelineExperience />
          </div>
        </section>

        {/* Campus Involvement Section */}
        <section id="involvement" className="py-12 bg-beige-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Campus Involvement & Leadership</h2>
            <CampusInvolvement />
          </div>
        </section>

        {/* Awards Section */}
        <section id="awards" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Awards & Recognition</h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl border border-beige-200 shadow-lg h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Alfred S. Reid Leadership Award</h3>
                      <p className="text-primary font-medium">Furman University, 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Named in honor of the late Alfred S. Reid, and awarded to students who have demonstrated outstanding
                    leadership qualities in service to campus or community or creative and performing arts.
                  </p>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2298.jpg-QEVu7NXHiL4fqfVWqaNFW4HbjkiXha.jpeg"
                      alt="Receiving Alfred S. Reid Leadership Award"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-beige-200 shadow-lg h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Emerging Leader Award: The Pioneer</h3>
                      <p className="text-primary font-medium">Furman University, 2023</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Recognized for making a profound impact on the Furman community, demonstrating outstanding
                    leadership skills, embracing challenges outside comfort zone, and actively pursuing new
                    opportunities.
                  </p>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2764.jpg-AFVQGrFHj7SF34XIrCbPEq6Ctv05ae.jpeg"
                      alt="Receiving Emerging Leader Award"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Completely Redesigned */}
        <section id="skills" className="py-12 bg-beige-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Skills</h2>
            <SkillsShowcase />
          </div>
        </section>

        <div className="mt-8 text-center">
          <Link href="/book">
            <Button className="bg-primary hover:bg-primary-dark text-white">Book a Consultation</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
