import Link from "next/link"
import { ArrowLeft, Filter, List, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { PropertyMapView } from "./property-map-view"

export default function MapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <Link href="/" className="inline-flex items-center text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to home
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <List className="h-4 w-4 mr-2" />
              List View
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-80 border-r p-4 overflow-y-auto hidden md:block">
          <div className="mb-6">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="City, neighborhood, or ZIP" className="pl-9" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-4">
                <Slider defaultValue={[200000, 600000]} min={0} max={1000000} step={10000} />
                <div className="flex justify-between">
                  <Input placeholder="Min" className="w-[45%]" defaultValue="$200,000" />
                  <span className="flex items-center">-</span>
                  <Input placeholder="Max" className="w-[45%]" defaultValue="$600,000" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Home Type</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="house" />
                  <Label htmlFor="house">House</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="condo" />
                  <Label htmlFor="condo">Condo/Co-op</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="townhouse" />
                  <Label htmlFor="townhouse">Townhouse</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="multi-family" />
                  <Label htmlFor="multi-family">Multi-family</Label>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Bedrooms</h3>
              <div className="flex space-x-2">
                {["Any", "1+", "2+", "3+", "4+", "5+"].map((option) => (
                  <Button key={option} variant={option === "3+" ? "default" : "outline"} size="sm" className="flex-1">
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Bathrooms</h3>
              <div className="flex space-x-2">
                {["Any", "1+", "2+", "3+", "4+"].map((option) => (
                  <Button key={option} variant={option === "2+" ? "default" : "outline"} size="sm" className="flex-1">
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">More Filters</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="buyability" defaultChecked />
                  <Label htmlFor="buyability">Within BuyAbility™</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="open-house" />
                  <Label htmlFor="open-house">Open House</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="new-construction" />
                  <Label htmlFor="new-construction">New Construction</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-reduced" />
                  <Label htmlFor="price-reduced">Price Reduced</Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 relative">
          <PropertyMapView />
        </div>
      </div>
    </div>
  )
}
