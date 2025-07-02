"use client"

import { useState, useEffect } from "react"

export function useFavorites() {
    const [favorites, setFavorites] = useState<string[]>([])

    // Load favorites from localStorage on mount
    useEffect(() => {
        const storedFavorites = localStorage.getItem("property-favorites")
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites))
        }
    }, [])

    // Add or remove a property from favorites
    const toggleFavorite = (zpid: string) => {
        setFavorites((current) => {
            const newFavorites = current.includes(zpid)
                ? current.filter(id => id !== zpid)
                : [...current, zpid]

            // Update localStorage
            localStorage.setItem("property-favorites", JSON.stringify(newFavorites))
            return newFavorites
        })
    }

    // Check if a property is in favorites
    const isFavorite = (zpid: string) => {
        return favorites.includes(zpid)
    }

    return {
        favorites,
        toggleFavorite,
        isFavorite
    }
} 