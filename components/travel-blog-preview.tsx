"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"

export function TravelBlogPreview() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    "All",
    "Asia",
    "Europe",
    "Americas",
    "Africa",
    "Oceania",
    "Budget Travel",
    "Luxury Travel",
    "Adventure",
    "Cultural",
    "Food",
  ]

  const blogPosts = [
    {
      title: "A Week in Bali: Temples, Rice Terraces, and Beach Sunsets",
      excerpt: "Explore the spiritual and natural beauty of Bali through my 7-day journey across the Island of Gods.",
      image: "/blog/bali-blog.png",
      date: "March 15, 2023",
      readTime: "8 min read",
      location: "Bali, Indonesia",
      categories: ["Asia", "Cultural", "Budget Travel"],
      slug: "week-in-bali",
    },
    {
      title: "Tokyo to Kyoto: Experiencing Japan's Modern and Traditional Sides",
      excerpt:
        "Contrast the futuristic cityscape of Tokyo with the ancient temples and gardens of Kyoto in this two-city journey.",
      image: "/blog/japan-blog.png",
      date: "November 5, 2022",
      readTime: "12 min read",
      location: "Japan",
      categories: ["Asia", "Cultural", "Food"],
      slug: "tokyo-to-kyoto",
    },
    {
      title: "Hiking the Inca Trail: My Journey to Machu Picchu",
      excerpt:
        "A detailed account of my four-day trek along the ancient Inca Trail to the magnificent citadel of Machu Picchu.",
      image: "/blog/peru-blog.png",
      date: "July 22, 2022",
      readTime: "15 min read",
      location: "Peru",
      categories: ["Americas", "Adventure", "Cultural"],
      slug: "inca-trail-machu-picchu",
    },
    {
      title: "Island Hopping in Greece: Santorini, Mykonos, and Beyond",
      excerpt:
        "Discover the charm of the Greek islands with their white-washed buildings, blue domes, and crystal-clear waters.",
      image: "/blog/greece-blog.png",
      date: "June 10, 2023",
      readTime: "10 min read",
      location: "Greece",
      categories: ["Europe", "Luxury Travel", "Food"],
      slug: "greek-island-hopping",
    },
    {
      title: "Safari Adventures in Tanzania: Witnessing the Great Migration",
      excerpt: "An unforgettable wildlife experience tracking the Great Migration across the Serengeti plains.",
      image: "/blog/tanzania-blog.png",
      date: "August 30, 2022",
      readTime: "11 min read",
      location: "Tanzania",
      categories: ["Africa", "Adventure", "Luxury Travel"],
      slug: "tanzania-safari",
    },
    {
      title: "Road Trip Through New Zealand's South Island",
      excerpt: "A two-week driving adventure exploring the breathtaking landscapes of New Zealand's South Island.",
      image: "/blog/new-zealand-blog.png",
      date: "February 5, 2023",
      readTime: "14 min read",
      location: "New Zealand",
      categories: ["Oceania", "Adventure", "Budget Travel"],
      slug: "new-zealand-road-trip",
    },
  ]

  const filteredPosts =
    selectedCategory && selectedCategory !== "All"
      ? blogPosts.filter((post) => post.categories.includes(selectedCategory))
      : blogPosts

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === "All" ? null : category)}
            className={`px-4 py-2 rounded-full text-sm font-light transition-colors ${
              (category === "All" && !selectedCategory) || selectedCategory === category
                ? "bg-primary text-white"
                : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-light tracking-wide">
          View All Blog Posts <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function BlogCard({ post }: { post: any }) {
  return (
    <Card className="overflow-hidden border-neutral-100 h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="font-light">{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span className="font-light">{post.readTime}</span>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <MapPin className="h-4 w-4 text-primary mr-1" />
          <span className="text-sm font-light text-primary">{post.location}</span>
        </div>
        <h3 className="text-xl font-heading mb-2 tracking-tight">{post.title}</h3>
        <p className="text-neutral-600 font-light mb-4 flex-grow">{post.excerpt}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.categories.map((category: string) => (
            <span key={category} className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-light">
              {category}
            </span>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <Button className="w-full bg-primary hover:bg-primary-600 text-white font-light tracking-wide">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
