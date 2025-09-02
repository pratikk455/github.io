"use server"

import { neon } from "@neondatabase/serverless"

// Define the response type
type ContactFormResponse = {
  success: boolean
  message: string
}

// Define the form data type
type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function submitContactForm(formData: FormData): Promise<ContactFormResponse> {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!name || !email || !subject || !message) {
      return {
        success: false,
        message: "All fields are required",
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Initialize Neon SQL client if database is configured
    if (process.env.DATABASE_URL) {
      const sql = neon(process.env.DATABASE_URL)
      
      // Insert data into the database
      await sql`
        INSERT INTO contact_submissions (name, email, subject, message)
        VALUES (${name}, ${email}, ${subject}, ${message})
      `
    }

    return {
      success: true,
      message: "Thank you for your message. I'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "There was an error submitting your message. Please try again later.",
    }
  }
}
