"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Sample neighborhood data
const neighborhoods = [
  { id: 1, name: "Mission District", position: [37.7599, -122.4148], count: 24 },
  { id: 2, name: "Nob Hill", position: [37.7930, -122.4161], count: 18 },
  { id: 3, name: "SoMa", position: [37.7785, -122.4056], count: 32 },
  { id: 4, name: "Pacific Heights", position: [37.7925, -122.4382], count: 15 },
  { id: 5, name: "Marina District", position: [37.8037, -122.4368], count: 21 },
]

// San Francisco center
const center = {
  lat: 37.7749,
  lng: -122.4194,
}

// Create custom neighborhood marker icons
const createNeighborhoodIcon = (count: number) => {
  return L.divIcon({
    className: 'neighborhood-marker-icon',
    html: `<div class="neighborhood-marker">
             ${count} homes
           </div>`,
    iconSize: [80, 30],
    iconAnchor: [40, 15],
  });
}

// This component only renders on the client side
export function HomePageMap() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Initialize leaflet icons 
  useEffect(() => {
    setIsMounted(true);
    
    // Fix Leaflet default icon paths
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  if (!isMounted) {
    return <div className="h-full bg-gray-100 animate-pulse"></div>;
  }

  return (
    <>
      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
          z-index: 1;
        }
        .neighborhood-marker {
          background-color: #2563eb;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: bold;
          font-size: 12px;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          white-space: nowrap;
          text-align: center;
        }
      `}</style>
      
      <MapContainer 
        center={[center.lat, center.lng]} 
        zoom={13} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
        dragging={false}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {neighborhoods.map((neighborhood) => (
          <Marker 
            key={neighborhood.id}
            position={[neighborhood.position[0], neighborhood.position[1]]}
            icon={createNeighborhoodIcon(neighborhood.count)}
          >
            <Popup>
              <div className="p-2 text-center">
                <div className="font-semibold mb-1">{neighborhood.name}</div>
                <div className="text-sm text-gray-600 mb-2">{neighborhood.count} homes available</div>
                <Link href="/map">
                  <Button size="sm" className="w-full">View Homes</Button>
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  )
} 