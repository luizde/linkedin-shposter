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
    description?: string[];
    images?: PropertyImage[];
    interiorFeatures?: string[];
    exteriorFeatures?: string[];
    yearBuilt?: number;
    schools?: School[];
    taxHistory?: TaxHistoryEntry[];
    agent?: Agent;
    paymentCalculator?: PaymentCalculatorInfo;
    propertyHistory?: PropertyHistoryEntry[];
    latitude?: number;
    longitude?: number;
}

// Original mock properties
const originalProperties: Property[] = [
    {
        id: "1",
        price: "$750,000",
        bedrooms: 4,
        bathrooms: 3,
        squareFootage: 2500,
        address: "456 Oak Avenue, Springfield, IL 62704",
        description: [
            "Spacious family home with a large backyard, perfect for entertaining.",
            "Features a newly renovated kitchen with granite countertops and stainless steel appliances.",
            "Located in a quiet, family-friendly neighborhood with excellent schools.",
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop1img1/800/600", alt: "Living room" },
            { id: "img2", url: "https://picsum.photos/seed/prop1img2/800/600", alt: "Kitchen" },
            { id: "img3", url: "https://picsum.photos/seed/prop1img3/800/600", alt: "Master bedroom" },
            { id: "img4", url: "https://picsum.photos/seed/prop1img4/800/600", alt: "Backyard" },
            { id: "img5", url: "https://picsum.photos/seed/prop1img5/800/600", alt: "Dining area" },
        ],
        interiorFeatures: ["Hardwood floors", "Central AC", "Fireplace", "Walk-in closet in master"],
        exteriorFeatures: ["2-car garage", "Deck", "Fenced yard", "Mature trees"],
        yearBuilt: 2005,
        schools: [
            { name: "Oakwood Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "0.8 miles" },
            { name: "Springfield Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "1.5 miles" },
            { name: "Lincoln High", rating: "9/10", type: "Public", grades: "9-12", distance: "2.1 miles" },
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$6,200", taxAssessment: "$700,000" },
            { year: 2022, propertyTaxes: "$6,000", taxAssessment: "$680,000" },
        ],
        agent: {
            name: "John Davis",
            title: "Lead Real Estate Agent",
            phone: "(555) 987-6543",
            imageUrl: "https://picsum.photos/seed/agent1/100/100",
        },
        paymentCalculator: {
            loanAmount: "$600,000",
            downPayment: "$150,000",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$3,675",
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$750,000", date: "April 15, 2024" },
            { event: "Price change", price: "$765,000", date: "March 20, 2024" },
            { event: "Sold", price: "$680,000", date: "July 10, 2019" },
        ],
        latitude: 39.7817,
        longitude: -89.6501,
    },
    {
        id: "2",
        price: "$1,250,000",
        bedrooms: 5,
        bathrooms: 4.5,
        squareFootage: 4200,
        address: "789 Pine Lane, Beverly Hills, CA 90210",
        description: [
            "Luxurious estate with breathtaking city views and a private pool.",
            "Gourmet kitchen, home theater, and expansive outdoor living spaces.",
            "Exclusive gated community offering privacy and security.",
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop2img1/800/600", alt: "Exterior front" },
            { id: "img2", url: "https://picsum.photos/seed/prop2img2/800/600", alt: "Pool and patio" },
            { id: "img3", url: "https://picsum.photos/seed/prop2img3/800/600", alt: "Gourmet kitchen" },
            { id: "img4", url: "https://picsum.photos/seed/prop2img4/800/600", alt: "Home theater" },
            { id: "img5", url: "https://picsum.photos/seed/prop2img5/800/600", alt: "Master suite" },
        ],
        interiorFeatures: ["Marble flooring", "Smart home system", "Wine cellar", "Gym", "Sauna"],
        exteriorFeatures: ["3-car garage", "Infinity pool", "Outdoor kitchen", "Guest house", "Tennis court"],
        yearBuilt: 2018,
        schools: [
            { name: "Beverly Vista Elementary", rating: "10/10", type: "Public", grades: "K-8", distance: "1.2 miles" },
            { name: "Beverly Hills High", rating: "9/10", type: "Public", grades: "9-12", distance: "2.5 miles" },
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$15,500", taxAssessment: "$1,200,000" },
            { year: 2022, propertyTaxes: "$15,000", taxAssessment: "$1,150,000" },
        ],
        agent: {
            name: "Emily Carter",
            title: "Luxury Property Specialist",
            phone: "(555) 111-2222",
            imageUrl: "https://picsum.photos/seed/agent2/100/100",
        },
        paymentCalculator: {
            loanAmount: "$1,000,000",
            downPayment: "$250,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$5,995",
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,250,000", date: "May 01, 2024" },
            { event: "Built", price: "N/A", date: "January 10, 2018" },
        ],
        latitude: 34.0736,
        longitude: -118.4004,
    },
    {
        id: "3",
        price: "$320,000",
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1100,
        address: "101 River Street, Apt 5B, Austin, TX 78701",
        description: [
            "Charming downtown condo with river views and modern amenities.",
            "Open concept living area, updated bathroom, and a private balcony.",
            "Walking distance to restaurants, shops, and entertainment.",
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop3img1/800/600", alt: "Living area view" },
            { id: "img2", url: "https://picsum.photos/seed/prop3img2/800/600", alt: "Balcony" },
            { id: "img3", url: "https://picsum.photos/seed/prop3img3/800/600", alt: "Kitchenette" },
            { id: "img4", url: "https://picsum.photos/seed/prop3img4/800/600", alt: "Bedroom" },
            { id: "img5", url: "https://picsum.photos/seed/prop3img5/800/600", alt: "Building exterior" },
        ],
        interiorFeatures: ["Concrete floors", "Exposed brick", "In-unit laundry", "Smart thermostat"],
        exteriorFeatures: ["Community pool", "Fitness center", "Secure entry", "Covered parking space"],
        yearBuilt: 2015,
        schools: [
            { name: "Zilker Elementary", rating: "7/10", type: "Public", grades: "K-5", distance: "2.0 miles" },
            { name: "O. Henry Middle", rating: "6/10", type: "Public", grades: "6-8", distance: "3.1 miles" },
            { name: "Austin High", rating: "8/10", type: "Public", grades: "9-12", distance: "1.5 miles" },
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$3,800", taxAssessment: "$310,000" },
            { year: 2022, propertyTaxes: "$3,700", taxAssessment: "$300,000" },
        ],
        agent: {
            name: "Michael Lee",
            title: "Condo Specialist",
            phone: "(555) 333-4444",
            imageUrl: "https://picsum.photos/seed/agent3/100/100",
        },
        paymentCalculator: {
            loanAmount: "$256,000",
            downPayment: "$64,000",
            interestRate: "6.8%",
            loanTerm: "30 years",
            monthlyPayment: "$1,660",
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$320,000", date: "March 01, 2024" },
            { event: "Sold", price: "$290,000", date: "October 20, 2020" },
        ],
        latitude: 30.2672,
        longitude: -97.7431,
    },
    {
        id: "4",
        price: "$550,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 1950,
        address: "222 Mountain View Rd, Denver, CO 80202",
        description: [
            "Modern townhouse with stunning mountain views from the rooftop deck.",
            "Open floor plan, high ceilings, and energy-efficient appliances.",
            "Close to hiking trails and a short drive to downtown Denver.",
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop4img1/800/600", alt: "Townhouse exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop4img2/800/600", alt: "Rooftop deck view" },
            { id: "img3", url: "https://picsum.photos/seed/prop4img3/800/600", alt: "Living room interior" },
            { id: "img4", url: "https://picsum.photos/seed/prop4img4/800/600", alt: "Modern kitchen" },
            { id: "img5", url: "https://picsum.photos/seed/prop4img5/800/600", alt: "Master bathroom" },
        ],
        interiorFeatures: ["Hardwood floors", "Quartz countertops", "Stainless steel appliances", "Gas fireplace"],
        exteriorFeatures: ["Rooftop deck", "Attached 2-car garage", "Small private yard", "Low-maintenance landscaping"],
        yearBuilt: 2019,
        schools: [
            { name: "Denver North High", rating: "7/10", type: "Public", grades: "9-12", distance: "1.8 miles" },
            { name: "Skinner Middle", rating: "6/10", type: "Public", grades: "6-8", distance: "2.2 miles" },
            { name: "Edison Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "1.1 miles" },
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$4,800", taxAssessment: "$530,000" },
            { year: 2022, propertyTaxes: "$4,650", taxAssessment: "$515,000" },
        ],
        agent: {
            name: "Sarah Miller",
            title: "Urban Living Expert",
            phone: "(555) 567-8901",
            imageUrl: "https://picsum.photos/seed/agent4/100/100",
        },
        paymentCalculator: {
            loanAmount: "$440,000",
            downPayment: "$110,000",
            interestRate: "6.3%",
            loanTerm: "30 years",
            monthlyPayment: "$2,720",
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$550,000", date: "February 10, 2024" },
            { event: "Sold", price: "$510,000", date: "June 05, 2021" },
        ],
        latitude: 39.7392,
        longitude: -104.9903,
    },
    {
        id: "5",
        price: "$980,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3200,
        address: "77 Coastal Drive, Miami Beach, FL 33139",
        description: [
            "Beautiful waterfront property with direct ocean access and private dock.",
            "Completely remodeled with modern finishes and impact windows.",
            "Spacious outdoor area with pool and summer kitchen, ideal for Florida living.",
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop5img1/800/600", alt: "Waterfront view" },
            { id: "img2", url: "https://picsum.photos/seed/prop5img2/800/600", alt: "Pool area" },
            { id: "img3", url: "https://picsum.photos/seed/prop5img3/800/600", alt: "Modern living room" },
            { id: "img4", url: "https://picsum.photos/seed/prop5img4/800/600", alt: "Dock and boat lift" },
            { id: "img5", url: "https://picsum.photos/seed/prop5img5/800/600", alt: "Master suite balcony" },
        ],
        interiorFeatures: ["Marble floors", "Gourmet kitchen", "Impact windows and doors", "Elevator", "Smart home technology"],
        exteriorFeatures: ["Private dock", "Heated pool", "Summer kitchen", "Lush landscaping", "2-car garage"],
        yearBuilt: 1998,
        schools: [
            { name: "Miami Beach Senior High", rating: "7/10", type: "Public", grades: "9-12", distance: "3.5 miles" },
            { name: "Nautilus Middle School", rating: "6/10", type: "Public", grades: "6-8", distance: "2.8 miles" },
            { name: "North Beach Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "1.5 miles" },
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$12,500", taxAssessment: "$950,000" },
            { year: 2022, propertyTaxes: "$12,000", taxAssessment: "$920,000" },
        ],
        agent: {
            name: "Carlos Gomez",
            title: "Waterfront Property Specialist",
            phone: "(555) 246-1357",
            imageUrl: "https://picsum.photos/seed/agent5/100/100",
        },
        paymentCalculator: {
            loanAmount: "$784,000",
            downPayment: "$196,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$4,765",
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$980,000", date: "January 20, 2024" },
            { event: "Remodeled", price: "N/A", date: "Completed July 2022" },
            { event: "Sold", price: "$750,000", date: "March 10, 2015" },
        ],
        latitude: 25.7907,
        longitude: -80.1300,
    },
    {
        id: "6",
        price: "$210,000",
        bedrooms: 1,
        bathrooms: 1,
        squareFootage: 750,
        address: "300 University Ave, Unit 205, Palo Alto, CA 94301",
        description: [
            "Compact and modern studio apartment in the heart of Palo Alto.",
            "Perfect for students or young professionals, steps away from University Avenue.",
            "Building amenities include a gym and a shared rooftop terrace.",
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop6img1/800/600", alt: "Studio living space" },
            { id: "img2", url: "https://picsum.photos/seed/prop6img2/800/600", alt: "Kitchenette" },
            { id: "img3", url: "https://picsum.photos/seed/prop6img3/800/600", alt: "Rooftop terrace view" },
        ],
        interiorFeatures: ["Hardwood floors", "Efficient layout", "In-unit washer/dryer combo", "Large windows"],
        exteriorFeatures: ["Shared rooftop terrace", "Gym access", "Bike storage", "Secure building entry"],
        yearBuilt: 2010,
        schools: [
            { name: "Palo Alto High School", rating: "10/10", type: "Public", grades: "9-12", distance: "1.0 miles" },
            { name: "Jordan Middle School", rating: "9/10", type: "Public", grades: "6-8", distance: "1.5 miles" },
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$2,800", taxAssessment: "$200,000" },
            { year: 2022, propertyTaxes: "$2,750", taxAssessment: "$195,000" },
        ],
        agent: {
            name: "Jennifer Chen",
            title: "Silicon Valley Rentals",
            phone: "(555) 777-8888",
            imageUrl: "https://picsum.photos/seed/agent6/100/100",
        },
        paymentCalculator: {
            loanAmount: "$168,000",
            downPayment: "$42,000",
            interestRate: "7.0%",
            loanTerm: "30 years",
            monthlyPayment: "$1,117",
        },
        propertyHistory: [
            { event: "Listed for rent", price: "$3,500/mo", date: "April 01, 2024" },
            { event: "Sold", price: "$190,000", date: "August 15, 2018" },
        ],
        latitude: 37.4419,
        longitude: -122.1430,
    }
];

// Combine original properties with the additional properties
export const mockProperties: Property[] = [...originalProperties, ...additionalProperties];

export function getPropertyById(id: string): Property | undefined {
    return mockProperties.find(property => property.id === id);
}

export function getSimilarHomes(zpid: string): Property[] {
    // Return up to 3 other properties, excluding the current one
    return mockProperties.filter(property => property.id !== zpid).slice(0, 3);
} 