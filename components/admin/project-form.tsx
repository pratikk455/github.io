"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { createProject, updateProject, type Project } from "@/app/actions/project-actions"
import { ImagePlus } from "lucide-react"

interface ProjectFormProps {
  project?: Project
  isEditing?: boolean
}

export function ProjectForm({ project, isEditing = false }: ProjectFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(project?.image_url || null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)

      if (isEditing && project) {
        const result = await updateProject(project.id, formData)
        if (result.error) {
          setError(result.error)
        } else {
          router.push("/admin/projects")
          router.refresh()
        }
      } else {
        const result = await createProject(formData)
        if (result.error) {
          setError(result.error)
        } else {
          router.push("/admin/projects")
          router.refresh()
        }
      }
    } catch (err) {
      setError("An unexpected error occurred")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}

      <div className="space-y-2">
        <Label htmlFor="title">Project Title</Label>
        <Input id="title" name="title" defaultValue={project?.title || ""} required placeholder="Enter project title" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Short Description</Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={project?.description || ""}
          required
          placeholder="Brief description of your project"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="longDescription">Detailed Description (Optional)</Label>
        <Textarea
          id="longDescription"
          name="longDescription"
          defaultValue={project?.long_description || ""}
          placeholder="Detailed description of your project"
          rows={6}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="technologies">Technologies (comma-separated)</Label>
        <Input
          id="technologies"
          name="technologies"
          defaultValue={project?.technologies.join(", ") || ""}
          required
          placeholder="React, TypeScript, Tailwind CSS"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image">Project Image</Label>
        <div className="flex items-center space-x-4">
          <div className="relative h-32 w-48 bg-gray-100 rounded overflow-hidden">
            {imagePreview ? (
              <Image src={imagePreview || "/placeholder.svg"} alt="Project preview" fill className="object-cover" />
            ) : (
              <div className="flex items-center justify-center h-full w-full text-gray-400">
                <ImagePlus size={24} />
              </div>
            )}
          </div>
          <div>
            <Input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
              required={!isEditing}
            />
            <p className="text-xs text-gray-500 mt-1">
              {isEditing ? "Upload a new image or keep the existing one" : "Upload an image for your project"}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="demoLink">Demo Link (Optional)</Label>
        <Input
          id="demoLink"
          name="demoLink"
          defaultValue={project?.demo_link || ""}
          placeholder="https://your-demo-link.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="codeLink">Code Link (Optional)</Label>
        <Input
          id="codeLink"
          name="codeLink"
          defaultValue={project?.code_link || ""}
          placeholder="https://github.com/yourusername/your-repo"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="featured" name="featured" defaultChecked={project?.featured || false} />
        <Label htmlFor="featured" className="cursor-pointer">
          Feature this project on the homepage
        </Label>
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={() => router.push("/admin/projects")} disabled={isSubmitting}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : isEditing ? "Update Project" : "Create Project"}
        </Button>
      </div>
    </form>
  )
}
