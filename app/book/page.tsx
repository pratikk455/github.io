import { CalendarBooking } from "@/components/calendar-booking"

export default function BookingPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Book an Appointment</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 mb-8 text-center">
            Schedule a consultation to discuss your specific needs in data analytics, data science, US college
            applications, or internship assistance.
          </p>
          <CalendarBooking />
        </div>
      </div>
    </main>
  )
}
