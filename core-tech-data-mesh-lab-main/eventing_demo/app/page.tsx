"use client"; // Make this a Client Component

import Image from "next/image";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight, MapPin, Heart } from "lucide-react";
import { useEffect, type MouseEvent } from "react"; // Import MouseEvent for typing

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FavoriteButton } from "@/components/ui/favorite-button";
import { UserMenu } from "@/components/user-menu";
import { mockProperties } from "@/lib/mock-data";
import { homePageViewed, trackBuyabilityAction } from "@/lib/analytics";
import { HomePageMap } from "@/components/home-page-map";

export default function Home() {
  const trackHomeView = async () => {
    await homePageViewed();
  };
  useEffect(() => {
    trackHomeView();
  }, []);

  const recommendedListings = mockProperties.slice(0, 8);
  const buyAbilityListings = mockProperties.slice(8, 15);

  const handleBuyAbilityGetStartedClick = async (
    e: MouseEvent<HTMLButtonElement>
  ) => {
    try {
      // Construct the payload for the event
      const eventData = {
        location: "Unknown",
        down_payment: 0,
        monthly_payment: 0,
        annual_income: 0,
        monthly_debts: 0,
        credit_score: "not_provided",
      };

      // Track the buyability action
      await trackBuyabilityAction(eventData, e.nativeEvent);
    } catch (error) {
      console.error("Failed to track buyability action:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="border-b">
          <div className="container mx-auto px-4 flex items-center justify-between h-16">
            <nav className="flex items-center space-x-6">
              <Link href="#" className="font-medium text-sm">
                Buy
              </Link>
              <Link href="#" className="font-medium text-sm">
                Rent
              </Link>
              <Link href="#" className="font-medium text-sm">
                Sell
              </Link>
              <Link href="#" className="font-medium text-sm">
                Get a mortgage
              </Link>
              <Link href="#" className="font-medium text-sm">
                Find an Agent
              </Link>
            </nav>

            <Link href="/" className="flex items-center">
              <Image
                src="/zillow-logo-blue.png"
                alt="Zillow"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <div className="flex items-center space-x-6">
              <Link
                href="/favorites"
                className="font-medium text-sm flex items-center text-red-500 hover:text-red-600"
              >
                <Heart className="h-4 w-4 mr-1" />
                Favorites
              </Link>
              <Link href="#" className="font-medium text-sm">
                Manage Rentals
              </Link>
              <Link href="#" className="font-medium text-sm">
                Advertise
              </Link>
              <Link href="#" className="font-medium text-sm">
                Help
              </Link>
              <UserMenu />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/modern-blue-door-viewing.png"
              alt="Home with people viewing"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Agents. Tours.
                <br />
                Loans. Homes.
              </h1>
              <div className="bg-white p-2 rounded-full flex items-center">
                <Input
                  type="text"
                  placeholder="Enter an address, neighborhood, city, or ZIP code"
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full"
                />
                <Link href="/map">
                  <Button size="icon" variant="ghost" className="rounded-full">
                    <Search className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Property Listings */}
        <section className="py-12 container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-1">
                Recommended Listings
              </h2>
              <p className="text-muted-foreground">
                Discover homes tailored to your preferences
              </p>
            </div>
            <Link href="/map" className="mt-2 sm:mt-0">
              <Button variant="outline">View all listings</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendedListings.map((property) => (
              <Card key={property.id} className="overflow-hidden group h-full">
                <div className="aspect-video relative bg-muted">
                  <Link href={`/property/${property.id}`}>
                    <Image
                      src={property.images[0]?.url || "/placeholder.svg"}
                      alt={property.images[0]?.alt || `Property ${property.id}`}
                      fill
                      className="object-cover"
                    />
                  </Link>
                  <div className="absolute top-2 right-2 opacity-80 group-hover:opacity-100 transition-opacity">
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
                        yearBuilt: property.yearBuilt,
                      }}
                    />
                  </div>
                </div>
                <CardContent className="p-4">
                  <Link href={`/property/${property.id}`} className="block">
                    <div className="font-semibold text-lg">
                      {property.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {property.bedrooms} bd | {property.bathrooms} ba |{" "}
                      {property.squareFootage} sqft
                    </div>
                    <div
                      className="text-sm mt-1 flex items-center truncate"
                      title={property.address}
                    >
                      <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                      {property.address}
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* BuyAbility Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Find homes you can afford with BuyAbility™
                </h2>
                <p className="text-muted-foreground mb-4 md:mb-0">
                  Answer a few questions. We'll highlight homes you're likely to
                  qualify for.
                </p>
              </div>
              <Link href="/buyability" passHref legacyBehavior>
                <Button
                  id="buyability-get-started-button"
                  onClick={handleBuyAbilityGetStartedClick}
                >
                  Get Started
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {buyAbilityListings.slice(0, 6).map((property) => (
                <Card
                  key={property.id}
                  className="overflow-hidden group h-full"
                >
                  <div className="aspect-video relative bg-muted">
                    <Badge className="absolute top-3 left-3 bg-orange-500 hover:bg-orange-600 text-white">
                      Within BuyAbility
                    </Badge>
                    <Link href={`/property/${property.id}`}>
                      <Image
                        src={property.images[0]?.url || "/placeholder.svg"}
                        alt={
                          property.images[0]?.alt || `Property ${property.id}`
                        }
                        fill
                        className="object-cover"
                      />
                    </Link>
                    <div className="absolute top-2 right-2 opacity-80 group-hover:opacity-100 transition-opacity">
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
                          yearBuilt: property.yearBuilt,
                        }}
                      />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <Link href={`/property/${property.id}`} className="block">
                      <div className="font-semibold text-lg">
                        {property.price}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {property.bedrooms} bd | {property.bathrooms} ba |{" "}
                        {property.squareFootage} sqft
                      </div>
                      <div
                        className="text-sm mt-1 flex items-center truncate"
                        title={property.address}
                      >
                        <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                        {property.address}
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/buyability">
                <Button variant="outline">
                  View all qualifying properties
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Map Search Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-semibold mb-2">
                  Explore neighborhoods on the map
                </h2>
                <p className="text-muted-foreground">
                  See what's available in different areas and find your perfect
                  location
                </p>
              </div>
              <Link href="/map">
                <Button>Open Map View</Button>
              </Link>
            </div>

            <div className="relative rounded-lg overflow-hidden border">
              <div className="aspect-[21/9] relative">
                <HomePageMap />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Real Estate</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Browse homes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Find agents
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Property records
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Rentals</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Rental buildings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Apartments for rent
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Houses for rent
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Mortgage</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Mortgage rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Refinance rates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Mortgage calculator
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">About</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Help
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              <p>© 2023 Zillow Clone. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
