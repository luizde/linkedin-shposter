import Link from "next/link"
import { ArrowLeft, Share, MapPin, Bed, Bath, Square, Calendar, Home, Heart } from "lucide-react"
import { notFound } from 'next/navigation';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageGallery } from "./image-gallery"
import { PropertyMap } from "./property-map"
import { SimilarHomes } from "./similar-homes"
import { FavoriteButton } from "@/components/ui/favorite-button"
import { getPropertyById, mockProperties } from "@/lib/mock-data";

// Function to generate static paths
export async function generateStaticParams() {
  return mockProperties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const id = await params.id;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to search
          </Link>
          <Link 
            href="/favorites" 
            className="inline-flex items-center text-sm font-medium text-red-500 hover:text-red-600"
          >
            <Heart className="mr-2 h-4 w-4" />
            View favorites
          </Link>
        </div>

        {/* Property Images */}
        <ImageGallery images={property.images} />

        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.price}</h1>
                <div className="flex items-center text-lg mb-1">
                  <span className="font-medium">{property.bedrooms} bds</span>
                  <span className="mx-2">|</span>
                  <span className="font-medium">{property.bathrooms} ba</span>
                  <span className="mx-2">|</span>
                  <span className="font-medium">{property.squareFootage} sqft</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  {property.address}
                </div>
              </div>
              <div className="flex space-x-2">
                <FavoriteButton 
                  zpid={id} 
                  propertyData={{
                    price: property.price,
                    bedrooms: property.bedrooms,
                    bathrooms: property.bathrooms,
                    squareFootage: property.squareFootage,
                    address: property.address,
                    yearBuilt: property.yearBuilt
                  }}
                />
                <Button variant="outline" size="icon">
                  <Share className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="overview" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="facts">Facts</TabsTrigger>
                <TabsTrigger value="schools">Schools</TabsTrigger>
                <TabsTrigger value="tax">Tax History</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-6">
                <div className="prose max-w-none">
                  {property.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <Bed className="h-6 w-6 mb-2" />
                    <span className="text-sm font-medium">{property.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <Bath className="h-6 w-6 mb-2" />
                    <span className="text-sm font-medium">{property.bathrooms} Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <Square className="h-6 w-6 mb-2" />
                    <span className="text-sm font-medium">{property.squareFootage} sqft</span>
                  </div>
                  <div className="flex flex-col items-center p-4 border rounded-lg">
                    <Calendar className="h-6 w-6 mb-2" />
                    <span className="text-sm font-medium">Built {property.yearBuilt}</span>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="facts" className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Interior Features</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {property.interiorFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Exterior Features</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {property.exteriorFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="schools" className="pt-6">
                <div className="space-y-4">
                  {property.schools.map((school, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-medium">{school.name}</h3>
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded">{school.rating}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{school.type} • {school.grades} • {school.distance}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tax" className="pt-6">
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Year</th>
                          <th className="text-left py-2 px-4">Property Taxes</th>
                          <th className="text-left py-2 px-4">Tax Assessment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {property.taxHistory.map((taxEntry, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-2 px-4">{taxEntry.year}</td>
                            <td className="py-2 px-4">{taxEntry.propertyTaxes}</td>
                            <td className="py-2 px-4">{taxEntry.taxAssessment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Property Map */}
            <PropertyMap latitude={property.latitude} longitude={property.longitude} />
          </div>

          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Contact Agent</h3>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src={property.agent.imageUrl}
                      alt={property.agent.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{property.agent.name}</div>
                    <div className="text-sm text-muted-foreground">{property.agent.title}</div>
                    <div className="text-sm text-muted-foreground">{property.agent.phone}</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button className="w-full">Request a tour</Button>
                  <Button variant="outline" className="w-full">
                    Contact agent
                  </Button>
                  <div className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to our Terms of Use and Privacy Policy
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Payment Calculator</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Loan amount</span>
                    <span className="font-medium">{property.paymentCalculator.loanAmount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Down payment</span>
                    <span className="font-medium">{property.paymentCalculator.downPayment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Interest rate</span>
                    <span className="font-medium">{property.paymentCalculator.interestRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Loan term</span>
                    <span className="font-medium">{property.paymentCalculator.loanTerm}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-lg">
                      <span className="font-medium">Monthly payment</span>
                      <span className="font-bold">{property.paymentCalculator.monthlyPayment}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Home className="mr-2 h-4 w-4" />
                    Get pre-qualified
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Property History</h3>
                <div className="space-y-4">
                  {property.propertyHistory.map((entry, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-muted rounded-full p-2 mr-3 mt-0.5">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">{entry.event}</div>
                        <div className="text-sm text-muted-foreground">{entry.price} on {entry.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Homes */}
        <SimilarHomes currentZpid={id} />
      </div>
    </div>
  )
}
