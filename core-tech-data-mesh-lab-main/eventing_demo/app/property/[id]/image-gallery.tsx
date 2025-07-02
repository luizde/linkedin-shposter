"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { PropertyImage } from "@/lib/mock-data"

import { Button } from "@/components/ui/button"

interface ImageGalleryProps {
  images: PropertyImage[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [showFullGallery, setShowFullGallery] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const propertyImages = images && images.length > 0 ? images : [{id: "placeholder", url: "/placeholder.svg?height=600&width=800&query=no+image+available", alt: "No image available"}];

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? propertyImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === propertyImages.length - 1 ? 0 : prev + 1))
  }

  const openGallery = (index: number) => {
    setCurrentImageIndex(index)
    setShowFullGallery(true)
  }

  if (!propertyImages || propertyImages.length === 0) {
    return <div className="text-center p-8 text-muted-foreground">No images available for this property.</div>;
  }

  return (
    <>
      {/* Preview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="aspect-[4/3] relative rounded-lg overflow-hidden cursor-pointer" onClick={() => openGallery(0)}>
          <Image
            src={propertyImages[0].url || "/placeholder.svg"}
            alt={propertyImages[0].alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
          />
          <div className="absolute bottom-4 right-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                openGallery(0)
              }}
            >
              View all {propertyImages.length} photos
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {propertyImages.slice(1, 5).map((image, index) => (
            <div
              key={image.id}
              className="aspect-square relative rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openGallery(index + 1)}
            >
              <Image
                src={image.url || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
          <div className="flex justify-between items-center p-4 text-white">
            <div className="text-sm">
              {currentImageIndex + 1} of {propertyImages.length}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setShowFullGallery(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 text-white hover:bg-white/20 rounded-full"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="relative h-[80vh] w-[80vw]">
              <Image
                src={propertyImages[currentImageIndex].url || "/placeholder.svg"}
                alt={propertyImages[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 text-white hover:bg-white/20 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          <div className="p-4 overflow-x-auto">
            <div className="flex space-x-2">
              {propertyImages.map((image, index) => (
                <div
                  key={image.id}
                  className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${
                    index === currentImageIndex ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image src={image.url || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
