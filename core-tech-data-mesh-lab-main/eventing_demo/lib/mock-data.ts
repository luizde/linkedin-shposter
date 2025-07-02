import { additionalProperties } from "./additional-properties";

export interface PropertyImage {
    id: string;
    url: string;
    alt: string;
}

export interface School {
    name: string;
    rating: string;
    type: string;
    grades: string;
    distance: string;
}

export interface TaxHistoryEntry {
    year: number;
    propertyTaxes: string;
    taxAssessment: string;
}

export interface Agent {
    name: string;
    title: string;
    phone: string;
    imageUrl: string;
}

export interface PaymentCalculatorInfo {
    loanAmount: string;
    downPayment: string;
    interestRate: string;
    loanTerm: string;
    monthlyPayment: string;
}

export interface PropertyHistoryEntry {
    event: string;
    price: string;
    date: string;
}

export interface Property {
    id: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    squareFootage: number;
    address: string;
    description: string[];
    images: PropertyImage[];
    interiorFeatures: string[];
    exteriorFeatures: string[];
    yearBuilt: number;
    schools: School[];
    taxHistory: TaxHistoryEntry[];
    agent: Agent;
    paymentCalculator: PaymentCalculatorInfo;
    propertyHistory: PropertyHistoryEntry[];
    latitude: number;
    longitude: number;
}


// Combine original properties with the additional properties
export const mockProperties: Property[] = additionalProperties

export function getPropertyById(id: string): Property | undefined {
    return mockProperties.find(property => property.id === id);
}

export function getSimilarHomes(zpid: string): Property[] {
    // Return up to 3 other properties, excluding the current one
    return mockProperties.filter(property => property.id !== zpid).slice(0, 3);
} 