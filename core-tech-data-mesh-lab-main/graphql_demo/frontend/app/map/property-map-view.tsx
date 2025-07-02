"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home } from "lucide-react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { mockProperties } from "@/lib/mock-data"

// Adapted property data type
interface PropertyMapData {
  id: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  position: { lat: number; lng: number };
  image: string;
  buyability: boolean;
}

// Convert mockProperties to the format needed for the map
const transformProperties = (): PropertyMapData[] => {
  return mockProperties.map(property => {
    // Extract zip from address (assuming format like "123 Street, City, State ZIP")
    const addressParts = property.address.split(',');
    const stateZipParts = addressParts.length > 1 ? 
      addressParts[addressParts.length - 1].trim().split(' ') : ['', ''];
    
    // Extract city from address
    const cityPart = addressParts.length > 1 ? addressParts[addressParts.length - 2].trim() : '';
    
    return {
      id: property.id,
      price: property.price,
      beds: property.bedrooms,
      baths: property.bathrooms,
      sqft: property.squareFootage,
      address: property.address,
      city: cityPart,
      state: stateZipParts.length > 1 ? stateZipParts[0] : '',
      zip: stateZipParts.length > 1 ? stateZipParts[stateZipParts.length - 1] : '',
      position: { lat: property.latitude, lng: property.longitude },
      image: property.images && property.images.length > 0 ? property.images[0].url : "/placeholder.svg",
      buyability: Math.random() > 0.5, // Random buyability status for demo
    };
  });
};

// Default center for San Francisco
const center = {
  lat: 37.7749,
  lng: -122.4194,
};

// Create custom price marker icons
const createPriceIcon = (price: string, isBuyable: boolean) => {
  const formattedPrice = price.charAt(0) === '$' ? price : '$' + price;
  
  return L.divIcon({
    className: 'price-marker-icon',
    html: `<div class="marker-price ${isBuyable ? 'buyable' : ''}">
             ${formattedPrice}
           </div>`,
    iconSize: [80, 40],
    iconAnchor: [40, 40],
  });
}

// Custom component to add className to Popup's parent div that isn't exposed in the API
const StyledPopup = ({ children, ...props }: { children: React.ReactNode }) => {
  useEffect(() => {
    const popupContainer = document.querySelectorAll('.leaflet-popup-content-wrapper');
    popupContainer.forEach(container => {
      container.classList.add('property-popup');
    });
  }, []);

  return <Popup {...props}>{children}</Popup>;
};

// Create a map component that properly initializes in client-side context
function MapComponent() {
  const properties = transformProperties();
  
  // Fix Leaflet default icon paths
  useEffect(() => {
    // Only run on client side
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);
  
  return (
    <MapContainer 
      center={[center.lat, center.lng]} 
      zoom={12} 
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {properties.map((property) => (
        <Marker 
          key={property.id}
          position={[property.position.lat, property.position.lng]}
          icon={createPriceIcon(property.price, property.buyability)}
        >
          <StyledPopup>
            <div className="w-72">
              <Card className="overflow-hidden shadow-lg border-0">
                <div className="aspect-video relative bg-muted">
                  {property.buyability && (
                    <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600 text-white z-10">
                      Within BuyAbility
                    </Badge>
                  )}
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={`Property ${property.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="font-semibold text-lg">{property.price}</div>
                  <div className="text-sm text-muted-foreground">
                    {property.beds} bd | {property.baths} ba | {property.sqft.toLocaleString()}{" "}
                    sqft
                  </div>
                  <div className="text-sm mt-1">
                    {property.address}
                  </div>
                  <Link href={`/property/${property.id}`}>
                    <Button className="w-full mt-3" size="sm">
                      <Home className="h-4 w-4 mr-2" />
                      View Property
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </StyledPopup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export function PropertyMapView() {
  const [isMounted, setIsMounted] = useState(false);

  // This ensures that the component only renders on the client side to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="h-full flex items-center justify-center">Loading map...</div>;
  }

  return (
    <div className="h-full w-full">
      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
        }
        .marker-price {
          background-color: #2563eb;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 12px;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          white-space: nowrap;
        }
        .marker-price.buyable {
          background-color: #f97316;
        }
        .property-popup .leaflet-popup-content {
          margin: 0;
          padding: 0;
          width: 288px !important;
        }
        .property-popup .leaflet-popup-content-wrapper {
          padding: 0;
          overflow: hidden;
          border-radius: 6px;
        }
        .property-popup .leaflet-popup-close-button {
          z-index: 10;
          color: white;
          text-shadow: 0 0 3px rgba(0,0,0,0.5);
        }
      `}</style>
      
      <MapComponent />
    </div>
  )
}
