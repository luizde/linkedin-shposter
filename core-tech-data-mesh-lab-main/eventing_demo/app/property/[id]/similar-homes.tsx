"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FavoriteButton } from "@/components/ui/favorite-button"
import { Property, getSimilarHomes } from "@/lib/mock-data"

interface SimilarHomesProps {
  currentZpid: string;
}

export function SimilarHomes({ currentZpid }: SimilarHomesProps) {
  const [similarHomes, setSimilarHomes] = useState<Property[]>([])
  const [startIndex, setStartIndex] = useState(0)
  const homesPerPage = 3

  useEffect(() => {
    const fetchedHomes = getSimilarHomes(currentZpid)
    setSimilarHomes(fetchedHomes)
    setStartIndex(0)
  }, [currentZpid])

  const visibleHomes = similarHomes.slice(startIndex, startIndex + homesPerPage)

  const handlePrevious = () => {
    setStartIndex(Math.max(0, startIndex - 1))
  }

  const handleNext = () => {
    setStartIndex(Math.min(similarHomes.length - homesPerPage, startIndex + 1))
  }

  if (similarHomes.length === 0) {
    return (
      <div className="mt-12 py-8 text-center text-muted-foreground">
        No similar homes found.
      </div>
    )
  }

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Similar Homes</h2>
        {similarHomes.length > homesPerPage && (
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handlePrevious}
              disabled={startIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={handleNext}
              disabled={startIndex >= similarHomes.length - homesPerPage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleHomes.map((home) => (
          <Card key={home.id} className="overflow-hidden group">
            <div className="aspect-video relative bg-muted">
              <Link href={`/property/${home.id}`}>
                <Image
                  src={home.images[0]?.url || "/placeholder.svg"}
                  alt={home.images[0]?.alt || `Property ${home.id}`}
                  fill
                  className="object-cover"
                />
              </Link>
              <div className="absolute top-2 right-2 opacity-80 group-hover:opacity-100 transition-opacity">
                <FavoriteButton 
                  zpid={home.id} 
                  variant="outline" 
                  size="sm" 
                  className="bg-white/80 hover:bg-white"
                  propertyData={{
                    price: home.price,
                    bedrooms: home.bedrooms,
                    bathrooms: home.bathrooms,
                    squareFootage: home.squareFootage,
                    address: home.address,
                    yearBuilt: home.yearBuilt
                  }}
                />
              </div>
            </div>
            <CardContent className="p-4">
              <Link href={`/property/${home.id}`} className="block transition-transform hover:scale-[1.02]">
                <div className="font-semibold text-lg">{home.price}</div>
                <div className="text-sm text-muted-foreground">
                  {home.bedrooms} bd | {home.bathrooms} ba | {home.squareFootage} sqft
                </div>
                <div className="text-sm mt-1 truncate" title={home.address}>{home.address}</div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
