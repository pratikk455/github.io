"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Calendar, MapPin, DollarSign, Utensils, Home, Play } from "lucide-react"

export function TravelItinerary({ destination }: { destination: string }) {
  const [activeTab, setActiveTab] = useState("itinerary")
  const [selectedMedia, setSelectedMedia] = useState<{ type: "image" | "video"; src: string; alt: string } | null>(null)

  // Sample itinerary data for Annapurna Base Camp Trek
  const annapurnaItinerary = [
    {
      day: 1,
      title: "Arrival in Kathmandu",
      description:
        "Arrive in Kathmandu, transfer to hotel. Explore Thamel area and prepare for the trek. Attend trek briefing.",
      accommodation: "Hotel in Kathmandu",
      meals: "Dinner",
      cost: "$80",
      photos: ["/travel/nepal/annapurna-day1-1.png", "/travel/nepal/annapurna-day1-2.png"],
      videos: [],
      mapLocation: "27.7172° N, 85.3240° E",
    },
    {
      day: 2,
      title: "Drive to Pokhara",
      description:
        "Scenic 7-hour drive from Kathmandu to Pokhara. Evening free to explore Lakeside area and Phewa Lake.",
      accommodation: "Hotel in Pokhara",
      meals: "Breakfast, Dinner",
      cost: "$90",
      photos: ["/travel/nepal/annapurna-day2-1.png", "/travel/nepal/annapurna-day2-2.png"],
      videos: ["/travel/nepal/pokhara-lakeside.mp4"],
      mapLocation: "28.2096° N, 83.9856° E",
    },
    {
      day: 3,
      title: "Drive to Nayapul and Trek to Tikhedhunga",
      description:
        "1-hour drive to Nayapul. Begin trek through villages and farmland to Tikhedhunga (1,540m). 4 hours of walking.",
      accommodation: "Teahouse in Tikhedhunga",
      meals: "Breakfast, Lunch, Dinner",
      cost: "$65",
      photos: ["/travel/nepal/annapurna-day3-1.png", "/travel/nepal/annapurna-day3-2.png"],
      videos: [],
      mapLocation: "28.3520° N, 83.7680° E",
    },
    {
      day: 4,
      title: "Trek to Ghorepani",
      description:
        "Challenging ascent up stone stairs to Ulleri, then through rhododendron forests to Ghorepani (2,860m). 6 hours of walking.",
      accommodation: "Teahouse in Ghorepani",
      meals: "Breakfast, Lunch, Dinner",
      cost: "$70",
      photos: ["/travel/nepal/annapurna-day4-1.png", "/travel/nepal/annapurna-day4-2.png"],
      videos: ["/travel/nepal/ghorepani-trek.mp4"],
      mapLocation: "28.4039° N, 83.7106° E",
    },
    {
      day: 5,
      title: "Poon Hill Sunrise and Trek to Tadapani",
      description:
        "Early morning hike to Poon Hill (3,210m) for sunrise. Trek to Tadapani (2,630m) through beautiful forests. 6 hours of walking.",
      accommodation: "Teahouse in Tadapani",
      meals: "Breakfast, Lunch, Dinner",
      cost: "$65",
      photos: [
        "/travel/nepal/annapurna-day5-1.png",
        "/travel/nepal/annapurna-day5-2.png",
        "/travel/nepal/annapurna-day5-3.png",
      ],
      videos: ["/travel/nepal/poon-hill-sunrise.mp4"],
      mapLocation: "28.3831° N, 83.7589° E",
    },
  ]

  // Sample itinerary data for Tilicho Base Camp Trek
  const tilichoItinerary = [
    {
      day: 1,
      title: "Arrival in Kathmandu",
      description:
        "Arrive in Kathmandu, transfer to hotel. Explore Thamel area and prepare for the trek. Attend trek briefing.",
      accommodation: "Hotel in Kathmandu",
      meals: "Dinner",
      cost: "$80",
      photos: ["/travel/nepal/tilicho-day1-1.png", "/travel/nepal/tilicho-day1-2.png"],
      videos: [],
      mapLocation: "27.7172° N, 85.3240° E",
    },
    {
      day: 2,
      title: "Drive to Besisahar",
      description: "7-8 hour drive from Kathmandu to Besisahar, the starting point of the Annapurna Circuit.",
      accommodation: "Guesthouse in Besisahar",
      meals: "Breakfast, Dinner",
      cost: "$70",
      photos: ["/travel/nepal/tilicho-day2-1.png", "/travel/nepal/tilicho-day2-2.png"],
      videos: [],
      mapLocation: "28.2326° N, 84.3752° E",
    },
  ]

  // Sample itinerary data for Gosaikunda Lake Trek
  const gosaikundaItinerary = [
    {
      day: 1,
      title: "Arrival in Kathmandu",
      description:
        "Arrive in Kathmandu, transfer to hotel. Explore Thamel area and prepare for the trek. Attend trek briefing.",
      accommodation: "Hotel in Kathmandu",
      meals: "Dinner",
      cost: "$80",
      photos: ["/travel/nepal/gosaikunda-day1-1.png", "/travel/nepal/gosaikunda-day1-2.png"],
      videos: [],
      mapLocation: "27.7172° N, 85.3240° E",
    },
    {
      day: 2,
      title: "Drive to Dhunche",
      description: "6-7 hour drive from Kathmandu to Dhunche (1,960m), the gateway to Langtang National Park.",
      accommodation: "Teahouse in Dhunche",
      meals: "Breakfast, Dinner",
      cost: "$65",
      photos: ["/travel/nepal/gosaikunda-day2-1.png", "/travel/nepal/gosaikunda-day2-2.png"],
      videos: [],
      mapLocation: "28.1103° N, 85.2965° E",
    },
  ]

  // Sample itinerary data for Pokhara
  const pokharaItinerary = [
    {
      day: 1,
      title: "Arrival in Pokhara",
      description:
        "Arrive in Pokhara by flight or drive from Kathmandu. Check into hotel and evening walk around Phewa Lake.",
      accommodation: "Hotel in Lakeside",
      meals: "Dinner",
      cost: "$90",
      photos: ["/travel/nepal/pokhara-day1-1.png", "/travel/nepal/pokhara-day1-2.png"],
      videos: ["/travel/nepal/pokhara-evening.mp4"],
      mapLocation: "28.2096° N, 83.9856° E",
    },
    {
      day: 2,
      title: "Sarangkot Sunrise and Lakeside Activities",
      description:
        "Early morning trip to Sarangkot for sunrise over the Himalayas. Afternoon boating on Phewa Lake and visit to Tal Barahi Temple.",
      accommodation: "Hotel in Lakeside",
      meals: "Breakfast",
      cost: "$75",
      photos: [
        "/travel/nepal/pokhara-day2-1.png",
        "/travel/nepal/pokhara-day2-2.png",
        "/travel/nepal/pokhara-day2-3.png",
      ],
      videos: ["/travel/nepal/sarangkot-sunrise.mp4"],
      mapLocation: "28.2438° N, 83.9845° E",
    },
  ]

  // Sample itinerary data for Goa
  const goaItinerary = [
    {
      day: 1,
      title: "Arrival in Goa",
      description: "Arrive at Goa International Airport. Transfer to hotel in North Goa. Evening at Baga Beach.",
      accommodation: "Beach Resort in North Goa",
      meals: "Dinner",
      cost: "$120",
      photos: ["/travel/india/goa-day1-1.png", "/travel/india/goa-day1-2.png"],
      videos: ["/travel/india/goa-beach-sunset.mp4"],
      mapLocation: "15.5491° N, 73.7539° E",
    },
    {
      day: 2,
      title: "North Goa Beach Hopping",
      description:
        "Visit Calangute, Anjuna, and Vagator beaches. Explore Anjuna Flea Market (if Wednesday). Evening at a beach shack with live music.",
      accommodation: "Beach Resort in North Goa",
      meals: "Breakfast",
      cost: "$80",
      photos: ["/travel/india/goa-day2-1.png", "/travel/india/goa-day2-2.png", "/travel/india/goa-day2-3.png"],
      videos: [],
      mapLocation: "15.5730° N, 73.7408° E",
    },
  ]

  // Sample itinerary data for Kolkata
  const kolkataItinerary = [
    {
      day: 1,
      title: "Arrival in Kolkata",
      description:
        "Arrive at Kolkata International Airport. Transfer to hotel. Evening visit to Park Street for dinner.",
      accommodation: "Hotel in Central Kolkata",
      meals: "Dinner",
      cost: "$90",
      photos: ["/travel/india/kolkata-day1-1.png", "/travel/india/kolkata-day1-2.png"],
      videos: [],
      mapLocation: "22.5726° N, 88.3639° E",
    },
    {
      day: 2,
      title: "Colonial Kolkata Tour",
      description:
        "Visit Victoria Memorial, St. Paul's Cathedral, and Maidan. Afternoon at Indian Museum. Evening boat ride on the Hooghly River.",
      accommodation: "Hotel in Central Kolkata",
      meals: "Breakfast",
      cost: "$70",
      photos: [
        "/travel/india/kolkata-day2-1.png",
        "/travel/india/kolkata-day2-2.png",
        "/travel/india/kolkata-day2-3.png",
      ],
      videos: ["/travel/india/kolkata-victoria-memorial.mp4"],
      mapLocation: "22.5448° N, 88.3426° E",
    },
  ]

  // Sample itinerary data for Ladakh
  const ladakhItinerary = [
    {
      day: 1,
      title: "Arrival in Leh",
      description:
        "Arrive at Leh Airport. Transfer to hotel. Rest and acclimatize to the high altitude (3,500m). Short walk around Leh Market in the evening.",
      accommodation: "Hotel in Leh",
      meals: "Dinner",
      cost: "$100",
      photos: ["/travel/india/ladakh-day1-1.png", "/travel/india/ladakh-day1-2.png"],
      videos: [],
      mapLocation: "34.1526° N, 77.5770° E",
    },
    {
      day: 2,
      title: "Leh Acclimatization and Monasteries",
      description:
        "Visit Shanti Stupa, Leh Palace, and Namgyal Tsemo Monastery. Explore the old town of Leh. Continue acclimatization.",
      accommodation: "Hotel in Leh",
      meals: "Breakfast",
      cost: "$85",
      photos: ["/travel/india/ladakh-day2-1.png", "/travel/india/ladakh-day2-2.png", "/travel/india/ladakh-day2-3.png"],
      videos: ["/travel/india/ladakh-shanti-stupa.mp4"],
      mapLocation: "34.1642° N, 77.5848° E",
    },
  ]

  // Get itinerary based on destination
  const getItinerary = () => {
    switch (destination) {
      case "Annapurna Base Camp Trek":
        return annapurnaItinerary
      case "Tilicho Base Camp Trek":
        return tilichoItinerary
      case "Gosaikunda Lake Trek":
        return gosaikundaItinerary
      case "Pokhara":
        return pokharaItinerary
      case "Goa":
        return goaItinerary
      case "Kolkata":
        return kolkataItinerary
      case "Ladakh":
        return ladakhItinerary
      default:
        return []
    }
  }

  const itinerary = getItinerary()

  return (
    <div className="space-y-6">
      <Tabs defaultValue="itinerary" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-4">
          <TabsTrigger value="itinerary" className="font-light tracking-wide">
            <Calendar className="h-4 w-4 mr-2" /> Itinerary
          </TabsTrigger>
          <TabsTrigger value="photos" className="font-light tracking-wide">
            Photos
          </TabsTrigger>
          <TabsTrigger value="map" className="font-light tracking-wide">
            <MapPin className="h-4 w-4 mr-2" /> Map
          </TabsTrigger>
        </TabsList>

        <TabsContent value="itinerary">
          <div className="space-y-4">
            {itinerary.map((day) => (
              <Card key={day.day} className="border-neutral-100">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="font-heading text-primary">D{day.day}</span>
                    </div>
                    <div className="space-y-3 w-full">
                      <div>
                        <h4 className="font-heading text-lg">{day.title}</h4>
                        <p className="text-neutral-600 font-light text-sm">{day.description}</p>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                        <div className="flex items-center">
                          <Home className="h-4 w-4 text-primary mr-1" />
                          <span className="text-neutral-600 font-light">{day.accommodation}</span>
                        </div>
                        <div className="flex items-center">
                          <Utensils className="h-4 w-4 text-primary mr-1" />
                          <span className="text-neutral-600 font-light">{day.meals}</span>
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-primary mr-1" />
                          <span className="text-neutral-600 font-light">{day.cost}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary mr-1" />
                          <span className="text-neutral-600 font-light">{day.mapLocation}</span>
                        </div>
                      </div>

                      {(day.photos.length > 0 || day.videos.length > 0) && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {day.photos.slice(0, 3).map((photo, index) => (
                            <div
                              key={index}
                              className="relative h-16 w-16 rounded-md overflow-hidden cursor-pointer"
                              onClick={() =>
                                setSelectedMedia({
                                  type: "image",
                                  src: photo,
                                  alt: `Day ${day.day} - Photo ${index + 1}`,
                                })
                              }
                            >
                              <Image
                                src={photo || "/placeholder.svg"}
                                alt={`Day ${day.day}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                          {day.videos.map((video, index) => (
                            <div
                              key={`video-${index}`}
                              className="relative h-16 w-16 rounded-md overflow-hidden cursor-pointer bg-black"
                              onClick={() =>
                                setSelectedMedia({
                                  type: "video",
                                  src: video,
                                  alt: `Day ${day.day} - Video ${index + 1}`,
                                })
                              }
                            >
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Play className="h-6 w-6 text-white" />
                              </div>
                            </div>
                          ))}
                          {day.photos.length + day.videos.length > 3 && (
                            <div
                              className="relative h-16 w-16 rounded-md overflow-hidden cursor-pointer bg-neutral-100 flex items-center justify-center"
                              onClick={() => setActiveTab("photos")}
                            >
                              <span className="text-neutral-600 font-light">
                                +{day.photos.length + day.videos.length - 3}
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="photos">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {itinerary.flatMap((day) =>
              day.photos.map((photo, photoIndex) => (
                <div
                  key={`day${day.day}-photo${photoIndex}`}
                  className="relative h-40 rounded-md overflow-hidden cursor-pointer group"
                  onClick={() =>
                    setSelectedMedia({ type: "image", src: photo, alt: `Day ${day.day} - Photo ${photoIndex + 1}` })
                  }
                >
                  <Image src={photo || "/placeholder.svg"} alt={`Day ${day.day}`} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-light">Day {day.day}</span>
                  </div>
                </div>
              )),
            )}
            {itinerary.flatMap((day) =>
              day.videos.map((video, videoIndex) => (
                <div
                  key={`day${day.day}-video${videoIndex}`}
                  className="relative h-40 rounded-md overflow-hidden cursor-pointer group bg-black"
                  onClick={() =>
                    setSelectedMedia({
                      type: "video",
                      src: video,
                      alt: `Day ${day.day} - Video ${videoIndex + 1}`,
                    })
                  }
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-12 w-12 text-white" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-light">Day {day.day} - Video</span>
                    </div>
                  </div>
                </div>
              )),
            )}
          </div>
        </TabsContent>

        <TabsContent value="map">
          <div className="bg-neutral-50 p-4 rounded-xl h-[400px] flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-heading text-lg mb-2">Interactive Map</h4>
              <p className="text-neutral-600 font-light">
                Interactive map with route and points of interest coming soon!
              </p>
              <p className="text-neutral-600 font-light mt-2">
                <span className="font-medium">Starting Point:</span>{" "}
                {itinerary.length > 0 ? itinerary[0].mapLocation : "N/A"}
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Media Lightbox */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <div className="relative h-[80vh] w-full">
            {selectedMedia?.type === "image" && (
              <Image
                src={selectedMedia.src || "/placeholder.svg"}
                alt={selectedMedia.alt}
                fill
                className="object-contain"
                quality={95}
              />
            )}
            {selectedMedia?.type === "video" && (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
                title={selectedMedia.alt}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
