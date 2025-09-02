import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceDetailPageProps {
  serviceData: {
    title: string
    description: string
    icon: React.ReactNode
    features: {
      title: string
      description: string
      icon: React.ReactNode
    }[]
    process: {
      title: string
      description: string
    }[]
    caseStudies: {
      title: string
      description: string
    }[]
  }
}

export function ServiceDetailPage({ serviceData }: ServiceDetailPageProps) {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-beige-100 p-8 md:p-12 rounded-xl border border-beige-200 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="bg-white p-6 rounded-full shadow-md">{serviceData.icon}</div>
            </div>
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold mb-4 text-gray-800">{serviceData.title}</h1>
              <p className="text-gray-700 text-lg">{serviceData.description}</p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-beige-200 shadow-md flex items-start gap-4"
              >
                <div className="bg-beige-100 p-3 rounded-lg">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Our Process</h2>
          <div className="relative">
            {/* Process Timeline */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

            <div className="space-y-12">
              {serviceData.process.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary flex items-center justify-center z-10">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-xl border border-beige-200 shadow-md">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceData.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-beige-200 shadow-md">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{caseStudy.title}</h3>
                <p className="text-gray-700 mb-4">{caseStudy.description}</p>
                <Link href="#">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-beige-100 p-8 rounded-xl border border-beige-200 shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to Get Started?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how our {serviceData.title} services can help your business make better
            data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book">
              <Button className="bg-primary hover:bg-primary-dark text-white">Book a Consultation</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
