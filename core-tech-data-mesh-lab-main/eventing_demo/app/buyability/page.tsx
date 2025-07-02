import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Home, DollarSign, Briefcase, Building, Calculator } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BuyAbilityCalculator } from "./buyability-calculator"
import { BuyAbilityResults } from "./buyability-results"

export default function BuyAbilityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Find homes you can afford with BuyAbility™</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions about your finances and we'll highlight homes you're likely to qualify for.
          </p>
        </div>

        <Tabs defaultValue="calculator" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="calculator">
              <Calculator className="h-4 w-4 mr-2" />
              BuyAbility Calculator
            </TabsTrigger>
            <TabsTrigger value="results">
              <Home className="h-4 w-4 mr-2" />
              Matching Homes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="calculator">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <BuyAbilityCalculator />
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Why use BuyAbility™?</CardTitle>
                    <CardDescription>Get personalized home recommendations based on your finances</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <DollarSign className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Know what you can afford</h3>
                        <p className="text-sm text-muted-foreground">
                          Get a realistic view of homes within your budget
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Save time house hunting</h3>
                        <p className="text-sm text-muted-foreground">
                          Focus only on homes you're likely to qualify for
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Building className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Connect with lenders</h3>
                        <p className="text-sm text-muted-foreground">Get pre-qualified with trusted lending partners</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-6 relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder-4cyei.png"
                    alt="Happy homeowners"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <p className="font-medium">"BuyAbility helped us find our dream home within our budget!"</p>
                      <p className="text-sm opacity-80">- The Johnson Family</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="results">
            <BuyAbilityResults />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
