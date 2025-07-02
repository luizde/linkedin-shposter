"use client"

import { useEffect, useState } from "react"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { mockProperties } from "@/lib/mock-data"

// Dynamically import Leaflet components with no SSR
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

// Group properties by neighborhood for clustering
interface NeighborhoodCluster {
  id: string;
  name: string;
  position: [number, number];
  count: number;
}

// Create neighborhood clusters from property data
const createNeighborhoodClusters = (): NeighborhoodCluster[] => {
  // This is a simplified approach - in a real app, you'd use a more sophisticated
  // clustering algorithm or have actual neighborhood data
  
  // Define some sample neighborhoods in San Francisco
  const neighborhoods = [
    { name: "Mission District", position: [37.7599, -122.4148] as [number, number], bounds: [37.75, 37.77, -122.42, -122.40] },
    { name: "Nob Hill", position: [37.7930, -122.4161] as [number, number], bounds: [37.78, 37.80, -122.42, -122.40] },
    { name: "SoMa", position: [37.7785, -122.4056] as [number, number], bounds: [37.77, 37.79, -122.41, -122.39] },
    { name: "Pacific Heights", position: [37.7925, -122.4382] as [number, number], bounds: [37.78, 37.80, -122.44, -122.42] },
    { name: "Marina District", position: [37.8037, -122.4368] as [number, number], bounds: [37.79, 37.82, -122.44, -122.42] },
  ];
  
  // Count properties in each neighborhood
  return neighborhoods.map((neighborhood, index) => {
    // Simple check if a property is in a neighborhood's bounds
    const [minLat, maxLat, minLng, maxLng] = neighborhood.bounds;
    
    const count = mockProperties.filter(property => {
      const lat = property.latitude;
      const lng = property.longitude;
      return typeof lat === 'number' && typeof lng === 'number' &&
             lat >= minLat && lat <= maxLat && lng >= minLng && lng <= maxLng;
    }).length;
    
    // Ensure we show at least some properties in each neighborhood for demo
    const adjustedCount = count > 0 ? count : Math.floor(Math.random() * 20) + 5;
    
    return {
      id: `n-${index + 1}`,
      name: neighborhood.name,
      position: neighborhood.position,
      count: adjustedCount
    };
  });
};

// San Francisco center
const center = {
  lat: 37.7749,
  lng: -122.4194,
};

// Create custom neighborhood marker icons
const createNeighborhoodIcon = (count: number) => {
  if (typeof window === 'undefined') return null;
  
  const L = require('leaflet');
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
  const [neighborhoods, setNeighborhoods] = useState<NeighborhoodCluster[]>([]);
  
  // Generate neighborhood clusters and initialize leaflet
  useEffect(() => {
    setIsMounted(true);
    setNeighborhoods(createNeighborhoodClusters());
    
    // Fix Leaflet default icon paths
    const L = require('leaflet');
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
            position={neighborhood.position}
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
