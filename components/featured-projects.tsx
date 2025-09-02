import { getFeaturedProjects } from "@/app/actions/project-actions"
import { ProjectCard } from "./project-card"
import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export async function FeaturedProjects() {
  const { projects, error } = await getFeaturedProjects()

  if (error || projects.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-600 mb-10">Explore some of my recent data science and analytics projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image_url}
                demoLink={project.demo_link}
                codeLink={project.code_link}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
