"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DollarSign, Home, Building, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"

export function BuyAbilityCalculator() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    annualIncome: 75000,
    monthlyDebts: 500,
    creditScore: "good", // poor, fair, good, excellent
    downPayment: 50000,
    propertyType: "single-family", // single-family, condo, townhouse
    loanTerm: 30, // 15, 20, 30
  })

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSliderChange = (field: string, value: number[]) => {
    setFormData((prev) => ({ ...prev, [field]: value[0] }))
  }

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      // Submit and go to results
      router.push("/buyability?tab=results")
    }
  }

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  // Calculate estimated monthly payment and max home price
  const interestRate =
    formData.creditScore === "excellent"
      ? 0.055
      : formData.creditScore === "good"
        ? 0.06
        : formData.creditScore === "fair"
          ? 0.065
          : 0.07
  const monthlyIncome = formData.annualIncome / 12
  const maxMonthlyPayment = monthlyIncome * 0.28 - formData.monthlyDebts

  // Simple mortgage calculation (P&I only, no taxes/insurance)
  const r = interestRate / 12
  const n = formData.loanTerm * 12
  const maxLoanAmount = maxMonthlyPayment * ((1 - Math.pow(1 + r, -n)) / r)
  const maxHomePrice = maxLoanAmount + formData.downPayment

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
      value,
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>BuyAbility™ Calculator</CardTitle>
        <CardDescription>Tell us about your finances to find homes you can afford</CardDescription>
        <Progress value={(step / 3) * 100} className="h-2 mt-2" />
      </CardHeader>
      <CardContent>
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="annualIncome">Annual Household Income (before taxes)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="annualIncome"
                  type="number"
                  className="pl-9"
                  value={formData.annualIncome}
                  onChange={(e) => handleInputChange("annualIncome", Number(e.target.value))}
                />
              </div>
              <div className="pt-2">
                <Slider
                  value={[formData.annualIncome]}
                  min={30000}
                  max={300000}
                  step={5000}
                  onValueChange={(value) => handleSliderChange("annualIncome", value)}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$30,000</span>
                  <span>$300,000+</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="monthlyDebts">Monthly Debt Payments</Label>
              <div className="text-sm text-muted-foreground mb-2">
                Include credit cards, car loans, student loans, etc.
              </div>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="monthlyDebts"
                  type="number"
                  className="pl-9"
                  value={formData.monthlyDebts}
                  onChange={(e) => handleInputChange("monthlyDebts", Number(e.target.value))}
                />
              </div>
              <div className="pt-2">
                <Slider
                  value={[formData.monthlyDebts]}
                  min={0}
                  max={5000}
                  step={100}
                  onValueChange={(value) => handleSliderChange("monthlyDebts", value)}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$0</span>
                  <span>$5,000+</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Credit Score Range</Label>
              <RadioGroup
                value={formData.creditScore}
                onValueChange={(value) => handleInputChange("creditScore", value)}
                className="grid grid-cols-2 gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="poor" id="poor" />
                  <Label htmlFor="poor" className="cursor-pointer">
                    Poor (below 640)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fair" id="fair" />
                  <Label htmlFor="fair" className="cursor-pointer">
                    Fair (640-699)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="good" id="good" />
                  <Label htmlFor="good" className="cursor-pointer">
                    Good (700-759)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="excellent" id="excellent" />
                  <Label htmlFor="excellent" className="cursor-pointer">
                    Excellent (760+)
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="downPayment">Down Payment Amount</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="downPayment"
                  type="number"
                  className="pl-9"
                  value={formData.downPayment}
                  onChange={(e) => handleInputChange("downPayment", Number(e.target.value))}
                />
              </div>
              <div className="pt-2">
                <Slider
                  value={[formData.downPayment]}
                  min={0}
                  max={200000}
                  step={5000}
                  onValueChange={(value) => handleSliderChange("downPayment", value)}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$0</span>
                  <span>$200,000+</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Property Type</Label>
              <RadioGroup
                value={formData.propertyType}
                onValueChange={(value) => handleInputChange("propertyType", value)}
                className="grid grid-cols-1 gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="single-family" id="single-family" />
                  <Label htmlFor="single-family" className="cursor-pointer flex items-center">
                    <Home className="h-4 w-4 mr-2" />
                    Single Family Home
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="condo" id="condo" />
                  <Label htmlFor="condo" className="cursor-pointer flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Condo/Co-op
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="townhouse" id="townhouse" />
                  <Label htmlFor="townhouse" className="cursor-pointer flex items-center">
                    <Building className="h-4 w-4 mr-2" />
                    Townhouse
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Loan Term</Label>
              <RadioGroup
                value={formData.loanTerm.toString()}
                onValueChange={(value) => handleInputChange("loanTerm", Number(value))}
                className="grid grid-cols-3 gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="15" id="term-15" />
                  <Label htmlFor="term-15" className="cursor-pointer flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    15 Years
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="20" id="term-20" />
                  <Label htmlFor="term-20" className="cursor-pointer flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    20 Years
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="30" id="term-30" />
                  <Label htmlFor="term-30" className="cursor-pointer flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    30 Years
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Your BuyAbility™ Results</h3>
              <p className="text-muted-foreground">Based on the information you provided</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Estimated Max Home Price</h4>
                    <div className="text-3xl font-bold text-primary">{formatCurrency(maxHomePrice)}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Estimated Monthly Payment</h4>
                    <div className="text-3xl font-bold text-primary">{formatCurrency(maxMonthlyPayment)}</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Assumptions</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between">
                  <span>Interest Rate:</span>
                  <span>{(interestRate * 100).toFixed(2)}%</span>
                </li>
                <li className="flex justify-between">
                  <span>Loan Term:</span>
                  <span>{formData.loanTerm} years</span>
                </li>
                <li className="flex justify-between">
                  <span>Down Payment:</span>
                  <span>{formatCurrency(formData.downPayment)}</span>
                </li>
                <li className="flex justify-between">
                  <span>Debt-to-Income Ratio:</span>
                  <span>28%</span>
                </li>
              </ul>
              <div className="mt-3 text-xs text-muted-foreground">
                Note: This is an estimate only. Actual loan terms and rates may vary based on lender requirements and
                market conditions.
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 ? (
          <Button variant="outline" onClick={prevStep}>
            Back
          </Button>
        ) : (
          <div></div>
        )}
        <Button onClick={nextStep}>{step < 3 ? "Continue" : "See Matching Homes"}</Button>
      </CardFooter>
    </Card>
  )
}
