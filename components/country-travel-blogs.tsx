"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin, DollarSign, Clock, ChevronDown, ChevronUp } from "lucide-react"
import { TravelItinerary } from "@/components/travel-itinerary"

export function CountryTravelBlogs({
  countries,
  selectedCountry,
}: { countries: any[]; selectedCountry: string | null }) {
  const [activeCountry, setActiveCountry] = useState<string>(selectedCountry || countries[0].name)
  const [expandedDestination, setExpandedDestination] = useState<string | null>(null)

  // Find the active country object
  const currentCountry = countries.find((country) => country.name === activeCountry) || countries[0]

  // Nepal destinations data
  const nepalDestinations = [
    {
      name: "Annapurna Base Camp Trek",
      image: "/travel/nepal-annapurna.png",
      duration: "12 days",
      cost: "$1,200 - $1,500",
      difficulty: "Moderate",
      bestTime: "October-November, March-April",
      mapLocation: "28.5308° N, 83.8780° E",
      description:
        "A breathtaking trek through diverse landscapes, from lush forests to high-altitude alpine terrain, culminating at the amphitheater-like Annapurna Base Camp surrounded by towering Himalayan peaks.",
      highlights: [
        "Panoramic views of Annapurna I (8,091m)",
        "Diverse ecosystems and landscapes",
        "Cultural experiences in mountain villages",
        "Hot springs at Jhinu Danda",
        "Sunrise at Poon Hill viewpoint",
      ],
    },
    {
      name: "Tilicho Base Camp Trek",
      image: "/travel/nepal-tilicho.png",
      duration: "14 days",
      cost: "$1,400 - $1,800",
      difficulty: "Challenging",
      bestTime: "September-October, April-May",
      mapLocation: "28.6917° N, 83.8556° E",
      description:
        "An adventurous trek to Tilicho Lake, one of the highest lakes in the world at 4,919 meters. This challenging route offers spectacular mountain views and a sense of true wilderness.",
      highlights: [
        "Tilicho Lake at 4,919 meters",
        "Crossing the challenging Mesokanto La Pass",
        "Remote mountain villages",
        "Views of Annapurna and Dhaulagiri ranges",
        "Less crowded than other popular treks",
      ],
    },
    {
      name: "Gosaikunda Lake Trek",
      image: "/travel/nepal-gosaikunda.png",
      duration: "7 days",
      cost: "$800 - $1,100",
      difficulty: "Moderate",
      bestTime: "March-May, September-November",
      mapLocation: "28.0833° N, 85.4167° E",
      description:
        "A spiritually significant trek to the sacred Gosaikunda Lake at 4,380 meters. This journey combines natural beauty with cultural and religious significance in the Langtang region.",
      highlights: [
        "Sacred Gosaikunda Lake at 4,380 meters",
        "Panoramic views of Langtang and Ganesh Himal",
        "Rich biodiversity in Langtang National Park",
        "Cultural experiences in Tamang villages",
        "Hindu and Buddhist religious sites",
      ],
    },
    {
      name: "Pokhara",
      image: "/travel/nepal-pokhara.png",
      duration: "3-5 days",
      cost: "$300 - $600",
      difficulty: "Easy",
      bestTime: "Year-round (October-April ideal)",
      mapLocation: "28.2096° N, 83.9856° E",
      description:
        "A serene lakeside city nestled beneath the Annapurna range, offering a perfect blend of natural beauty, adventure activities, and relaxation. Pokhara serves as both a gateway to treks and a destination in its own right.",
      highlights: [
        "Boating on Phewa Lake",
        "Sunrise views from Sarangkot",
        "Paragliding with mountain views",
        "World Peace Pagoda",
        "Davis Falls and Gupteshwor Cave",
        "International Mountain Museum",
      ],
    },
  ]

  // India destinations data
  const indiaDestinations = [
    {
      name: "Goa",
      image: "/travel/india-goa.png",
      duration: "5-7 days",
      cost: "$500 - $1,000",
      difficulty: "Easy",
      bestTime: "November-February",
      mapLocation: "15.2993° N, 74.1240° E",
      description:
        "A coastal paradise known for its beautiful beaches, vibrant nightlife, and Portuguese-influenced architecture. Goa offers the perfect blend of relaxation, adventure, and cultural experiences.",
      highlights: [
        "Pristine beaches like Palolem and Agonda",
        "Portuguese colonial architecture in Old Goa",
        "Vibrant markets and delicious seafood",
        "Water sports and dolphin watching",
        "Spice plantations and wildlife sanctuaries",
      ],
    },
    {
      name: "Kolkata",
      image: "/travel/india-kolkata.png",
      duration: "4-5 days",
      cost: "$400 - $700",
      difficulty: "Easy",
      bestTime: "October-March",
      mapLocation: "22.5726° N, 88.3639° E",
      description:
        "The cultural capital of India, Kolkata is a city of intellectual heritage, colonial architecture, and artistic traditions. Experience the unique blend of old-world charm and modern energy in this vibrant metropolis.",
      highlights: [
        "Victoria Memorial and Howrah Bridge",
        "Traditional Bengali cuisine",
        "Kumartuli artisan quarter",
        "Tram rides through historic streets",
        "College Street book market",
        "Durga Puja celebrations (if visiting in autumn)",
      ],
    },
    {
      name: "Ladakh",
      image: "/travel/india-ladakh.png",
      duration: "7-10 days",
      cost: "$800 - $1,500",
      difficulty: "Moderate to Challenging",
      bestTime: "June-September",
      mapLocation: "34.1526° N, 77.5770° E",
      description:
        "A high-altitude desert landscape with dramatic mountains, Buddhist monasteries, and pristine lakes. Ladakh offers breathtaking scenery and unique cultural experiences in the northernmost region of India.",
      highlights: [
        "Pangong Lake's changing blue hues",
        "Ancient monasteries like Thiksey and Hemis",
        "Magnetic Hill and Khardung La Pass",
        "Nubra Valley and sand dunes",
        "Leh Palace and local Ladakhi cuisine",
        "River rafting on the Zanskar",
      ],
    },
  ]

  // Get destinations based on active country
  const getDestinations = () => {
    switch (activeCountry) {
      case "Nepal":
        return nepalDestinations
      case "India":
        return indiaDestinations
      default:
        return []
    }
  }

  const destinations = getDestinations()

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-heading mb-4 text-center tracking-tight">Travel Blogs & Itineraries</h2>
      <p className="text-neutral-600 font-light text-center max-w-3xl mx-auto mb-8">
        Explore my detailed travel blogs with comprehensive itineraries, including costs, maps, photos, videos, and
        insider tips from my personal experiences around the world.
      </p>

      <Tabs defaultValue={activeCountry} value={activeCountry} onValueChange={setActiveCountry} className="space-y-8">
        <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto p-0">
          {countries.map((country) => (
            <TabsTrigger
              key={country.name}
              value={country.name}
              className="px-4 py-2 rounded-full data-[state=active]:bg-primary data-[state=active]:text-white font-light tracking-wide"
            >
              {country.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {countries.map((country) => (
          <TabsContent key={country.name} value={country.name}>
            <div className="mb-8">
              <div className="relative h-[40vh] min-h-[300px] rounded-xl overflow-hidden mb-6">
                <Image
                  src={country.image || "/placeholder.svg"}
                  alt={country.name}
                  fill
                  className="object-cover"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-heading text-white mb-2 tracking-tight">{country.name}</h3>
                  <p className="text-white/90 font-light max-w-2xl">{country.description}</p>
                </div>
              </div>

              {country.destinations && country.destinations.length > 0 ? (
                <div className="space-y-6">
                  {destinations.map((destination) => (
                    <DestinationCard
                      key={destination.name}
                      destination={destination}
                      isExpanded={expandedDestination === destination.name}
                      onToggle={() =>
                        setExpandedDestination(expandedDestination === destination.name ? null : destination.name)
                      }
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-neutral-50 p-8 rounded-xl text-center">
                  <p className="text-neutral-600 font-light mb-4">
                    Detailed itineraries for {country.name} are coming soon!
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Request {country.name} Itinerary
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function DestinationCard({
  destination,
  isExpanded,
  onToggle,
}: {
  destination: any
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <Card className="border-neutral-100 overflow-hidden">
      <div className="relative h-[250px]">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-2xl font-heading text-white mb-2 tracking-tight">{destination.name}</h3>
          <div className="flex flex-wrap gap-4 text-white/90 text-sm">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{destination.duration}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>{destination.cost}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{destination.mapLocation}</span>
            </div>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-neutral-500 font-light">
              <span className="font-medium text-neutral-700">Best Time:</span> {destination.bestTime}
            </p>
            <p className="text-sm text-neutral-500 font-light">
              <span className="font-medium text-neutral-700">Difficulty:</span> {destination.difficulty}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary hover:bg-primary/10"
            onClick={onToggle}
            aria-expanded={isExpanded}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" /> Less Details
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" /> More Details
              </>
            )}
          </Button>
        </div>

        <p className="text-neutral-600 font-light mb-4">{destination.description}</p>

        {isExpanded && (
          <div className="space-y-6 mt-6 pt-6 border-t border-neutral-100">
            <div>
              <h4 className="font-heading text-lg mb-3">Highlights</h4>
              <ul className="space-y-1">
                {destination.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-neutral-600 font-light">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <TravelItinerary destination={destination.name} />

            <div className="flex justify-center">
              <Button className="bg-primary hover:bg-primary-600 text-white font-light tracking-wide">
                View Full Itinerary <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
