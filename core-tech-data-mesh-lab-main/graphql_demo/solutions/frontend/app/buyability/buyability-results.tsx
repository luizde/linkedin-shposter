"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Heart, Filter, Grid3X3, MapIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PropertyMap } from "./property-map"

const buyabilityHomes = [
  {
    id: 101,
    price: 349000,
    beds: 3,
    baths: 2,
    sqft: 1450,
    address: "123 Oak St",
    city: "San Francisco",
    state: "CA",
    zip: "94105",
    lat: 37.7749,
    lng: -122.4194,
    image: "/placeholder.svg?height=200&width=400&query=modern house with orange door",
  },
  {
    id: 102,
    price: 375000,
    beds: 3,
    baths: 2.5,
    sqft: 1650,
    address: "456 Maple Ave",
    city: "San Francisco",
    state: "CA",
    zip: "94103",
    lat: 37.7849,
    lng: -122.4294,
    image: "/placeholder.svg?height=200&width=400&query=craftsman style house",
  },
  {
    id: 103,
    price: 329000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    address: "789 Pine Ln",
    city: "San Francisco",
    state: "CA",
    zip: "94108",
    lat: 37.7649,
    lng: -122.4094,
    image: "/placeholder.svg?height=200&width=400&query=small modern house",
  },
  {
    id: 104,
    price: 399000,
    beds: 4,
    baths: 2,
    sqft: 1800,
    address: "101 Cedar Rd",
    city: "San Francisco",
    state: "CA",
    zip: "94109",
    lat: 37.7549,
    lng: -122.4394,
    image: "/placeholder.svg?height=200&width=400&query=two story suburban house",
  },
  {
    id: 105,
    price: 365000,
    beds: 3,
    baths: 2,
    sqft: 1550,
    address: "202 Birch Blvd",
    city: "San Francisco",
    state: "CA",
    zip: "94110",
    lat: 37.7949,
    lng: -122.4494,
    image: "/placeholder.svg?height=200&width=400&query=ranch style house",
  },
  {
    id: 106,
    price: 385000,
    beds: 3,
    baths: 2.5,
    sqft: 1700,
    address: "303 Elm St",
    city: "San Francisco",
    state: "CA",
    zip: "94111",
    lat: 37.7349,
    lng: -122.4594,
    image: "/placeholder.svg?height=200&width=400&query=contemporary house design",
  },
]

export function BuyAbilityResults() {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid")

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
      value,
    )
  }

  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">{buyabilityHomes.length} homes match your BuyAbility™ criteria</h2>
            <p className="text-sm text-muted-foreground">Homes you can afford up to $400,000</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={viewMode === "grid" ? "bg-muted" : ""}
              onClick={() => setViewMode("grid")}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={viewMode === "map" ? "bg-muted" : ""}
              onClick={() => setViewMode("map")}
            >
              <MapIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buyabilityHomes.map((home) => (
            <Link key={home.id} href={`/property/${home.id}`} className="block transition-transform hover:scale-[1.02]">
              <Card className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600 text-white">
                    Within BuyAbility
                  </Badge>
                  <Image
                    src={home.image || "/placeholder.svg"}
                    alt={`Property ${home.id}`}
                    fill
                    className="object-cover"
                  />
                  <Button variant="ghost" size="icon" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="font-semibold text-lg">{formatCurrency(home.price)}</div>
                  <div className="text-sm text-muted-foreground">
                    {home.beds} bd | {home.baths} ba | {home.sqft.toLocaleString()} sqft
                  </div>
                  <div className="text-sm mt-1 flex items-center">
                    <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                    {home.address}, {home.city}, {home.state} {home.zip}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <PropertyMap properties={buyabilityHomes} />
      )}
    </div>
  )
}
