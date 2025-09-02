import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  image: string
  demoLink?: string
  codeLink?: string
}

export function ProjectCard({ title, description, technologies, image, demoLink, codeLink }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg?height=192&width=384&query=project"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {demoLink && (
            <Button size="sm" className="flex-1">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Button>
          )}
          {codeLink && (
            <Button size="sm" variant="outline" className="flex-1">
              <Github className="mr-2 h-4 w-4" /> Code
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
