"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Video, MapPin, Play } from "lucide-react"

export function TravelGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [mediaType, setMediaType] = useState<"photos" | "videos" | "drone">("photos")

  const photos = [
    {
      src: "/travel/bali-rice-terraces.png",
      alt: "Bali Rice Terraces",
      location: "Tegallalang, Bali",
    },
    {
      src: "/travel/kyoto-temple.png",
      alt: "Kyoto Temple",
      location: "Kiyomizu-dera, Kyoto",
    },
    {
      src: "/travel/santorini-sunset.png",
      alt: "Santorini Sunset",
      location: "Oia, Santorini",
    },
    {
      src: "/travel/new-york-skyline.png",
      alt: "New York Skyline",
      location: "Manhattan, New York",
    },
    {
      src: "/travel/machu-picchu.png",
      alt: "Machu Picchu",
      location: "Cusco Region, Peru",
    },
    {
      src: "/travel/paris-eiffel.png",
      alt: "Eiffel Tower",
      location: "Paris, France",
    },
  ]

  const videos = [
    {
      thumbnail: "/travel/video-thailand.png",
      src: "/travel/thailand-beaches.mp4",
      alt: "Thailand Beaches",
      location: "Phi Phi Islands, Thailand",
    },
    {
      thumbnail: "/travel/video-iceland.png",
      src: "/travel/iceland-waterfalls.mp4",
      alt: "Iceland Waterfalls",
      location: "Skógafoss, Iceland",
    },
    {
      thumbnail: "/travel/video-morocco.png",
      src: "/travel/morocco-markets.mp4",
      alt: "Morocco Markets",
      location: "Marrakech, Morocco",
    },
  ]

  const droneShots = [
    {
      src: "/travel/drone-maldives.png",
      alt: "Maldives Aerial",
      location: "Maldives Islands",
    },
    {
      src: "/travel/drone-grand-canyon.png",
      alt: "Grand Canyon Aerial",
      location: "Grand Canyon, Arizona",
    },
    {
      src: "/travel/drone-great-barrier-reef.png",
      alt: "Great Barrier Reef Aerial",
      location: "Queensland, Australia",
    },
    {
      src: "/travel/drone-amazon.png",
      alt: "Amazon Rainforest Aerial",
      location: "Amazon, Brazil",
    },
  ]

  return (
    <div className="space-y-8">
      <Tabs defaultValue="photos" value={mediaType} onValueChange={(value) => setMediaType(value as any)}>
        <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="photos" className="font-light tracking-wide">
            <Camera className="h-4 w-4 mr-2" /> Photos
          </TabsTrigger>
          <TabsTrigger value="videos" className="font-light tracking-wide">
            <Video className="h-4 w-4 mr-2" /> Videos
          </TabsTrigger>
          <TabsTrigger value="drone" className="font-light tracking-wide">
            <Play className="h-4 w-4 mr-2" /> Drone Shots
          </TabsTrigger>
        </TabsList>

        <TabsContent value="photos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <GalleryItem
                key={index}
                src={photo.src}
                alt={photo.alt}
                location={photo.location}
                onClick={() => setSelectedImage(photo.src)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <VideoItem
                key={index}
                thumbnail={video.thumbnail}
                alt={video.alt}
                location={video.location}
                onClick={() => setSelectedVideo(video.src)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="drone">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {droneShots.map((drone, index) => (
              <GalleryItem
                key={index}
                src={drone.src}
                alt={drone.alt}
                location={drone.location}
                onClick={() => setSelectedImage(drone.src)}
                isDrone
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <div className="relative h-[80vh] w-full">
            {selectedImage && (
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Travel photo"
                fill
                className="object-contain"
                quality={95}
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Video Lightbox */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
          <div className="relative h-[80vh] w-full">
            {selectedVideo && <video src={selectedVideo} controls autoPlay className="w-full h-full object-contain" />}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function GalleryItem({
  src,
  alt,
  location,
  onClick,
  isDrone = false,
}: {
  src: string
  alt: string
  location: string
  onClick: () => void
  isDrone?: boolean
}) {
  return (
    <div className="relative rounded-xl overflow-hidden h-[300px] cursor-pointer group" onClick={onClick}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {isDrone && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-light">
          Drone Shot
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center text-white">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="font-light text-sm">{location}</span>
        </div>
        <h3 className="text-white font-heading text-lg tracking-tight">{alt}</h3>
      </div>
    </div>
  )
}

function VideoItem({
  thumbnail,
  alt,
  location,
  onClick,
}: {
  thumbnail: string
  alt: string
  location: string
  onClick: () => void
}) {
  return (
    <div className="relative rounded-xl overflow-hidden h-[250px] cursor-pointer group" onClick={onClick}>
      <Image
        src={thumbnail || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/30 rounded-full p-4 backdrop-blur-sm">
          <Play className="h-8 w-8 text-white" fill="white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="flex items-center text-white">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="font-light text-sm">{location}</span>
        </div>
        <h3 className="text-white font-heading text-lg tracking-tight">{alt}</h3>
      </div>
    </div>
  )
}
