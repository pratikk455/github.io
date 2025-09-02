import { getProjects } from "@/app/actions/project-actions"
import { ProjectCard } from "./project-card"

export async function ProjectsShowcase() {
  const { projects, error } = await getProjects()

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading projects: {error}</p>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No projects found. Add some projects in the admin area!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          image={project.image_url}
          demoLink={project.demo_link || undefined}
          codeLink={project.code_link || undefined}
        />
      ))}
    </div>
  )
}
