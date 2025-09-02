"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, CreditCard, Map, ArrowRight } from "lucide-react"
import { CreditCardAdvice } from "@/components/credit-card-advice"
import { CountryTravelBlogs } from "@/components/country-travel-blogs"

export function TravelServicePage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null)

  const countries = [
    {
      name: "Nepal",
      image: "/travel/nepal-cover.png",
      description: "Himalayan adventures through breathtaking mountain treks and spiritual journeys.",
      destinations: ["Annapurna Base Camp Trek", "Tilicho Base Camp Trek", "Gosaikunda Lake Trek", "Pokhara"],
    },
    {
      name: "India",
      image: "/travel/india-cover.png",
      description: "Diverse experiences from beach paradises to mountain retreats and vibrant cities.",
      destinations: ["Goa", "Kolkata", "Ladakh"],
    },
    {
      name: "Bali",
      image: "/travel/bali-cover.png",
      description: "Tropical island paradise with lush rice terraces, spiritual temples, and pristine beaches.",
      destinations: [],
    },
    {
      name: "Scotland",
      image: "/travel/scotland-cover.png",
      description: "Rugged highlands, historic castles, and charming villages with rich cultural heritage.",
      destinations: [],
    },
    {
      name: "England",
      image: "/travel/england-cover.png",
      description: "Historic landmarks, picturesque countryside, and vibrant city experiences.",
      destinations: [],
    },
    {
      name: "United States",
      image: "/travel/usa-cover.png",
      description: "Diverse landscapes from national parks to bustling cities across multiple states.",
      destinations: [],
    },
  ]

  return (
    <main className="min-h-screen py-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden mb-12 h-[50vh] min-h-[400px]">
          <Image src="/travel-hero.png" alt="Travel adventures" fill className="object-cover" priority quality={90} />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="text-white p-8 md:p-12 max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-heading mb-4 tracking-tight">Travel Experiences</h1>
              <p className="text-lg font-light mb-6 text-white/90">
                Discover extraordinary destinations through my lens. I share detailed itineraries, travel insights,
                credit card strategies, and immersive visual content from my global adventures.
              </p>
              <Button className="bg-white text-black hover:bg-white/90 font-light tracking-wide">
                Explore My Journeys <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid grid-cols-3 w-full max-w-xl mx-auto mb-8">
            <TabsTrigger value="overview" className="font-light tracking-wide">
              Overview
            </TabsTrigger>
            <TabsTrigger value="destinations" className="font-light tracking-wide">
              Travel Blogs
            </TabsTrigger>
            <TabsTrigger value="credit-cards" className="font-light tracking-wide">
              Credit Card Advice
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-12">
            <section>
              <h2 className="text-3xl font-heading mb-8 text-center tracking-tight">Travel Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                  icon={<Plane className="h-8 w-8 text-primary" />}
                  title="Travel Planning"
                  description="Personalized itineraries tailored to your travel style, preferences, and budget."
                />
                <ServiceCard
                  icon={<CreditCard className="h-8 w-8 text-primary" />}
                  title="Credit Card Consultation"
                  description="Strategic advice on maximizing travel rewards, points, and benefits from credit cards."
                />
                <ServiceCard
                  icon={<Map className="h-8 w-8 text-primary" />}
                  title="Destination Guides"
                  description="In-depth guides to destinations I've personally explored, with insider tips and recommendations."
                />
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-heading mb-8 text-center tracking-tight">Featured Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {countries.slice(0, 3).map((country, index) => (
                  <CountryCard
                    key={index}
                    country={country}
                    onClick={() => {
                      setSelectedCountry(country.name)
                      setActiveTab("destinations")
                    }}
                  />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 font-light tracking-wide"
                  onClick={() => setActiveTab("destinations")}
                >
                  View All Destinations <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </section>

            <section className="bg-neutral-50 p-8 rounded-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-heading mb-4 tracking-tight">My Travel Philosophy</h2>
                  <p className="text-neutral-600 font-light mb-4">
                    I believe travel is more than just visiting new places—it's about immersing yourself in different
                    cultures, creating meaningful connections, and collecting experiences that transform your
                    perspective.
                  </p>
                  <p className="text-neutral-600 font-light mb-6">
                    Through my travel blogs, I aim to help others experience the world more deeply, more authentically,
                    and more efficiently by sharing my firsthand knowledge, detailed itineraries, and strategic approach
                    to travel planning.
                  </p>
                  <div className="flex gap-4">
                    <Button
                      className="bg-primary hover:bg-primary-600 text-white font-light tracking-wide"
                      onClick={() => setActiveTab("destinations")}
                    >
                      Read My Travel Stories
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 font-light tracking-wide"
                      onClick={() => setActiveTab("credit-cards")}
                    >
                      Travel Card Strategies
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2 relative h-[300px] w-full rounded-xl overflow-hidden">
                  <Image
                    src="/travel-philosophy.png"
                    alt="Travel philosophy"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
              </div>
            </section>
          </TabsContent>

          <TabsContent value="destinations">
            <CountryTravelBlogs countries={countries} selectedCountry={selectedCountry} />
          </TabsContent>

          <TabsContent value="credit-cards">
            <h2 className="text-3xl font-heading mb-8 text-center tracking-tight">Credit Card Strategies</h2>
            <CreditCardAdvice />
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <section className="bg-neutral-50 p-8 md:p-12 rounded-xl text-center">
          <h2 className="text-3xl font-heading mb-4 tracking-tight">Ready to Plan Your Next Adventure?</h2>
          <p className="text-neutral-600 font-light mb-6 max-w-2xl mx-auto">
            Contact me for personalized travel planning, credit card strategy consultations, or to discuss collaboration
            opportunities for travel content creation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/book">
              <Button className="bg-primary hover:bg-primary-600 text-white font-light tracking-wide">
                Book a Consultation
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-light tracking-wide"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="border-neutral-100">
      <CardContent className="p-6">
        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">{icon}</div>
        <h3 className="text-xl font-heading text-center mb-2 tracking-tight">{title}</h3>
        <p className="text-neutral-600 text-center font-light">{description}</p>
      </CardContent>
    </Card>
  )
}

function CountryCard({ country, onClick }: { country: any; onClick: () => void }) {
  return (
    <div className="group relative rounded-xl overflow-hidden h-[300px] cursor-pointer" onClick={onClick}>
      <Image
        src={country.image || "/placeholder.svg"}
        alt={country.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-xl font-heading text-white mb-2 tracking-tight">{country.name}</h3>
        <p className="text-white/80 font-light mb-4 text-sm">{country.description}</p>
        <Button variant="outline" className="border-white text-white hover:bg-white/20 font-light tracking-wide w-full">
          Explore <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
