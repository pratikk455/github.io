import { ProjectForm } from "@/components/admin/project-form"
import { getProjectById } from "@/app/actions/project-actions"
import { notFound } from "next/navigation"

interface EditProjectPageProps {
  params: {
    id: string
  }
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
  const projectId = Number.parseInt(params.id)
  const { project, error } = await getProjectById(projectId)

  if (error || !project) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Edit Project: {project.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ProjectForm project={project} isEditing={true} />
      </div>
    </div>
  )
}
