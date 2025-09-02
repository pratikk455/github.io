import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Outfit, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SocialMediaScript } from "@/components/social-media-script"

// Add this at the top of the file, after the imports
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Pratik Shrestha | Data Scientist & Quantitative Analyst",
  description:
    "Portfolio of Pratik Shrestha, a Data Scientist and Quantitative Analyst specializing in machine learning, data analytics, and financial modeling.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${playfair.variable} font-body min-h-screen bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          {children}
          <Footer />
          <SocialMediaScript />
        </ThemeProvider>
      </body>
    </html>
  )
}
