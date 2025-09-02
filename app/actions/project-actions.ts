"use server"

import { neon } from "@neondatabase/serverless"
import { revalidatePath } from "next/cache"

const sql = neon(process.env.DATABASE_URL!)

export type Project = {
  id: number
  title: string
  description: string
  long_description?: string
  technologies: string[]
  image_url: string
  demo_link?: string
  code_link?: string
  featured: boolean
  created_at: string
  updated_at: string
}

export async function getProjects() {
  try {
    const projects = await sql<Project[]>`
      SELECT * FROM projects
      ORDER BY created_at DESC
    `
    return { projects, error: null }
  } catch (error) {
    console.error("Error fetching projects:", error)
    return { projects: [], error: "Failed to fetch projects" }
  }
}

export async function getFeaturedProjects() {
  try {
    const projects = await sql<Project[]>`
      SELECT * FROM projects
      WHERE featured = true
      ORDER BY created_at DESC
    `
    return { projects, error: null }
  } catch (error) {
    console.error("Error fetching featured projects:", error)
    return { projects: [], error: "Failed to fetch featured projects" }
  }
}

export async function getProjectById(id: number) {
  try {
    const [project] = await sql<Project[]>`
      SELECT * FROM projects
      WHERE id = ${id}
    `
    return { project, error: null }
  } catch (error) {
    console.error("Error fetching project:", error)
    return { project: null, error: "Failed to fetch project" }
  }
}

export async function createProject(formData: FormData) {
  try {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const long_description = (formData.get("long_description") as string) || null
    const technologies = (formData.get("technologies") as string).split(",").map((tech) => tech.trim())
    const image_url = formData.get("image_url") as string
    const demo_link = (formData.get("demo_link") as string) || null
    const code_link = (formData.get("code_link") as string) || null
    const featured = formData.get("featured") === "on"

    await sql`
      INSERT INTO projects (
        title, description, long_description, technologies, 
        image_url, demo_link, code_link, featured
      ) VALUES (
        ${title}, ${description}, ${long_description}, ${technologies}::text[], 
        ${image_url}, ${demo_link}, ${code_link}, ${featured}
      )
    `

    revalidatePath("/projects")
    revalidatePath("/")
    return { success: true, error: null }
  } catch (error) {
    console.error("Error creating project:", error)
    return { success: false, error: "Failed to create project" }
  }
}

export async function updateProject(id: number, formData: FormData) {
  try {
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const long_description = (formData.get("long_description") as string) || null
    const technologies = (formData.get("technologies") as string).split(",").map((tech) => tech.trim())
    const image_url = formData.get("image_url") as string
    const demo_link = (formData.get("demo_link") as string) || null
    const code_link = (formData.get("code_link") as string) || null
    const featured = formData.get("featured") === "on"

    await sql`
      UPDATE projects
      SET 
        title = ${title},
        description = ${description},
        long_description = ${long_description},
        technologies = ${technologies}::text[],
        image_url = ${image_url},
        demo_link = ${demo_link},
        code_link = ${code_link},
        featured = ${featured},
        updated_at = CURRENT_TIMESTAMP
      WHERE id = ${id}
    `

    revalidatePath("/projects")
    revalidatePath("/")
    return { success: true, error: null }
  } catch (error) {
    console.error("Error updating project:", error)
    return { success: false, error: "Failed to update project" }
  }
}

export async function deleteProject(id: number) {
  try {
    await sql`
      DELETE FROM projects
      WHERE id = ${id}
    `

    revalidatePath("/projects")
    revalidatePath("/")
    return { success: true, error: null }
  } catch (error) {
    console.error("Error deleting project:", error)
    return { success: false, error: "Failed to delete project" }
  }
}
