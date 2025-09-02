import { ProjectsShowcase } from "@/components/projects-showcase"

export const metadata = {
  title: "Projects | Pratik Shrestha",
  description: "Explore my portfolio of data science, analytics, and machine learning projects.",
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">My Projects</h1>
        <p className="text-gray-600 mb-12">
          Explore my portfolio of data science, analytics, and machine learning projects.
        </p>

        <ProjectsShowcase />
      </div>
    </div>
  )
}
