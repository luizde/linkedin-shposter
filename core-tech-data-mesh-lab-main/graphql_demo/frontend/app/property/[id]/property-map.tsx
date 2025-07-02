"use client"

import { useState, useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Hardcoded schools data will remain for now, as school coordinates are not in the main mock data
const schools = [
  {
    id: 1,
    name: "Anytown Elementary",
    rating: "9/10",
    type: "Public • K-5",
    distance: "0.5 miles",
    position: [37.7799, -122.4144], // Using array format for Leaflet
    color: "#22c55e", // green
  },
  {
    id: 2,
    name: "Anytown Middle School",
    rating: "8/10",
    type: "Public • 6-8",
    distance: "1.2 miles",
    position: [37.7699, -122.4244], // Example coordinates
    color: "#3b82f6", // blue
  },
  {
    id: 3,
    name: "Anytown High School",
    rating: "8/10",
    type: "Public • 9-12",
    distance: "2.0 miles",
    position: [37.7599, -122.4094], // Example coordinates
    color: "#a855f7", // purple
  },
]

interface PropertyMapProps {
  latitude: number;
  longitude: number;
}

// Create custom school marker icons
const createSchoolIcon = (color: string) => {
  return L.divIcon({
    className: 'school-marker-icon',
    html: `<div class="school-marker" style="background-color: ${color}"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
}

// Create custom property marker icon
const createPropertyIcon = () => {
  return L.divIcon({
    className: 'property-marker-icon',
    html: `<div class="property-marker"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });
}

// Map component for each tab to handle client-side rendering
function PropertyLocationMap({ center }: { center: [number, number] }) {
  return (
    <MapContainer 
      center={center} 
      zoom={15} 
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={createPropertyIcon()} />
    </MapContainer>
  );
}

function SchoolsMap({ center, schoolsList }: { center: [number, number], schoolsList: typeof schools }) {
  const [selectedSchool, setSelectedSchool] = useState<typeof schools[0] | null>(null);
  
  return (
    <MapContainer 
      center={center} 
      zoom={14} 
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={createPropertyIcon()} />
      
      {schoolsList.map((school) => (
        <Marker 
          key={school.id}
          position={school.position as [number, number]} 
          icon={createSchoolIcon(school.color)}
          eventHandlers={{
            click: () => setSelectedSchool(school)
          }}
        >
          {selectedSchool && selectedSchool.id === school.id && (
            <Popup
              eventHandlers={{
                popupclose: () => setSelectedSchool(null)
              }}
            >
              <div className="p-2 max-w-xs">
                <h3 className="font-medium">{school.name}</h3>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-sm text-muted-foreground">{school.type}</span>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded">
                    {school.rating}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{school.distance}</p>
              </div>
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
}

export function PropertyMap({ latitude, longitude }: PropertyMapProps) {
  const [activeTab, setActiveTab] = useState("map");
  const [isMounted, setIsMounted] = useState(false);
  
  // Initialize leaflet when component mounts
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
    return (
      <Card className="mt-8">
        <Tabs defaultValue="map">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="map">Map</TabsTrigger>
            <TabsTrigger value="street">Street View</TabsTrigger>
            <TabsTrigger value="schools">Schools</TabsTrigger>
          </TabsList>
          <TabsContent value="map" className="p-0">
            <div className="aspect-[16/9] bg-gray-100 animate-pulse"></div>
          </TabsContent>
        </Tabs>
      </Card>
    );
  }

  return (
    <Card className="mt-8">
      <style jsx global>{`
        .leaflet-container {
          height: 100%;
          width: 100%;
        }
        .property-marker {
          background-color: #2563eb;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          width: 20px;
          height: 20px;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .school-marker {
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          width: 20px;
          height: 20px;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
      
      <Tabs defaultValue="map" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="map">Map</TabsTrigger>
          <TabsTrigger value="street">Street View</TabsTrigger>
          <TabsTrigger value="schools">Schools</TabsTrigger>
        </TabsList>
        <TabsContent value="map" className="p-0">
          <div className="aspect-[16/9] relative">
            <PropertyLocationMap center={[latitude, longitude]} />
          </div>
        </TabsContent>
        <TabsContent value="street" className="p-0">
          <div className="aspect-[16/9] relative">
            <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-center p-4">
              <p className="mb-2">Street View is provided through Google Maps Platform</p>
              <p className="text-sm text-muted-foreground">Use OpenStreetMap for location data and Google Street View for street imagery</p>
              <p className="text-xs text-muted-foreground mt-4">Street view imagery may vary based on location and availability</p>
            </div>
          </div>
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">Tip: You can also view this location in Google Maps directly by searching for the address.</p>
          </CardContent>
        </TabsContent>
        <TabsContent value="schools" className="p-0">
          <div className="aspect-[16/9] relative">
            {activeTab === "schools" && (
              <SchoolsMap center={[latitude, longitude]} schoolsList={schools} />
            )}
          </div>
          <CardContent className="p-4 space-y-2">
            {schools.map((school) => (
              <div key={school.id} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: school.color }}></div>
                <span className="text-sm">
                  {school.name} ({school.distance})
                </span>
              </div>
            ))}
          </CardContent>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
