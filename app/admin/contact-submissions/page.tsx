import { neon } from "@neondatabase/serverless"

// Define the submission type
type ContactSubmission = {
  id: number
  name: string
  email: string
  subject: string
  message: string
  created_at: string
}

export default async function ContactSubmissionsPage() {
  // Initialize Neon SQL client
  if (!process.env.DATABASE_URL) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Contact Form Submissions</h1>
        <div className="bg-white p-6 rounded-xl border border-beige-200 shadow-lg text-center">
          <p className="text-gray-600">Database not configured.</p>
        </div>
      </div>
    )
  }
  
  const sql = neon(process.env.DATABASE_URL)

  // Fetch submissions from the database
  const submissions = await sql<ContactSubmission[]>`
    SELECT * FROM contact_submissions 
    ORDER BY created_at DESC
  `

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Contact Form Submissions</h1>

      {submissions.length === 0 ? (
        <div className="bg-white p-6 rounded-xl border border-beige-200 shadow-lg text-center">
          <p className="text-gray-600">No submissions yet.</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {submissions.map((submission) => (
            <div key={submission.id} className="bg-white p-6 rounded-xl border border-beige-200 shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{submission.name}</h2>
                  <p className="text-gray-600">{submission.email}</p>
                </div>
                <span className="text-sm text-gray-500">{new Date(submission.created_at).toLocaleString()}</span>
              </div>
              <h3 className="font-medium mb-2">{submission.subject}</h3>
              <p className="text-gray-700 whitespace-pre-wrap">{submission.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
