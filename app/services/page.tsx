import { ServicesWithSidebar } from "@/components/services-with-sidebar"

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-12 text-center text-gray-800">Services</h1>
        <ServicesWithSidebar />
      </div>
    </main>
  )
}
