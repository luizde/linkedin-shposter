"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FavoriteButton } from "@/components/ui/favorite-button"
import { useFavorites } from "@/lib/hooks/use-favorites"
import { Property, getPropertyById } from "@/lib/mock-data"

export default function FavoritesPage() {
  const { favorites } = useFavorites()
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 12
  
  useEffect(() => {
    // Get all favorited properties
    const properties = favorites
      .map(id => getPropertyById(id))
      .filter((property): property is Property => property !== undefined)
    
    setFavoriteProperties(properties)
    setCurrentPage(1) // Reset to first page when favorites change
  }, [favorites])
  
  // Calculate pagination
  const totalPages = Math.ceil(favoriteProperties.length / propertiesPerPage)
  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = favoriteProperties.slice(indexOfFirstProperty, indexOfLastProperty)
  
  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(1, prev - 1))
  }
  
  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages, prev + 1))
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <Link href="/" className="inline-flex items-center text-sm font-medium mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to search
        </Link>
        
        <div className="flex items-center mb-8 space-x-2">
          <Heart className="text-red-500 h-6 w-6" />
          <h1 className="text-2xl font-bold">Your Favorite Properties</h1>
          <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded-full text-sm text-gray-600">
            {favoriteProperties.length}
          </span>
        </div>
        
        {favoriteProperties.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-medium mb-2">No favorites yet</h2>
            <p className="text-muted-foreground mb-6">
              You haven't added any properties to your favorites list.
            </p>
            <Button asChild>
              <Link href="/">Browse Properties</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden group h-full">
                  <div className="aspect-video relative bg-muted">
                    <Link href={`/property/${property.id}`}>
                      <Image
                        src={property.images[0]?.url || "/placeholder.svg"}
                        alt={property.images[0]?.alt || `Property ${property.id}`}
                        fill
                        className="object-cover"
                      />
                    </Link>
                    <div className="absolute top-2 right-2">
                      <FavoriteButton 
                        zpid={property.id} 
                        variant="outline" 
                        size="sm" 
                        className="bg-white/80 hover:bg-white"
                        propertyData={{
                          price: property.price,
                          bedrooms: property.bedrooms,
                          bathrooms: property.bathrooms,
                          squareFootage: property.squareFootage,
                          address: property.address,
                          yearBuilt: property.yearBuilt
                        }}
                      />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Link href={`/property/${property.id}`}>
                      <div className="font-semibold text-lg">{property.price}</div>
                      <div className="text-sm text-muted-foreground">
                        {property.bedrooms} bd | {property.bathrooms} ba | {property.squareFootage} sqft
                      </div>
                      <div className="text-sm mt-1 truncate" title={property.address}>
                        {property.address}
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full" 
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full" 
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
} 