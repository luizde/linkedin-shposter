"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Heart, ArrowLeft, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FavoriteButton } from "@/components/ui/favorite-button"
import { useFavorites } from "@/lib/hooks/use-favorites"
import { Property, getPropertyById } from "@/lib/mock-data"
import { useQuery } from "@apollo/client"
import { GET_RECOMMENDED_PROPERTIES } from "@/lib/queries"
import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "@/lib/apollo-client"

function PropertyCard({ property }: { property: Property }) {
  const formattedPrice = property.price.startsWith('$') 
    ? property.price 
    : `$${Number(property.price).toLocaleString()}`

  const isRecommended = property.id.startsWith('rec-')

  return (
    <Card className="overflow-hidden group h-full">
      <div className="aspect-video relative bg-muted">
        <Link href={`/property/${property.id}`}>
          <Image
            src={property?.images?.[0]?.url || "/placeholder.svg"}
            alt={property?.images?.[0]?.alt || `Property ${property.id}`}
            fill
            className="object-cover"
          />
        </Link>
        {!isRecommended && (
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
        )}
      </div>
      <CardContent className="p-4">
        <Link href={`/property/${property.id}`}>
          <div className="font-semibold text-lg">{formattedPrice}</div>
          <div className="text-sm text-muted-foreground">
            {property.bedrooms} bd | {property.bathrooms} ba | {property.squareFootage} sqft
          </div>
          <div className="text-sm mt-1 truncate" title={property.address}>
            {property.address}
          </div>
        </Link>
      </CardContent>
    </Card>
  )
}

function FavoritesContent() {
  const { favorites } = useFavorites()
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [showRecommended, setShowRecommended] = useState(false)
  const [userId, setUserId] = useState<number | null>(null)
  const propertiesPerPage = 12

  useEffect(() => {
    setUserId(Math.floor(Math.random() * 100) + 1)
    
    const properties = favorites
      .map(id => getPropertyById(id))
      .filter((property): property is Property => property !== undefined)
    
    setFavoriteProperties(properties)
    setCurrentPage(1)
  }, [favorites])
  
  const { data: recommendedData, loading: recommendedLoading } = useQuery(GET_RECOMMENDED_PROPERTIES, {
    variables: { userId },
    skip: !showRecommended || userId === null
  })

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
                <PropertyCard 
                  key={`favorite-${property.id}`} 
                  property={property} 
                />
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

            <div className="mt-12 border-t pt-8">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                onClick={() => setShowRecommended(!showRecommended)}
              >
                {showRecommended ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
                <span>Recommended Properties Based on Favorites</span>
              </Button>
              
              {showRecommended && (
                <div className="mt-4">
                  {recommendedLoading ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Loading recommendations...</p>
                    </div>
                  ) : !recommendedData?.propertyInsights?.propertyInfo?.length ? (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        No recommendations available at this time.
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {recommendedData.propertyInsights.propertyInfo.map((property: any) => ({
                        id: `rec-${property.zpid}`,
                        price: String(property.price),
                        bedrooms: Number(property.bedrooms),
                        bathrooms: Number(property.bathrooms),
                        squareFootage: Number(property.sqft),
                        address: String(property.address || ''),
                        yearBuilt: Number(property.yearBuilt || 0),
                        images: property.images?.map((img: any) => ({
                          url: img.url,
                          alt: img.alt || `Property ${property.zpid}`
                        })) || []
                      })).map((mappedProperty: Property) => (
                        <PropertyCard 
                          key={`recommended-${mappedProperty.id}`}
                          property={mappedProperty}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default function FavoritesPage() {
  return (
    <ApolloProvider client={apolloClient}>
      <FavoritesContent />
    </ApolloProvider>
  )
} 