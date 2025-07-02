"use client"

import { Heart } from "lucide-react"
import { Button } from "./button"
import { useFavorites } from "@/lib/hooks/use-favorites"
import { getPropertyById } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { trackPropertyLiked } from "@/lib/analytics"

interface FavoriteButtonProps {
  zpid: string
  className?: string
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg" | "icon"
  propertyData?: {
    price?: string;
    bedrooms?: number;
    bathrooms?: number;
    squareFootage?: number;
    address?: string;
    yearBuilt?: number;
  }
}

export function FavoriteButton({
  zpid,
  className,
  variant = "outline",
  size = "icon",
  propertyData
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites()
  const [isAnimating, setIsAnimating] = useState(false)
  const isFavorited = isFavorite(zpid)

  const handleToggleFavorite = async (e: React.MouseEvent) => {
    // First determine if this is an add or remove action
    const isAdding = !isFavorited
    
    // Then toggle the favorite state
    toggleFavorite(zpid)
    
    // Animate the heart
    setIsAnimating(true)
    setTimeout(() => setIsAnimating(false), 300)
    
    // Only track when adding to favorites
    if (isAdding) {
      try {
        // If propertyData was not provided, try to fetch it
        let dataToSend = propertyData;
        if (!dataToSend) {
          const property = getPropertyById(zpid);
          if (property) {
            dataToSend = {
              price: property.price,
              bedrooms: property.bedrooms,
              bathrooms: property.bathrooms,
              squareFootage: property.squareFootage,
              address: property.address,
              yearBuilt: property.yearBuilt
            };
          }
        }
        
        await trackPropertyLiked(zpid, dataToSend, e.nativeEvent);
      } catch (error) {
        console.error('Failed to track property like:', error);
      }
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={handleToggleFavorite}
      aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
    >
      <Heart
        className={cn(
          "h-5 w-5 transition-all duration-300",
          isAnimating && "scale-125",
          isFavorited ? "fill-red-500 text-red-500" : "fill-transparent"
        )}
      />
    </Button>
  )
} 