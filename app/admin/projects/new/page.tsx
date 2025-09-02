import { ProjectForm } from "@/components/admin/project-form"

export default function NewProjectPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Add New Project</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <ProjectForm />
      </div>
    </div>
  )
}
