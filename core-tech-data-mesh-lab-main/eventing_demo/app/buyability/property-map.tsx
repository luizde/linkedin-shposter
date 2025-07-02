"use client"

import { useState, useCallback, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api"
import { Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Property {
  id: number
  price: number
  beds: number
  baths: number
  sqft: number
  address: string
  city: string
  state: string
  zip: string
  lat: number
  lng: number
  image: string
}

interface PropertyMapProps {
  properties: Property[]
}

const mapContainerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 37.7749,
  lng: -122.4194,
}

const options = {
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: false,
  fullscreenControl: true,
}

export function PropertyMap({ properties }: PropertyMapProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY",
  })

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const mapRef = useRef<google.maps.Map | null>(null)

  const onMapLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map
  }, [])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
      value,
    )
  }

  if (loadError) {
    return <div className="h-[700px] flex items-center justify-center">Error loading maps</div>
  }

  if (!isLoaded) {
    return <div className="h-[700px] flex items-center justify-center">Loading maps...</div>
  }

  return (
    <div className="h-[700px] rounded-lg overflow-hidden border">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12} options={options} onLoad={onMapLoad}>
        {/* Property Markers */}
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={{ lat: property.lat, lng: property.lng }}
            onClick={() => setSelectedProperty(property)}
            icon={{
              path: "M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z",
              fillColor: "#f97316", // Orange for BuyAbility
              fillOpacity: 1,
              strokeColor: "#fff",
              strokeWeight: 2,
              labelOrigin: new google.maps.Point(0, -30),
              scale: 1,
            }}
            label={{
              text: formatCurrency(property.price),
              color: "#FFFFFF",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          />
        ))}

        {/* Property Info Window */}
        {selectedProperty && (
          <InfoWindow
            position={{ lat: selectedProperty.lat, lng: selectedProperty.lng }}
            onCloseClick={() => setSelectedProperty(null)}
            options={{ pixelOffset: new google.maps.Size(0, -40) }}
          >
            <div className="w-72">
              <Card className="overflow-hidden shadow-lg border-0">
                <div className="aspect-video relative bg-muted">
                  <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600 text-white z-10">
                    Within BuyAbility
                  </Badge>
                  <Image
                    src={selectedProperty.image || "/placeholder.svg"}
                    alt={`Property ${selectedProperty.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="font-semibold text-lg">{formatCurrency(selectedProperty.price)}</div>
                  <div className="text-sm text-muted-foreground">
                    {selectedProperty.beds} bd | {selectedProperty.baths} ba | {selectedProperty.sqft.toLocaleString()}{" "}
                    sqft
                  </div>
                  <div className="text-sm mt-1">
                    {selectedProperty.address}, {selectedProperty.city}, {selectedProperty.state} {selectedProperty.zip}
                  </div>
                  <Link href={`/property/${selectedProperty.id}`}>
                    <Button className="w-full mt-3" size="sm">
                      <Home className="h-4 w-4 mr-2" />
                      View Property
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  )
}
