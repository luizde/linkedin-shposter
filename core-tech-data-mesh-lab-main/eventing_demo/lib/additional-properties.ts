import { Property, PropertyImage } from "./mock-data";

export const additionalProperties: Property[] = [
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
    },
    {
        id: "7",
        price: "$625,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1850,
        address: "422 Hillcrest Avenue, Portland, OR 97201",
        description: [
            "Charming craftsman home in a vibrant neighborhood with original details and modern updates.",
            "Remodeled kitchen with quartz countertops and stainless steel appliances.",
            "Private backyard with mature landscaping and a covered patio perfect for entertaining."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop7img1/800/600", alt: "Craftsman exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop7img2/800/600", alt: "Updated kitchen" },
            { id: "img3", url: "https://picsum.photos/seed/prop7img3/800/600", alt: "Living room with fireplace" }
        ],
        interiorFeatures: ["Original hardwood floors", "Built-in bookshelves", "Updated bathrooms", "Fireplace"],
        exteriorFeatures: ["Front porch", "Fenced yard", "Garden beds", "Detached garage"],
        yearBuilt: 1924,
        schools: [
            { name: "Lincoln Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.6 miles" },
            { name: "West Middle School", rating: "8/10", type: "Public", grades: "6-8", distance: "1.2 miles" },
            { name: "Roosevelt High", rating: "7/10", type: "Public", grades: "9-12", distance: "2.0 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$5,200", taxAssessment: "$580,000" },
            { year: 2022, propertyTaxes: "$5,050", taxAssessment: "$560,000" }
        ],
        agent: {
            name: "Rebecca Chen",
            title: "Historic Home Specialist",
            phone: "(555) 123-4567",
            imageUrl: "https://picsum.photos/seed/agent7/100/100"
        },
        paymentCalculator: {
            loanAmount: "$500,000",
            downPayment: "$125,000",
            interestRate: "6.5%",
            loanTerm: "30 years",
            monthlyPayment: "$3,160"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$625,000", date: "May 10, 2024" },
            { event: "Sold", price: "$490,000", date: "April 15, 2018" }
        ],
        latitude: 45.5231,
        longitude: -122.6765
    },
    {
        id: "8",
        price: "$1,550,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3300,
        address: "78 Sunset Boulevard, Seattle, WA 98109",
        description: [
            "Contemporary architectural gem with stunning views of Puget Sound and the Olympic Mountains.",
            "Open concept living with floor-to-ceiling windows that flood the space with natural light.",
            "Smart home features throughout, including integrated audio, security, and climate control."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop8img1/800/600", alt: "Modern exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop8img2/800/600", alt: "Living room with view" },
            { id: "img3", url: "https://picsum.photos/seed/prop8img3/800/600", alt: "Gourmet kitchen" }
        ],
        interiorFeatures: ["Radiant floor heating", "Glass staircase", "Media room", "Chef's kitchen"],
        exteriorFeatures: ["Roof deck", "Landscaped terraces", "Electric vehicle charging", "Outdoor kitchen"],
        yearBuilt: 2020,
        schools: [
            { name: "Queen Anne Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.9 miles" },
            { name: "McClure Middle School", rating: "7/10", type: "Public", grades: "6-8", distance: "1.5 miles" },
            { name: "Ballard High School", rating: "8/10", type: "Public", grades: "9-12", distance: "2.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$17,300", taxAssessment: "$1,520,000" },
            { year: 2022, propertyTaxes: "$16,900", taxAssessment: "$1,480,000" }
        ],
        agent: {
            name: "Jason Winters",
            title: "Luxury Real Estate Advisor",
            phone: "(555) 987-6543",
            imageUrl: "https://picsum.photos/seed/agent8/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,240,000",
            downPayment: "$310,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$7,515"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,550,000", date: "June 1, 2024" },
            { event: "Sold", price: "$1,420,000", date: "November 10, 2021" }
        ],
        latitude: 47.6205,
        longitude: -122.3493
    },
    {
        id: "9",
        price: "$389,900",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1475,
        address: "512 Oakwood Drive, Nashville, TN 37204",
        description: [
            "Beautifully renovated ranch-style home in sought-after Green Hills neighborhood.",
            "Open floor plan with a stylish kitchen featuring granite countertops and breakfast bar.",
            "Large fenced backyard with covered patio and plenty of space for outdoor activities."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop9img1/800/600", alt: "Ranch exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop9img2/800/600", alt: "Open concept kitchen and living" },
            { id: "img3", url: "https://picsum.photos/seed/prop9img3/800/600", alt: "Backyard with patio" }
        ],
        interiorFeatures: ["Updated fixtures", "New carpet in bedrooms", "Recessed lighting", "Laundry room"],
        exteriorFeatures: ["New roof (2023)", "Professional landscaping", "Irrigation system", "Garden shed"],
        yearBuilt: 1968,
        schools: [
            { name: "Julia Green Elementary", rating: "10/10", type: "Public", grades: "K-4", distance: "0.7 miles" },
            { name: "JT Moore Middle", rating: "8/10", type: "Public", grades: "5-8", distance: "1.2 miles" },
            { name: "Hillsboro High", rating: "7/10", type: "Public", grades: "9-12", distance: "1.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$3,450", taxAssessment: "$365,000" },
            { year: 2022, propertyTaxes: "$3,320", taxAssessment: "$350,000" }
        ],
        agent: {
            name: "Olivia Thompson",
            title: "Green Hills Specialist",
            phone: "(555) 234-5678",
            imageUrl: "https://picsum.photos/seed/agent9/100/100"
        },
        paymentCalculator: {
            loanAmount: "$311,920",
            downPayment: "$77,980",
            interestRate: "6.3%",
            loanTerm: "30 years",
            monthlyPayment: "$1,930"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$389,900", date: "May 15, 2024" },
            { event: "Sold", price: "$290,000", date: "June 20, 2019" },
            { event: "Renovation completed", price: "N/A", date: "March 2024" }
        ],
        latitude: 36.1095,
        longitude: -86.8160
    },
    {
        id: "10",
        price: "$879,500",
        bedrooms: 5,
        bathrooms: 4,
        squareFootage: 3850,
        address: "224 Lakeview Circle, Chicago, IL 60614",
        description: [
            "Elegant brownstone with historic charm and modern amenities in Lincoln Park.",
            "Four levels of living space featuring gorgeous millwork and high ceilings.",
            "Chef's kitchen with top-of-the-line appliances and custom cabinetry."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop10img1/800/600", alt: "Brownstone exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop10img2/800/600", alt: "Formal living room" },
            { id: "img3", url: "https://picsum.photos/seed/prop10img3/800/600", alt: "Gourmet kitchen" }
        ],
        interiorFeatures: ["Crown molding", "Bay windows", "Wine cellar", "Custom built-ins"],
        exteriorFeatures: ["Rooftop deck", "Garden patio", "Brick facade", "Iron fencing"],
        yearBuilt: 1895,
        schools: [
            { name: "Abraham Lincoln Elementary", rating: "9/10", type: "Public", grades: "K-8", distance: "0.4 miles" },
            { name: "Lincoln Park High School", rating: "8/10", type: "Public", grades: "9-12", distance: "1.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$12,350", taxAssessment: "$860,000" },
            { year: 2022, propertyTaxes: "$11,980", taxAssessment: "$830,000" }
        ],
        agent: {
            name: "Marcus Reynolds",
            title: "Historic Properties Expert",
            phone: "(555) 345-6789",
            imageUrl: "https://picsum.photos/seed/agent10/100/100"
        },
        paymentCalculator: {
            loanAmount: "$703,600",
            downPayment: "$175,900",
            interestRate: "5.9%",
            loanTerm: "30 years",
            monthlyPayment: "$4,175"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$879,500", date: "March 25, 2024" },
            { event: "Sold", price: "$720,000", date: "August 12, 2017" },
            { event: "Listed for sale", price: "$725,000", date: "July 5, 2017" }
        ],
        latitude: 41.9231,
        longitude: -87.6530
    },
    {
        id: "11",
        price: "$529,900",
        bedrooms: 4,
        bathrooms: 3,
        squareFootage: 2250,
        address: "35 Magnolia Lane, Atlanta, GA 30305",
        description: [
            "Beautiful Southern-style home with a welcoming front porch in prestigious Buckhead.",
            "Bright and airy interior with an open floor plan and newly refinished hardwood floors.",
            "Private backyard oasis with a custom deck, fire pit, and professional landscaping."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop11img1/800/600", alt: "Southern style exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop11img2/800/600", alt: "Spacious living area" },
            { id: "img3", url: "https://picsum.photos/seed/prop11img3/800/600", alt: "Backyard deck" }
        ],
        interiorFeatures: ["Coffered ceilings", "Wainscoting", "Gas fireplace", "Mudroom"],
        exteriorFeatures: ["Circular driveway", "Mature landscaping", "Irrigation system", "Two-car garage"],
        yearBuilt: 2008,
        schools: [
            { name: "Sarah Smith Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.8 miles" },
            { name: "Sutton Middle School", rating: "8/10", type: "Public", grades: "6-8", distance: "1.5 miles" },
            { name: "North Atlanta High", rating: "7/10", type: "Public", grades: "9-12", distance: "2.3 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$6,980", taxAssessment: "$510,000" },
            { year: 2022, propertyTaxes: "$6,750", taxAssessment: "$495,000" }
        ],
        agent: {
            name: "Sophia Williams",
            title: "Buckhead Real Estate Specialist",
            phone: "(555) 456-7890",
            imageUrl: "https://picsum.photos/seed/agent11/100/100"
        },
        paymentCalculator: {
            loanAmount: "$423,920",
            downPayment: "$105,980",
            interestRate: "6.4%",
            loanTerm: "30 years",
            monthlyPayment: "$2,650"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$529,900", date: "April 8, 2024" },
            { event: "Sold", price: "$485,000", date: "May 22, 2018" }
        ],
        latitude: 33.8399,
        longitude: -84.3773
    },
    {
        id: "12",
        price: "$1,895,000",
        bedrooms: 5,
        bathrooms: 5.5,
        squareFootage: 4800,
        address: "742 Oceanfront Drive, San Diego, CA 92037",
        description: [
            "Spectacular contemporary beach house with panoramic ocean views in La Jolla.",
            "Floor-to-ceiling windows showcase the breathtaking sunsets and coastline.",
            "Resort-style outdoor living with infinity pool, spa, and multiple entertainment areas."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop12img1/800/600", alt: "Ocean view exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop12img2/800/600", alt: "Living area with ocean view" },
            { id: "img3", url: "https://picsum.photos/seed/prop12img3/800/600", alt: "Infinity pool" }
        ],
        interiorFeatures: ["Smart home technology", "Floating staircase", "Home theater", "Wine room"],
        exteriorFeatures: ["Infinity pool", "Outdoor kitchen", "Fire feature", "Roof deck"],
        yearBuilt: 2019,
        schools: [
            { name: "La Jolla Elementary", rating: "10/10", type: "Public", grades: "K-5", distance: "1.2 miles" },
            { name: "Muirlands Middle", rating: "9/10", type: "Public", grades: "6-8", distance: "1.8 miles" },
            { name: "La Jolla High", rating: "9/10", type: "Public", grades: "9-12", distance: "2.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$21,850", taxAssessment: "$1,850,000" },
            { year: 2022, propertyTaxes: "$21,200", taxAssessment: "$1,800,000" }
        ],
        agent: {
            name: "David Cortez",
            title: "Luxury Coastal Properties",
            phone: "(555) 567-8901",
            imageUrl: "https://picsum.photos/seed/agent12/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,516,000",
            downPayment: "$379,000",
            interestRate: "5.8%",
            loanTerm: "30 years",
            monthlyPayment: "$8,895"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,895,000", date: "June 15, 2024" },
            { event: "Sold", price: "$1,750,000", date: "September 30, 2020" }
        ],
        latitude: 32.8328,
        longitude: -117.2713
    },
    {
        id: "13",
        price: "$435,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 1950,
        address: "128 Pine Street, Minneapolis, MN 55405",
        description: [
            "Charming Tudor-style home in the desirable Kenwood neighborhood.",
            "Original character blends with thoughtful updates throughout.",
            "Gorgeous perennial gardens and walking distance to Lake of the Isles."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop13img1/800/600", alt: "Tudor exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop13img2/800/600", alt: "Living room with fireplace" },
            { id: "img3", url: "https://picsum.photos/seed/prop13img3/800/600", alt: "Garden view" }
        ],
        interiorFeatures: ["Arched doorways", "Built-in buffet", "Coved ceilings", "Leaded glass windows"],
        exteriorFeatures: ["Brick patio", "Perennial gardens", "Detached garage", "Stone walkway"],
        yearBuilt: 1923,
        schools: [
            { name: "Kenwood Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "0.5 miles" },
            { name: "Anwatin Middle School", rating: "7/10", type: "Public", grades: "6-8", distance: "1.4 miles" },
            { name: "Southwest High", rating: "8/10", type: "Public", grades: "9-12", distance: "2.6 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$5,480", taxAssessment: "$425,000" },
            { year: 2022, propertyTaxes: "$5,320", taxAssessment: "$415,000" }
        ],
        agent: {
            name: "Paul Henderson",
            title: "Historic Home Specialist",
            phone: "(555) 678-9012",
            imageUrl: "https://picsum.photos/seed/agent13/100/100"
        },
        paymentCalculator: {
            loanAmount: "$348,000",
            downPayment: "$87,000",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$2,135"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$435,000", date: "May 5, 2024" },
            { event: "Sold", price: "$365,000", date: "July 15, 2016" }
        ],
        latitude: 44.9612,
        longitude: -93.3022
    },
    {
        id: "14",
        price: "$699,000",
        bedrooms: 4,
        bathrooms: 3,
        squareFootage: 2650,
        address: "1542 Sycamore Avenue, Austin, TX 78704",
        description: [
            "Contemporary farmhouse in vibrant South Austin with designer finishes throughout.",
            "Stunning open-concept main floor with 10-foot ceilings and wide plank oak floors.",
            "Private backyard retreat with covered deck, fire pit, and native landscaping."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop14img1/800/600", alt: "Farmhouse exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop14img2/800/600", alt: "Open concept living" },
            { id: "img3", url: "https://picsum.photos/seed/prop14img3/800/600", alt: "Backyard deck" }
        ],
        interiorFeatures: ["Shiplap accent walls", "Custom lighting", "Barn doors", "Luxury vinyl plank flooring"],
        exteriorFeatures: ["Metal roof", "Board and batten siding", "Drought-resistant landscaping", "Rain barrel system"],
        yearBuilt: 2018,
        schools: [
            { name: "Zilker Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.7 miles" },
            { name: "O. Henry Middle School", rating: "8/10", type: "Public", grades: "6-8", distance: "1.9 miles" },
            { name: "Austin High School", rating: "8/10", type: "Public", grades: "9-12", distance: "2.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$14,380", taxAssessment: "$680,000" },
            { year: 2022, propertyTaxes: "$13,860", taxAssessment: "$655,000" }
        ],
        agent: {
            name: "Lauren Martinez",
            title: "South Austin Expert",
            phone: "(555) 789-0123",
            imageUrl: "https://picsum.photos/seed/agent14/100/100"
        },
        paymentCalculator: {
            loanAmount: "$559,200",
            downPayment: "$139,800",
            interestRate: "6.3%",
            loanTerm: "30 years",
            monthlyPayment: "$3,460"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$699,000", date: "April 20, 2024" },
            { event: "Sold", price: "$615,000", date: "March 5, 2020" }
        ],
        latitude: 30.2478,
        longitude: -97.7648
    },
    {
        id: "15",
        price: "$259,900",
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1100,
        address: "505 Central Avenue, Unit 302, Detroit, MI 48201",
        description: [
            "Stylish industrial loft in the heart of Detroit's revitalized Midtown district.",
            "Exposed brick walls, concrete floors, and soaring ceilings create an authentic urban feel.",
            "Building amenities include rooftop terrace, fitness center, and secure parking."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop15img1/800/600", alt: "Industrial loft interior" },
            { id: "img2", url: "https://picsum.photos/seed/prop15img2/800/600", alt: "Exposed brick bedroom" },
            { id: "img3", url: "https://picsum.photos/seed/prop15img3/800/600", alt: "Rooftop terrace" }
        ],
        interiorFeatures: ["Exposed brick", "Original timber beams", "Industrial windows", "Concrete floors"],
        exteriorFeatures: ["Rooftop deck", "Secure entry", "Reserved parking", "Bike storage"],
        yearBuilt: 1926,
        schools: [
            { name: "Burton International Academy", rating: "7/10", type: "Public", grades: "K-8", distance: "1.1 miles" },
            { name: "Cass Technical High School", rating: "8/10", type: "Public", grades: "9-12", distance: "1.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$3,750", taxAssessment: "$245,000" },
            { year: 2022, propertyTaxes: "$3,580", taxAssessment: "$235,000" }
        ],
        agent: {
            name: "Andre Wilson",
            title: "Urban Development Specialist",
            phone: "(555) 890-1234",
            imageUrl: "https://picsum.photos/seed/agent15/100/100"
        },
        paymentCalculator: {
            loanAmount: "$207,920",
            downPayment: "$51,980",
            interestRate: "6.5%",
            loanTerm: "30 years",
            monthlyPayment: "$1,315"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$259,900", date: "May 28, 2024" },
            { event: "Sold", price: "$220,000", date: "October 15, 2019" },
            { event: "Building converted to condos", price: "N/A", date: "January 2015" }
        ],
        latitude: 42.3359,
        longitude: -83.0567
    },
    {
        id: "16",
        price: "$475,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1780,
        address: "924 Highland Street, Phoenix, AZ 85016",
        description: [
            "Stunning mid-century modern home completely renovated with designer touches.",
            "Bright interior with clerestory windows, vaulted ceilings, and terrazzo floors.",
            "Resort-style backyard featuring saltwater pool, outdoor shower, and cactus garden."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop16img1/800/600", alt: "Mid-century exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop16img2/800/600", alt: "Living area with vaulted ceiling" },
            { id: "img3", url: "https://picsum.photos/seed/prop16img3/800/600", alt: "Backyard pool" }
        ],
        interiorFeatures: ["Terrazzo floors", "Clerestory windows", "Waterfall countertops", "Custom cabinetry"],
        exteriorFeatures: ["Saltwater pool", "Desert landscaping", "Outdoor shower", "Carport"],
        yearBuilt: 1958,
        schools: [
            { name: "Arcadia Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "0.9 miles" },
            { name: "Ingleside Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "1.4 miles" },
            { name: "Arcadia High", rating: "8/10", type: "Public", grades: "9-12", distance: "2.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$3,950", taxAssessment: "$460,000" },
            { year: 2022, propertyTaxes: "$3,800", taxAssessment: "$445,000" }
        ],
        agent: {
            name: "Natalie Rodriguez",
            title: "Mid-Century Architecture Expert",
            phone: "(555) 901-2345",
            imageUrl: "https://picsum.photos/seed/agent16/100/100"
        },
        paymentCalculator: {
            loanAmount: "$380,000",
            downPayment: "$95,000",
            interestRate: "6.4%",
            loanTerm: "30 years",
            monthlyPayment: "$2,380"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$475,000", date: "May 1, 2024" },
            { event: "Renovation completed", price: "N/A", date: "February 2024" },
            { event: "Sold", price: "$320,000", date: "August 25, 2021" }
        ],
        latitude: 33.5128,
        longitude: -112.0184
    },
    {
        id: "17",
        price: "$725,000",
        bedrooms: 4,
        bathrooms: 3,
        squareFootage: 2200,
        address: "843 Maple Drive, Denver, CO 80209",
        description: [
            "Contemporary urban townhome in the heart of Denver's vibrant Washington Park neighborhood.",
            "Open concept main floor with designer kitchen featuring quartz waterfall island and premium appliances.",
            "Rooftop deck with panoramic mountain and city views, perfect for entertaining."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop17img1/800/600", alt: "Modern townhome exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop17img2/800/600", alt: "Open concept kitchen and living" },
            { id: "img3", url: "https://picsum.photos/seed/prop17img3/800/600", alt: "Rooftop deck with views" }
        ],
        interiorFeatures: ["White oak flooring", "Floating staircase", "Smart home integration", "Gas fireplace"],
        exteriorFeatures: ["Rooftop deck", "Attached garage", "Low-maintenance landscaping", "Front courtyard"],
        yearBuilt: 2019,
        schools: [
            { name: "Washington Park Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.4 miles" },
            { name: "Merrill Middle School", rating: "8/10", type: "Public", grades: "6-8", distance: "1.2 miles" },
            { name: "South High School", rating: "7/10", type: "Public", grades: "9-12", distance: "1.9 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$6,850", taxAssessment: "$715,000" },
            { year: 2022, propertyTaxes: "$6,650", taxAssessment: "$695,000" }
        ],
        agent: {
            name: "Michael Torres",
            title: "Urban Living Specialist",
            phone: "(555) 234-5678",
            imageUrl: "https://picsum.photos/seed/agent17/100/100"
        },
        paymentCalculator: {
            loanAmount: "$580,000",
            downPayment: "$145,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$3,515"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$725,000", date: "June 8, 2024" },
            { event: "Sold", price: "$675,000", date: "May 12, 2021" }
        ],
        latitude: 39.7088,
        longitude: -104.9746
    },
    {
        id: "18",
        price: "$342,500",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1650,
        address: "456 Oakridge Lane, Raleigh, NC 27607",
        description: [
            "Charming colonial home in established neighborhood with mature trees and sidewalks.",
            "Updated kitchen with subway tile backsplash, stainless appliances, and breakfast nook.",
            "Expansive backyard with deck, vegetable garden, and newly installed privacy fence."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop18img1/800/600", alt: "Colonial exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop18img2/800/600", alt: "Updated kitchen" },
            { id: "img3", url: "https://picsum.photos/seed/prop18img3/800/600", alt: "Backyard with deck" }
        ],
        interiorFeatures: ["Crown molding", "Refinished hardwoods", "Built-in bookshelves", "Wainscoting"],
        exteriorFeatures: ["Brick exterior", "Front porch", "Fenced yard", "Detached garage"],
        yearBuilt: 1985,
        schools: [
            { name: "Root Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.7 miles" },
            { name: "Daniels Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.4 miles" },
            { name: "Broughton High", rating: "7/10", type: "Public", grades: "9-12", distance: "2.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$3,850", taxAssessment: "$335,000" },
            { year: 2022, propertyTaxes: "$3,720", taxAssessment: "$325,000" }
        ],
        agent: {
            name: "Jennifer Abbott",
            title: "Family Home Specialist",
            phone: "(555) 345-6789",
            imageUrl: "https://picsum.photos/seed/agent18/100/100"
        },
        paymentCalculator: {
            loanAmount: "$274,000",
            downPayment: "$68,500",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$1,675"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$342,500", date: "May 22, 2024" },
            { event: "Sold", price: "$298,000", date: "August 15, 2017" }
        ],
        latitude: 35.7924,
        longitude: -78.6851
    },
    {
        id: "19",
        price: "$1,295,000",
        bedrooms: 4,
        bathrooms: 4.5,
        squareFootage: 3850,
        address: "278 Bayshore Drive, Tampa, FL 33611",
        description: [
            "Stunning waterfront property with direct bay access and private dock.",
            "Completely renovated in 2023 with high-end finishes and hurricane impact windows throughout.",
            "Resort-style backyard featuring infinity edge pool, outdoor kitchen, and covered lanai."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop19img1/800/600", alt: "Waterfront exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop19img2/800/600", alt: "Luxury kitchen" },
            { id: "img3", url: "https://picsum.photos/seed/prop19img3/800/600", alt: "Infinity pool with bay view" }
        ],
        interiorFeatures: ["Marble flooring", "Smart home technology", "Wine cellar", "Gourmet kitchen"],
        exteriorFeatures: ["Private dock", "Infinity pool", "Summer kitchen", "Tropical landscaping"],
        yearBuilt: 1995,
        schools: [
            { name: "Grady Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "1.2 miles" },
            { name: "Coleman Middle", rating: "9/10", type: "Public", grades: "6-8", distance: "1.8 miles" },
            { name: "Plant High", rating: "10/10", type: "Public", grades: "9-12", distance: "2.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$18,750", taxAssessment: "$1,250,000" },
            { year: 2022, propertyTaxes: "$15,380", taxAssessment: "$1,025,000" }
        ],
        agent: {
            name: "Carlos Mendez",
            title: "Luxury Waterfront Specialist",
            phone: "(555) 456-7890",
            imageUrl: "https://picsum.photos/seed/agent19/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,036,000",
            downPayment: "$259,000",
            interestRate: "5.9%",
            loanTerm: "30 years",
            monthlyPayment: "$6,145"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,295,000", date: "June 5, 2024" },
            { event: "Renovation completed", price: "N/A", date: "December 2023" },
            { event: "Sold", price: "$950,000", date: "March 10, 2019" }
        ],
        latitude: 27.8942,
        longitude: -82.4856
    },
    {
        id: "20",
        price: "$550,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1750,
        address: "3872 Vista Avenue, Portland, OR 97213",
        description: [
            "Quintessential Portland bungalow completely updated with modern touches while respecting original character.",
            "Chef's kitchen features custom cabinetry, high-end appliances, and spacious eating area.",
            "Professionally landscaped yard with covered patio, fire pit, and raised garden beds."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop20img1/800/600", alt: "Bungalow exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop20img2/800/600", alt: "Modern kitchen" },
            { id: "img3", url: "https://picsum.photos/seed/prop20img3/800/600", alt: "Backyard patio" }
        ],
        interiorFeatures: ["Original hardwoods", "Coved ceilings", "Craftsman built-ins", "Clawfoot tub"],
        exteriorFeatures: ["Front porch", "Raised beds", "Fire pit", "Detached garage"],
        yearBuilt: 1922,
        schools: [
            { name: "Grant Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "0.5 miles" },
            { name: "Beverly Cleary School", rating: "9/10", type: "Public", grades: "K-8", distance: "1.2 miles" },
            { name: "Grant High", rating: "8/10", type: "Public", grades: "9-12", distance: "1.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$6,320", taxAssessment: "$535,000" },
            { year: 2022, propertyTaxes: "$6,150", taxAssessment: "$520,000" }
        ],
        agent: {
            name: "Emma Patterson",
            title: "Historic Home Specialist",
            phone: "(555) 567-8901",
            imageUrl: "https://picsum.photos/seed/agent20/100/100"
        },
        paymentCalculator: {
            loanAmount: "$440,000",
            downPayment: "$110,000",
            interestRate: "6.3%",
            loanTerm: "30 years",
            monthlyPayment: "$2,725"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$550,000", date: "May 15, 2024" },
            { event: "Renovation completed", price: "N/A", date: "January 2024" },
            { event: "Sold", price: "$425,000", date: "June 20, 2018" }
        ],
        latitude: 45.5379,
        longitude: -122.6176
    },
    {
        id: "21",
        price: "$1,850,000",
        bedrooms: 5,
        bathrooms: 5.5,
        squareFootage: 4500,
        address: "42 Lighthouse Point, Newport, RI 02840",
        description: [
            "Spectacular coastal estate with panoramic ocean views and private beach access.",
            "Meticulously renovated with attention to every detail while maintaining historic charm.",
            "Expansive outdoor living spaces including stone terraces, gardens, and oceanfront deck."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop21img1/800/600", alt: "Coastal estate exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop21img2/800/600", alt: "Ocean view living room" },
            { id: "img3", url: "https://picsum.photos/seed/prop21img3/800/600", alt: "Stone terrace with ocean view" }
        ],
        interiorFeatures: ["Custom millwork", "Imported marble", "Wine cellar", "Elevator"],
        exteriorFeatures: ["Private beach access", "Stone terraces", "Professionally landscaped gardens", "Detached carriage house"],
        yearBuilt: 1890,
        schools: [
            { name: "Pell Elementary", rating: "7/10", type: "Public", grades: "K-4", distance: "1.5 miles" },
            { name: "Thompson Middle", rating: "8/10", type: "Public", grades: "5-8", distance: "1.8 miles" },
            { name: "Rogers High", rating: "7/10", type: "Public", grades: "9-12", distance: "2.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$24,350", taxAssessment: "$1,820,000" },
            { year: 2022, propertyTaxes: "$23,850", taxAssessment: "$1,780,000" }
        ],
        agent: {
            name: "Victoria Astor",
            title: "Luxury Coastal Properties",
            phone: "(555) 678-9012",
            imageUrl: "https://picsum.photos/seed/agent21/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,480,000",
            downPayment: "$370,000",
            interestRate: "5.7%",
            loanTerm: "30 years",
            monthlyPayment: "$8,625"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,850,000", date: "June 10, 2024" },
            { event: "Sold", price: "$1,550,000", date: "May 8, 2018" }
        ],
        latitude: 41.4828,
        longitude: -71.3109
    },
    {
        id: "22",
        price: "$285,000",
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1250,
        address: "775 Riverside Lane, Unit 403, Columbus, OH 43215",
        description: [
            "Modern industrial-chic condo in the heart of the Arena District with skyline views.",
            "Open floor plan with concrete floors, exposed ductwork, and floor-to-ceiling windows.",
            "Building amenities include rooftop pool, fitness center, and 24-hour concierge."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop22img1/800/600", alt: "Modern condo interior" },
            { id: "img2", url: "https://picsum.photos/seed/prop22img2/800/600", alt: "City view from balcony" },
            { id: "img3", url: "https://picsum.photos/seed/prop22img3/800/600", alt: "Rooftop pool" }
        ],
        interiorFeatures: ["Quartz countertops", "Stainless appliances", "Custom lighting", "Walk-in closets"],
        exteriorFeatures: ["Private balcony", "Secured parking", "Bike storage", "Dog washing station"],
        yearBuilt: 2016,
        schools: [
            { name: "Nationwide Children's Academy", rating: "7/10", type: "Public", grades: "K-5", distance: "0.9 miles" },
            { name: "Fort Hayes Middle", rating: "6/10", type: "Public", grades: "6-8", distance: "1.7 miles" },
            { name: "Columbus High", rating: "7/10", type: "Public", grades: "9-12", distance: "2.3 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$4,320", taxAssessment: "$275,000" },
            { year: 2022, propertyTaxes: "$4,150", taxAssessment: "$265,000" }
        ],
        agent: {
            name: "Ryan Johnson",
            title: "Urban Living Expert",
            phone: "(555) 789-0123",
            imageUrl: "https://picsum.photos/seed/agent22/100/100"
        },
        paymentCalculator: {
            loanAmount: "$228,000",
            downPayment: "$57,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$1,385"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$285,000", date: "June 2, 2024" },
            { event: "Sold", price: "$245,000", date: "April 12, 2020" }
        ],
        latitude: 39.9696,
        longitude: -83.0026
    },
    {
        id: "23",
        price: "$850,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3100,
        address: "28 Orchard Hill Road, Princeton, NJ 08540",
        description: [
            "Elegant colonial home on a tree-lined street in prestigious neighborhood near Princeton University.",
            "Beautiful formal rooms with intricate moldings, hardwood floors, and multiple fireplaces.",
            "Private backyard oasis with bluestone patio, mature gardens, and heated pool."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop23img1/800/600", alt: "Colonial exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop23img2/800/600", alt: "Formal dining room" },
            { id: "img3", url: "https://picsum.photos/seed/prop23img3/800/600", alt: "Backyard pool" }
        ],
        interiorFeatures: ["Crown molding", "Multiple fireplaces", "Butler's pantry", "Library with built-ins"],
        exteriorFeatures: ["Heated pool", "Bluestone patio", "Professional landscaping", "Attached garage"],
        yearBuilt: 1935,
        schools: [
            { name: "Littlebrook Elementary", rating: "10/10", type: "Public", grades: "K-5", distance: "0.7 miles" },
            { name: "Princeton Middle School", rating: "9/10", type: "Public", grades: "6-8", distance: "1.4 miles" },
            { name: "Princeton High School", rating: "9/10", type: "Public", grades: "9-12", distance: "1.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$18,750", taxAssessment: "$835,000" },
            { year: 2022, propertyTaxes: "$18,200", taxAssessment: "$810,000" }
        ],
        agent: {
            name: "Elizabeth Morgan",
            title: "Princeton Area Specialist",
            phone: "(555) 901-2345",
            imageUrl: "https://picsum.photos/seed/agent23/100/100"
        },
        paymentCalculator: {
            loanAmount: "$680,000",
            downPayment: "$170,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$4,080"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$850,000", date: "May 20, 2024" },
            { event: "Sold", price: "$735,000", date: "July 15, 2016" }
        ],
        latitude: 40.3573,
        longitude: -74.6672
    },
    {
        id: "24",
        price: "$499,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 2050,
        address: "1420 Cedar Street, Boulder, CO 80302",
        description: [
            "Charming Craftsman bungalow within walking distance to Pearl Street and hiking trails.",
            "Thoughtfully updated with high-end finishes while preserving original character and charm.",
            "Sun-filled backyard with flagstone patio, raised garden beds, and mountain views."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop24img1/800/600", alt: "Craftsman bungalow exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop24img2/800/600", alt: "Updated kitchen with original details" },
            { id: "img3", url: "https://picsum.photos/seed/prop24img3/800/600", alt: "Backyard with mountain views" }
        ],
        interiorFeatures: ["Original woodwork", "Stained glass windows", "Updated kitchen", "Home office nook"],
        exteriorFeatures: ["Flagstone patio", "Raised garden beds", "Mature landscaping", "Detached garage"],
        yearBuilt: 1926,
        schools: [
            { name: "Whittier Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.4 miles" },
            { name: "Casey Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.1 miles" },
            { name: "Boulder High", rating: "9/10", type: "Public", grades: "9-12", distance: "1.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$4,250", taxAssessment: "$490,000" },
            { year: 2022, propertyTaxes: "$4,120", taxAssessment: "$475,000" }
        ],
        agent: {
            name: "Daniel Murray",
            title: "Boulder Lifestyle Expert",
            phone: "(555) 012-3456",
            imageUrl: "https://picsum.photos/seed/agent24/100/100"
        },
        paymentCalculator: {
            loanAmount: "$399,200",
            downPayment: "$99,800",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$2,450"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$499,000", date: "June 5, 2024" },
            { event: "Renovation completed", price: "N/A", date: "March 2024" },
            { event: "Sold", price: "$375,000", date: "October 10, 2018" }
        ],
        latitude: 40.0150,
        longitude: -105.2705
    },
    {
        id: "25",
        price: "$1,250,000",
        bedrooms: 4,
        bathrooms: 4,
        squareFootage: 3450,
        address: "84 Harbor View Drive, Charleston, SC 29412",
        description: [
            "Stately Charleston-style home with deep front porch and harbor views in coveted James Island.",
            "Elegant interior featuring heart pine floors, custom millwork, and gourmet chef's kitchen.",
            "Resort-like backyard with saltwater pool, outdoor kitchen, and manicured gardens."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop25img1/800/600", alt: "Charleston-style exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop25img2/800/600", alt: "Elegant formal living room" },
            { id: "img3", url: "https://picsum.photos/seed/prop25img3/800/600", alt: "Backyard pool area" }
        ],
        interiorFeatures: ["Heart pine floors", "Coffered ceilings", "Gas fireplace", "Butler's pantry"],
        exteriorFeatures: ["Front porch", "Saltwater pool", "Outdoor kitchen", "Irrigation system"],
        yearBuilt: 2012,
        schools: [
            { name: "Harbor View Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "0.6 miles" },
            { name: "James Island Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "1.3 miles" },
            { name: "James Island Charter High", rating: "8/10", type: "Public", grades: "9-12", distance: "2.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$14,850", taxAssessment: "$1,235,000" },
            { year: 2022, propertyTaxes: "$14,650", taxAssessment: "$1,220,000" }
        ],
        agent: {
            name: "Sarah Charleston",
            title: "Lowcountry Luxury Expert",
            phone: "(555) 123-4567",
            imageUrl: "https://picsum.photos/seed/agent25/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,000,000",
            downPayment: "$250,000",
            interestRate: "5.9%",
            loanTerm: "30 years",
            monthlyPayment: "$5,935"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,250,000", date: "May 15, 2024" },
            { event: "Sold", price: "$1,050,000", date: "June 20, 2019" }
        ],
        latitude: 32.7628,
        longitude: -79.9748
    },
    {
        id: "26",
        price: "$329,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1650,
        address: "3825 Mountain View Road, Asheville, NC 28806",
        description: [
            "Charming mountain cottage with long-range Blue Ridge Mountain views and privacy.",
            "Cozy interior with stone fireplace, vaulted ceilings, and recently updated kitchen.",
            "Multiple decks and outdoor living spaces to enjoy the stunning natural surroundings."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop26img1/800/600", alt: "Mountain cottage exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop26img2/800/600", alt: "Living room with stone fireplace" },
            { id: "img3", url: "https://picsum.photos/seed/prop26img3/800/600", alt: "Deck with mountain views" }
        ],
        interiorFeatures: ["Stone fireplace", "Vaulted ceilings", "Wood floors", "Loft area"],
        exteriorFeatures: ["Multiple decks", "Fire pit", "Wooded lot", "Carport"],
        yearBuilt: 1995,
        schools: [
            { name: "Sandhill Elementary", rating: "7/10", type: "Public", grades: "K-5", distance: "2.1 miles" },
            { name: "Enka Middle", rating: "6/10", type: "Public", grades: "6-8", distance: "2.8 miles" },
            { name: "Enka High", rating: "7/10", type: "Public", grades: "9-12", distance: "3.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$2,950", taxAssessment: "$320,000" },
            { year: 2022, propertyTaxes: "$2,850", taxAssessment: "$310,000" }
        ],
        agent: {
            name: "Thomas Ridge",
            title: "Mountain Property Specialist",
            phone: "(555) 234-5678",
            imageUrl: "https://picsum.photos/seed/agent26/100/100"
        },
        paymentCalculator: {
            loanAmount: "$263,200",
            downPayment: "$65,800",
            interestRate: "6.3%",
            loanTerm: "30 years",
            monthlyPayment: "$1,635"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$329,000", date: "June 1, 2024" },
            { event: "Kitchen renovation", price: "N/A", date: "November 2023" },
            { event: "Sold", price: "$275,000", date: "May 10, 2017" }
        ],
        latitude: 35.5729,
        longitude: -82.6089
    },
    {
        id: "27",
        price: "$1,675,000",
        bedrooms: 5,
        bathrooms: 4.5,
        squareFootage: 4200,
        address: "1842 Lake Shore Drive, Lake Tahoe, CA 96150",
        description: [
            "Stunning mountain lodge with panoramic lake views and direct access to private beach.",
            "Magnificent great room with soaring ceilings, stone fireplace, and wall of windows.",
            "Expansive outdoor living with multiple decks, hot tub, and professionally designed landscape."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop27img1/800/600", alt: "Mountain lodge exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop27img2/800/600", alt: "Great room with lake view" },
            { id: "img3", url: "https://picsum.photos/seed/prop27img3/800/600", alt: "Deck with lake view" }
        ],
        interiorFeatures: ["Exposed beam ceilings", "Stone fireplace", "Gourmet kitchen", "Wine cellar"],
        exteriorFeatures: ["Private beach access", "Hot tub", "Fire pit", "Heated driveway"],
        yearBuilt: 2008,
        schools: [
            { name: "Tahoe Valley Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "2.3 miles" },
            { name: "South Tahoe Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "3.1 miles" },
            { name: "South Tahoe High", rating: "8/10", type: "Public", grades: "9-12", distance: "3.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$18,750", taxAssessment: "$1,650,000" },
            { year: 2022, propertyTaxes: "$18,250", taxAssessment: "$1,600,000" }
        ],
        agent: {
            name: "Christopher Lodge",
            title: "Luxury Mountain Properties",
            phone: "(555) 345-6789",
            imageUrl: "https://picsum.photos/seed/agent27/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,340,000",
            downPayment: "$335,000",
            interestRate: "5.8%",
            loanTerm: "30 years",
            monthlyPayment: "$7,875"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,675,000", date: "May 25, 2024" },
            { event: "Sold", price: "$1,450,000", date: "August 10, 2017" }
        ],
        latitude: 38.9399,
        longitude: -119.9773
    },
    {
        id: "28",
        price: "$399,500",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1850,
        address: "512 Palm Avenue, St. Petersburg, FL 33701",
        description: [
            "Beautifully renovated 1920s bungalow in the heart of the historic Old Northeast district.",
            "Bright, open floor plan with original hardwood floors, high ceilings, and period details.",
            "Tropical oasis backyard with covered patio, mature palms, and heated saltwater pool."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop28img1/800/600", alt: "Historic bungalow exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop28img2/800/600", alt: "Bright living room with period details" },
            { id: "img3", url: "https://picsum.photos/seed/prop28img3/800/600", alt: "Backyard pool" }
        ],
        interiorFeatures: ["Original hardwoods", "Craftsman details", "Updated kitchen", "Clawfoot tub"],
        exteriorFeatures: ["Front porch", "Heated pool", "Mature landscaping", "Detached garage"],
        yearBuilt: 1925,
        schools: [
            { name: "North Shore Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "0.5 miles" },
            { name: "John Hopkins Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "1.3 miles" },
            { name: "St. Petersburg High", rating: "8/10", type: "Public", grades: "9-12", distance: "1.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$4,950", taxAssessment: "$390,000" },
            { year: 2022, propertyTaxes: "$4,750", taxAssessment: "$375,000" }
        ],
        agent: {
            name: "Melissa Summers",
            title: "Historic District Specialist",
            phone: "(555) 456-7890",
            imageUrl: "https://picsum.photos/seed/agent28/100/100"
        },
        paymentCalculator: {
            loanAmount: "$319,600",
            downPayment: "$79,900",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$1,960"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$399,500", date: "June 5, 2024" },
            { event: "Renovation completed", price: "N/A", date: "January 2024" },
            { event: "Sold", price: "$315,000", date: "April 15, 2019" }
        ],
        latitude: 27.7826,
        longitude: -82.6351
    },
    {
        id: "29",
        price: "$785,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 2950,
        address: "375 Evergreen Terrace, Madison, WI 53711",
        description: [
            "Stunning prairie-style home designed by a Frank Lloyd Wright protégé in sought-after neighborhood.",
            "Harmonious design features natural materials, built-ins, and walls of windows bringing nature inside.",
            "Private, wooded lot with professional landscaping, stone pathways, and meditation garden."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop29img1/800/600", alt: "Prairie-style exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop29img2/800/600", alt: "Living room with built-ins" },
            { id: "img3", url: "https://picsum.photos/seed/prop29img3/800/600", alt: "Meditation garden" }
        ],
        interiorFeatures: ["Built-in cabinetry", "Natural wood finishes", "Art glass windows", "Organic design elements"],
        exteriorFeatures: ["Stone pathways", "Native plantings", "Meditation garden", "Attached garage"],
        yearBuilt: 1962,
        schools: [
            { name: "Shorewood Hills Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.7 miles" },
            { name: "Hamilton Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.2 miles" },
            { name: "West High", rating: "9/10", type: "Public", grades: "9-12", distance: "1.9 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$16,250", taxAssessment: "$775,000" },
            { year: 2022, propertyTaxes: "$15,750", taxAssessment: "$750,000" }
        ],
        agent: {
            name: "Richard Wright",
            title: "Architectural Specialist",
            phone: "(555) 567-8901",
            imageUrl: "https://picsum.photos/seed/agent29/100/100"
        },
        paymentCalculator: {
            loanAmount: "$628,000",
            downPayment: "$157,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$3,765"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$785,000", date: "May 18, 2024" },
            { event: "Renovation completed", price: "N/A", date: "October 2023" },
            { event: "Sold", price: "$650,000", date: "June 20, 2016" }
        ],
        latitude: 43.0667,
        longitude: -89.4185
    },
    {
        id: "30",
        price: "$379,900",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 1950,
        address: "218 Birch Lane, Boise, ID 83702",
        description: [
            "Charming Tudor revival home in Boise's coveted North End neighborhood with vintage character.",
            "Tastefully updated interior with period-appropriate fixtures, leaded glass, and arched doorways.",
            "Enchanting backyard featuring established perennial gardens, brick patio, and mature trees."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop30img1/800/600", alt: "Tudor revival exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop30img2/800/600", alt: "Living room with period details" },
            { id: "img3", url: "https://picsum.photos/seed/prop30img3/800/600", alt: "Garden with brick patio" }
        ],
        interiorFeatures: ["Arched doorways", "Leaded glass windows", "Coved ceilings", "Original hardwoods"],
        exteriorFeatures: ["Tudor details", "Brick patio", "Perennial gardens", "Detached garage"],
        yearBuilt: 1932,
        schools: [
            { name: "Washington Elementary", rating: "9/10", type: "Public", grades: "K-6", distance: "0.4 miles" },
            { name: "North Junior High", rating: "8/10", type: "Public", grades: "7-9", distance: "0.9 miles" },
            { name: "Boise High", rating: "9/10", type: "Public", grades: "10-12", distance: "1.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$4,250", taxAssessment: "$370,000" },
            { year: 2022, propertyTaxes: "$4,050", taxAssessment: "$355,000" }
        ],
        agent: {
            name: "Katherine Bennett",
            title: "Historic Home Expert",
            phone: "(555) 678-9012",
            imageUrl: "https://picsum.photos/seed/agent30/100/100"
        },
        paymentCalculator: {
            loanAmount: "$303,920",
            downPayment: "$75,980",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$1,845"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$379,900", date: "May 30, 2024" },
            { event: "Kitchen and bath remodel", price: "N/A", date: "February 2024" },
            { event: "Sold", price: "$315,000", date: "July 5, 2018" }
        ],
        latitude: 43.6241,
        longitude: -116.2044
    },
    {
        id: "31",
        price: "$1,595,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3750,
        address: "982 Vineyard Road, Sonoma, CA 95476",
        description: [
            "Spectacular wine country estate on 2.5 acres with panoramic vineyard and mountain views.",
            "Mediterranean-inspired architecture with indoor-outdoor living spaces and gourmet kitchen.",
            "Private grounds featuring pool, cabana, outdoor kitchen, and small producing vineyard."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop31img1/800/600", alt: "Wine country estate exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop31img2/800/600", alt: "Great room with vineyard views" },
            { id: "img3", url: "https://picsum.photos/seed/prop31img3/800/600", alt: "Pool with vineyard backdrop" }
        ],
        interiorFeatures: ["Travertine floors", "Beamed ceilings", "Wine cellar", "Chef's kitchen"],
        exteriorFeatures: ["Small vineyard", "Infinity pool", "Outdoor kitchen", "Covered loggia"],
        yearBuilt: 2005,
        schools: [
            { name: "Prestwood Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "2.5 miles" },
            { name: "Adele Harrison Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "3.1 miles" },
            { name: "Sonoma Valley High", rating: "7/10", type: "Public", grades: "9-12", distance: "3.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$19,850", taxAssessment: "$1,580,000" },
            { year: 2022, propertyTaxes: "$19,250", taxAssessment: "$1,540,000" }
        ],
        agent: {
            name: "Isabella Vino",
            title: "Wine Country Properties",
            phone: "(555) 789-0123",
            imageUrl: "https://picsum.photos/seed/agent31/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,276,000",
            downPayment: "$319,000",
            interestRate: "5.8%",
            loanTerm: "30 years",
            monthlyPayment: "$7,495"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,595,000", date: "April 15, 2024" },
            { event: "Sold", price: "$1,375,000", date: "September 20, 2017" }
        ],
        latitude: 38.2919,
        longitude: -122.4580
    },
    {
        id: "32",
        price: "$295,000",
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1100,
        address: "4315 Market Street, Unit 507, Philadelphia, PA 19104",
        description: [
            "Sleek, modern loft in converted historic textile factory in University City.",
            "Industrial elements preserved including exposed brick walls, timber beams, and polished concrete floors.",
            "Building amenities include rooftop lounge, fitness center, and secured parking."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop32img1/800/600", alt: "Industrial loft interior" },
            { id: "img2", url: "https://picsum.photos/seed/prop32img2/800/600", alt: "Exposed brick bedroom" },
            { id: "img3", url: "https://picsum.photos/seed/prop32img3/800/600", alt: "Rooftop lounge" }
        ],
        interiorFeatures: ["Exposed brick", "Polished concrete floors", "Industrial windows", "Open ductwork"],
        exteriorFeatures: ["Rooftop lounge", "Secured entry", "Bike storage", "Covered parking"],
        yearBuilt: 1918,
        schools: [
            { name: "Penn Alexander School", rating: "9/10", type: "Public", grades: "K-8", distance: "0.7 miles" },
            { name: "Science Leadership Academy", rating: "8/10", type: "Public", grades: "9-12", distance: "1.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$3,850", taxAssessment: "$290,000" },
            { year: 2022, propertyTaxes: "$3,650", taxAssessment: "$275,000" }
        ],
        agent: {
            name: "Marcus Jackson",
            title: "Urban Loft Specialist",
            phone: "(555) 890-1234",
            imageUrl: "https://picsum.photos/seed/agent32/100/100"
        },
        paymentCalculator: {
            loanAmount: "$236,000",
            downPayment: "$59,000",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$1,450"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$295,000", date: "May 20, 2024" },
            { event: "Sold", price: "$245,000", date: "August 15, 2019" },
            { event: "Factory conversion to condos", price: "N/A", date: "March 2015" }
        ],
        latitude: 39.9568,
        longitude: -75.2025
    },
    {
        id: "33",
        price: "$1,225,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3350,
        address: "721 Hampton Drive, Santa Fe, NM 87505",
        description: [
            "Authentic adobe home blending traditional Southwestern architecture with modern luxury.",
            "Hand-plastered walls, vigas, kiva fireplaces, and custom tile work throughout.",
            "Breathtaking mountain views from the expansive portal with outdoor kitchen and fire pit."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop33img1/800/600", alt: "Adobe exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop33img2/800/600", alt: "Great room with kiva fireplace" },
            { id: "img3", url: "https://picsum.photos/seed/prop33img3/800/600", alt: "Portal with mountain views" }
        ],
        interiorFeatures: ["Vigas and latillas", "Saltillo tile floors", "Kiva fireplaces", "Hand-troweled plaster"],
        exteriorFeatures: ["Adobe construction", "Outdoor kitchen", "Xeriscape gardens", "Mountain views"],
        yearBuilt: 2010,
        schools: [
            { name: "Wood Gormley Elementary", rating: "9/10", type: "Public", grades: "K-6", distance: "1.5 miles" },
            { name: "Milagro Middle School", rating: "7/10", type: "Public", grades: "7-8", distance: "2.3 miles" },
            { name: "Santa Fe High", rating: "7/10", type: "Public", grades: "9-12", distance: "3.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$7,950", taxAssessment: "$1,200,000" },
            { year: 2022, propertyTaxes: "$7,750", taxAssessment: "$1,175,000" }
        ],
        agent: {
            name: "Elena Sanchez",
            title: "Santa Fe Luxury Specialist",
            phone: "(555) 901-2345",
            imageUrl: "https://picsum.photos/seed/agent33/100/100"
        },
        paymentCalculator: {
            loanAmount: "$980,000",
            downPayment: "$245,000",
            interestRate: "5.9%",
            loanTerm: "30 years",
            monthlyPayment: "$5,820"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,225,000", date: "June 1, 2024" },
            { event: "Sold", price: "$975,000", date: "May 15, 2018" }
        ],
        latitude: 35.6672,
        longitude: -105.9644
    },
    {
        id: "34",
        price: "$515,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 2150,
        address: "3240 Spring Hollow Road, Louisville, KY 40207",
        description: [
            "Beautifully renovated Craftsman in the desirable Crescent Hill neighborhood.",
            "Original character preserved with updated systems, gourmet kitchen, and spa-like bathrooms.",
            "Peaceful backyard oasis with covered deck, professional landscaping, and cozy fire pit."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop34img1/800/600", alt: "Craftsman exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop34img2/800/600", alt: "Gourmet kitchen" },
            { id: "img3", url: "https://picsum.photos/seed/prop34img3/800/600", alt: "Backyard deck" }
        ],
        interiorFeatures: ["Original woodwork", "Custom cabinetry", "Built-in bookshelves", "Clawfoot tub"],
        exteriorFeatures: ["Wraparound porch", "Covered deck", "Fire pit", "Professional landscaping"],
        yearBuilt: 1927,
        schools: [
            { name: "Field Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.6 miles" },
            { name: "Noe Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.2 miles" },
            { name: "Atherton High", rating: "7/10", type: "Public", grades: "9-12", distance: "1.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$5,550", taxAssessment: "$505,000" },
            { year: 2022, propertyTaxes: "$5,350", taxAssessment: "$490,000" }
        ],
        agent: {
            name: "Thomas Bourbon",
            title: "Historic Homes Expert",
            phone: "(555) 012-3456",
            imageUrl: "https://picsum.photos/seed/agent34/100/100"
        },
        paymentCalculator: {
            loanAmount: "$412,000",
            downPayment: "$103,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$2,500"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$515,000", date: "May 25, 2024" },
            { event: "Renovation completed", price: "N/A", date: "February 2024" },
            { event: "Sold", price: "$395,000", date: "October 10, 2019" }
        ],
        latitude: 38.2415,
        longitude: -85.6738
    },
    {
        id: "35",
        price: "$3,450,000",
        bedrooms: 6,
        bathrooms: 7.5,
        squareFootage: 6500,
        address: "17 Oceanfront Lane, East Hampton, NY 11937",
        description: [
            "Magnificent Hamptons estate with private beach access and panoramic ocean views.",
            "Exquisite finishes throughout including wide plank oak floors, custom millwork, and designer lighting.",
            "Resort-style grounds with heated saltwater pool, pool house, outdoor kitchen, and private tennis court."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop35img1/800/600", alt: "Hamptons estate exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop35img2/800/600", alt: "Great room with ocean view" },
            { id: "img3", url: "https://picsum.photos/seed/prop35img3/800/600", alt: "Pool and tennis court" }
        ],
        interiorFeatures: ["Chef's kitchen", "Wine cellar", "Home theater", "Smart home technology"],
        exteriorFeatures: ["Tennis court", "Heated pool", "Pool house", "Beach access"],
        yearBuilt: 2018,
        schools: [
            { name: "East Hampton Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "2.5 miles" },
            { name: "East Hampton Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "2.8 miles" },
            { name: "East Hampton High", rating: "8/10", type: "Public", grades: "9-12", distance: "3.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$42,500", taxAssessment: "$3,400,000" },
            { year: 2022, propertyTaxes: "$41,250", taxAssessment: "$3,300,000" }
        ],
        agent: {
            name: "Victoria Hampton",
            title: "Luxury Coastal Properties",
            phone: "(555) 123-4567",
            imageUrl: "https://picsum.photos/seed/agent35/100/100"
        },
        paymentCalculator: {
            loanAmount: "$2,760,000",
            downPayment: "$690,000",
            interestRate: "5.7%",
            loanTerm: "30 years",
            monthlyPayment: "$16,050"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$3,450,000", date: "April 10, 2024" },
            { event: "Sold", price: "$3,100,000", date: "July 20, 2020" }
        ],
        latitude: 40.9667,
        longitude: -72.1851
    },
    {
        id: "36",
        price: "$320,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1650,
        address: "592 Magnolia Street, New Orleans, LA 70115",
        description: [
            "Classic New Orleans shotgun home with beautiful architectural details in Garden District.",
            "Completely renovated with designer finishes while preserving historic charm and character.",
            "Enchanting private courtyard with mature plantings, fountain, and outdoor dining area."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop36img1/800/600", alt: "Shotgun home exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop36img2/800/600", alt: "Living room with original details" },
            { id: "img3", url: "https://picsum.photos/seed/prop36img3/800/600", alt: "Private courtyard" }
        ],
        interiorFeatures: ["Transom windows", "Heart pine floors", "Ornate moldings", "Clawfoot tub"],
        exteriorFeatures: ["Front porch", "Courtyard", "Fountain", "Wrought iron details"],
        yearBuilt: 1901,
        schools: [
            { name: "Lusher Charter School", rating: "9/10", type: "Charter", grades: "K-5", distance: "0.6 miles" },
            { name: "Lusher Middle", rating: "9/10", type: "Charter", grades: "6-8", distance: "0.8 miles" },
            { name: "Lusher High", rating: "9/10", type: "Charter", grades: "9-12", distance: "1.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$3,850", taxAssessment: "$315,000" },
            { year: 2022, propertyTaxes: "$3,650", taxAssessment: "$300,000" }
        ],
        agent: {
            name: "Gabriel Fontaine",
            title: "Historic District Specialist",
            phone: "(555) 234-5678",
            imageUrl: "https://picsum.photos/seed/agent36/100/100"
        },
        paymentCalculator: {
            loanAmount: "$256,000",
            downPayment: "$64,000",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$1,570"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$320,000", date: "May 30, 2024" },
            { event: "Renovation completed", price: "N/A", date: "December 2023" },
            { event: "Sold", price: "$220,000", date: "March 10, 2020" }
        ],
        latitude: 29.9346,
        longitude: -90.0768
    },
    {
        id: "37",
        price: "$425,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1850,
        address: "4238 Woodlawn Avenue, Dallas, TX 75205",
        description: [
            "Charming Tudor-style cottage in the heart of Highland Park with exceptional curb appeal.",
            "Beautifully maintained original details including arched doorways, built-ins, and hardwood floors.",
            "Private backyard retreat with covered patio, professional landscaping, and mature trees."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop37img1/800/600", alt: "Tudor cottage exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop37img2/800/600", alt: "Living room with arched doorway" },
            { id: "img3", url: "https://picsum.photos/seed/prop37img3/800/600", alt: "Backyard patio" }
        ],
        interiorFeatures: ["Arched doorways", "Original hardwoods", "Period tile work", "Built-in cabinetry"],
        exteriorFeatures: ["Tudor details", "Mature trees", "Covered patio", "Brick pathway"],
        yearBuilt: 1932,
        schools: [
            { name: "Armstrong Elementary", rating: "10/10", type: "Public", grades: "K-4", distance: "0.5 miles" },
            { name: "McCulloch Intermediate", rating: "9/10", type: "Public", grades: "5-6", distance: "1.1 miles" },
            { name: "Highland Park Middle", rating: "9/10", type: "Public", grades: "7-8", distance: "1.3 miles" },
            { name: "Highland Park High", rating: "9/10", type: "Public", grades: "9-12", distance: "1.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$9,850", taxAssessment: "$420,000" },
            { year: 2022, propertyTaxes: "$9,650", taxAssessment: "$410,000" }
        ],
        agent: {
            name: "Caroline Matthews",
            title: "Park Cities Specialist",
            phone: "(555) 345-6789",
            imageUrl: "https://picsum.photos/seed/agent37/100/100"
        },
        paymentCalculator: {
            loanAmount: "$340,000",
            downPayment: "$85,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$2,065"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$425,000", date: "May 15, 2024" },
            { event: "Sold", price: "$375,000", date: "September 20, 2018" }
        ],
        latitude: 32.8312,
        longitude: -96.7975
    },
    {
        id: "38",
        price: "$575,000",
        bedrooms: 4,
        bathrooms: 3,
        squareFootage: 2400,
        address: "2174 Eastlake Avenue, Seattle, WA 98102",
        description: [
            "Stylish Craftsman home in prime Eastlake location with water and city views.",
            "Open-concept main level with chef's kitchen, living room with fireplace, and dining area.",
            "Roof deck offering breathtaking views of Lake Union, Space Needle, and Downtown Seattle."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop38img1/800/600", alt: "Craftsman exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop38img2/800/600", alt: "Open concept living and kitchen" },
            { id: "img3", url: "https://picsum.photos/seed/prop38img3/800/600", alt: "Roof deck with city views" }
        ],
        interiorFeatures: ["Chefs kitchen", "Gas fireplace", "Hardwood floors", "Main floor bedroom"],
        exteriorFeatures: ["Roof deck", "Fenced yard", "Front porch", "Garage"],
        yearBuilt: 1918,
        schools: [
            { name: "TOPS K-8 School", rating: "8/10", type: "Public", grades: "K-8", distance: "0.7 miles" },
            { name: "Garfield High", rating: "8/10", type: "Public", grades: "9-12", distance: "1.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$6,350", taxAssessment: "$565,000" },
            { year: 2022, propertyTaxes: "$6,150", taxAssessment: "$550,000" }
        ],
        agent: {
            name: "Michael Waters",
            title: "Seattle Neighborhoods Expert",
            phone: "(555) 456-7890",
            imageUrl: "https://picsum.photos/seed/agent38/100/100"
        },
        paymentCalculator: {
            loanAmount: "$460,000",
            downPayment: "$115,000",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$2,825"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$575,000", date: "June 1, 2024" },
            { event: "Remodeled kitchen and baths", price: "N/A", date: "January 2024" },
            { event: "Sold", price: "$480,000", date: "August 15, 2019" }
        ],
        latitude: 47.6418,
        longitude: -122.3276
    },
    {
        id: "39",
        price: "$819,500",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3100,
        address: "1524 Hermitage Lane, Charlotte, NC 28207",
        description: [
            "Elegant colonial home in prestigious Myers Park with beautiful mature landscaping.",
            "Grand foyer with curved staircase, formal living and dining rooms, and gourmet chef's kitchen.",
            "Park-like backyard with covered veranda, professional landscaping, and custom lighting."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop39img1/800/600", alt: "Colonial exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop39img2/800/600", alt: "Grand foyer with staircase" },
            { id: "img3", url: "https://picsum.photos/seed/prop39img3/800/600", alt: "Backyard veranda" }
        ],
        interiorFeatures: ["Curved staircase", "Crown molding", "Wainscoting", "Built-in cabinetry"],
        exteriorFeatures: ["Covered veranda", "Brick pathway", "Professional landscaping", "Two-car garage"],
        yearBuilt: 1998,
        schools: [
            { name: "Selwyn Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.7 miles" },
            { name: "Alexander Graham Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.2 miles" },
            { name: "Myers Park High", rating: "8/10", type: "Public", grades: "9-12", distance: "1.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$8,750", taxAssessment: "$800,000" },
            { year: 2022, propertyTaxes: "$8,550", taxAssessment: "$780,000" }
        ],
        agent: {
            name: "Stephanie King",
            title: "Myers Park Specialist",
            phone: "(555) 567-8901",
            imageUrl: "https://picsum.photos/seed/agent39/100/100"
        },
        paymentCalculator: {
            loanAmount: "$655,600",
            downPayment: "$163,900",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$3,935"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$819,500", date: "May 25, 2024" },
            { event: "Sold", price: "$730,000", date: "October 10, 2017" }
        ],
        latitude: 35.1916,
        longitude: -80.8325
    },
    {
        id: "40",
        price: "$675,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 2050,
        address: "324 Catalina Avenue, Redondo Beach, CA 90277",
        description: [
            "Bright and airy beach bungalow just three blocks from the ocean in South Redondo.",
            "Recently remodeled with open floor plan, gourmet kitchen, and indoor-outdoor living spaces.",
            "Spacious rooftop deck with panoramic ocean views and built-in outdoor kitchen."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop40img1/800/600", alt: "Beach bungalow exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop40img2/800/600", alt: "Open concept living area" },
            { id: "img3", url: "https://picsum.photos/seed/prop40img3/800/600", alt: "Rooftop deck with ocean view" }
        ],
        interiorFeatures: ["Open floor plan", "Hardwood floors", "Skylights", "Custom cabinetry"],
        exteriorFeatures: ["Rooftop deck", "Outdoor kitchen", "Drought-resistant landscaping", "Outdoor shower"],
        yearBuilt: 1952,
        schools: [
            { name: "Tulita Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.6 miles" },
            { name: "Parras Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.2 miles" },
            { name: "Redondo Union High", rating: "8/10", type: "Public", grades: "9-12", distance: "1.9 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$7,950", taxAssessment: "$665,000" },
            { year: 2022, propertyTaxes: "$7,750", taxAssessment: "$650,000" }
        ],
        agent: {
            name: "Jessica Waves",
            title: "South Bay Specialist",
            phone: "(555) 678-9012",
            imageUrl: "https://picsum.photos/seed/agent40/100/100"
        },
        paymentCalculator: {
            loanAmount: "$540,000",
            downPayment: "$135,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$3,275"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$675,000", date: "May 10, 2024" },
            { event: "Renovation completed", price: "N/A", date: "December 2023" },
            { event: "Sold", price: "$550,000", date: "March 5, 2019" }
        ],
        latitude: 33.8298,
        longitude: -118.3892
    },
    {
        id: "41",
        price: "$1,150,000",
        bedrooms: 5,
        bathrooms: 4,
        squareFootage: 3900,
        address: "1825 Mountain View Road, Park City, UT 84060",
        description: [
            "Stunning mountain contemporary home with breathtaking views of the Wasatch Range.",
            "Open concept great room with soaring ceilings, floor-to-ceiling windows, and stone fireplace.",
            "Multiple outdoor living spaces including expansive deck, hot tub area, and fire pit lounge."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop41img1/800/600", alt: "Mountain contemporary exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop41img2/800/600", alt: "Great room with mountain view" },
            { id: "img3", url: "https://picsum.photos/seed/prop41img3/800/600", alt: "Deck with mountain views" }
        ],
        interiorFeatures: ["Vaulted ceilings", "Stone fireplace", "Chef's kitchen", "Heated floors"],
        exteriorFeatures: ["Expansive deck", "Hot tub", "Fire pit", "Heated driveway"],
        yearBuilt: 2015,
        schools: [
            { name: "Trailside Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "1.5 miles" },
            { name: "Ecker Hill Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "2.3 miles" },
            { name: "Park City High", rating: "9/10", type: "Public", grades: "9-12", distance: "3.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$9,550", taxAssessment: "$1,130,000" },
            { year: 2022, propertyTaxes: "$9,350", taxAssessment: "$1,100,000" }
        ],
        agent: {
            name: "Brandon Slopes",
            title: "Mountain Property Expert",
            phone: "(555) 789-0123",
            imageUrl: "https://picsum.photos/seed/agent41/100/100"
        },
        paymentCalculator: {
            loanAmount: "$920,000",
            downPayment: "$230,000",
            interestRate: "5.9%",
            loanTerm: "30 years",
            monthlyPayment: "$5,450"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,150,000", date: "June 5, 2024" },
            { event: "Sold", price: "$975,000", date: "July 15, 2019" }
        ],
        latitude: 40.6547,
        longitude: -111.5080
    },
    {
        id: "42",
        price: "$935,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 2850,
        address: "487 Magnolia Boulevard, Savannah, GA 31401",
        description: [
            "Stately historic home in Savannah's renowned Historic District with southern charm.",
            "Meticulously restored with original hardwood floors, crown moldings, and period details.",
            "Enchanting courtyard garden with brick pathways, fountain, and mature camellias."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop42img1/800/600", alt: "Historic Savannah exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop42img2/800/600", alt: "Formal parlor with fireplace" },
            { id: "img3", url: "https://picsum.photos/seed/prop42img3/800/600", alt: "Courtyard garden" }
        ],
        interiorFeatures: ["Original heart pine floors", "Pocket doors", "Ornate plaster work", "Vintage crystal chandeliers"],
        exteriorFeatures: ["Wrought iron details", "Courtyard garden", "Period shutters", "Brick pathways"],
        yearBuilt: 1858,
        schools: [
            { name: "Charles Ellis Montessori Academy", rating: "8/10", type: "Public/Montessori", grades: "K-8", distance: "1.1 miles" },
            { name: "Savannah Arts Academy", rating: "9/10", type: "Public", grades: "9-12", distance: "2.3 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$10,820", taxAssessment: "$925,000" },
            { year: 2022, propertyTaxes: "$10,550", taxAssessment: "$905,000" }
        ],
        agent: {
            name: "Eleanor Savannah",
            title: "Historic District Specialist",
            phone: "(555) 456-7890",
            imageUrl: "https://picsum.photos/seed/agent42/100/100"
        },
        paymentCalculator: {
            loanAmount: "$748,000",
            downPayment: "$187,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$4,485"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$935,000", date: "May 20, 2024" },
            { event: "Historical restoration completed", price: "N/A", date: "January 2024" },
            { event: "Sold", price: "$785,000", date: "April 5, 2019" }
        ],
        latitude: 32.0809,
        longitude: -81.0912
    },
    {
        id: "43",
        price: "$449,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1680,
        address: "1472 Skyline Drive, Sedona, AZ 86336",
        description: [
            "Adobe-style desert retreat with panoramic red rock views and spectacular sunsets.",
            "Open concept living with kiva fireplace, exposed beam ceilings, and terra cotta flooring.",
            "Xeriscaped garden with native plants, meditation area, and covered patio for outdoor dining."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop43img1/800/600", alt: "Adobe home with red rock views" },
            { id: "img2", url: "https://picsum.photos/seed/prop43img2/800/600", alt: "Living room with kiva fireplace" },
            { id: "img3", url: "https://picsum.photos/seed/prop43img3/800/600", alt: "Desert garden with patio" }
        ],
        interiorFeatures: ["Kiva fireplace", "Vigas (wooden beams)", "Terra cotta floors", "Southwest-style niches"],
        exteriorFeatures: ["Xeriscaped garden", "Flagstone patio", "Meditation area", "Outdoor shower"],
        yearBuilt: 1997,
        schools: [
            { name: "West Sedona Elementary", rating: "7/10", type: "Public", grades: "K-6", distance: "2.3 miles" },
            { name: "Sedona Red Rock Junior/Senior High", rating: "8/10", type: "Public", grades: "7-12", distance: "3.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$3,850", taxAssessment: "$440,000" },
            { year: 2022, propertyTaxes: "$3,720", taxAssessment: "$425,000" }
        ],
        agent: {
            name: "Maria Canyon",
            title: "Sedona Lifestyle Expert",
            phone: "(555) 567-8901",
            imageUrl: "https://picsum.photos/seed/agent43/100/100"
        },
        paymentCalculator: {
            loanAmount: "$359,200",
            downPayment: "$89,800",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$2,205"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$449,000", date: "June 2, 2024" },
            { event: "Solar system installed", price: "N/A", date: "March 2024" },
            { event: "Sold", price: "$380,000", date: "September 15, 2018" }
        ],
        latitude: 34.8697,
        longitude: -111.7601
    },
    {
        id: "44",
        price: "$1,875,000",
        bedrooms: 5,
        bathrooms: 4.5,
        squareFootage: 4200,
        address: "2378 Lakeshore Drive, Chicago, IL 60614",
        description: [
            "Stunning Lincoln Park mansion with panoramic lake and city views throughout.",
            "Recently renovated with chef's kitchen, smart home features, and designer finishes.",
            "Rooftop terrace with outdoor kitchen, fireplace, and 360-degree views of Lake Michigan and the Chicago skyline."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop44img1/800/600", alt: "Lincoln Park mansion exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop44img2/800/600", alt: "Chef's kitchen with lake view" },
            { id: "img3", url: "https://picsum.photos/seed/prop44img3/800/600", alt: "Rooftop terrace with city view" }
        ],
        interiorFeatures: ["Smart home system", "Elevator", "Wine cellar", "Home gym", "Heated floors"],
        exteriorFeatures: ["Rooftop terrace", "Outdoor kitchen", "Fire feature", "Two-car garage"],
        yearBuilt: 2010,
        schools: [
            { name: "Oscar Mayer Elementary", rating: "9/10", type: "Public", grades: "K-8", distance: "0.5 miles" },
            { name: "Lincoln Park High School", rating: "8/10", type: "Public", grades: "9-12", distance: "1.0 miles" },
            { name: "Francis W. Parker School", rating: "10/10", type: "Private", grades: "K-12", distance: "0.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$22,500", taxAssessment: "$1,850,000" },
            { year: 2022, propertyTaxes: "$21,800", taxAssessment: "$1,795,000" }
        ],
        agent: {
            name: "Jonathan Lake",
            title: "Luxury Chicago Properties",
            phone: "(555) 678-9012",
            imageUrl: "https://picsum.photos/seed/agent44/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,500,000",
            downPayment: "$375,000",
            interestRate: "5.8%",
            loanTerm: "30 years",
            monthlyPayment: "$8,810"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,875,000", date: "May 15, 2024" },
            { event: "Renovation completed", price: "N/A", date: "December 2023" },
            { event: "Sold", price: "$1,625,000", date: "July 12, 2019" }
        ],
        latitude: 41.9275,
        longitude: -87.6368
    },
    {
        id: "45",
        price: "$575,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 1950,
        address: "728 Bayview Avenue, Santa Cruz, CA 95060",
        description: [
            "Charming beach cottage just three blocks from the Pacific Ocean with ocean views.",
            "Open concept living with vaulted ceilings, large windows, and natural light throughout.",
            "Serene backyard with hot tub, outdoor shower, and native California landscaping."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop45img1/800/600", alt: "Beach cottage exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop45img2/800/600", alt: "Open concept living room" },
            { id: "img3", url: "https://picsum.photos/seed/prop45img3/800/600", alt: "Backyard with hot tub" }
        ],
        interiorFeatures: ["Hardwood floors", "Shiplap walls", "Wood-burning stove", "Updated kitchen"],
        exteriorFeatures: ["Outdoor shower", "Hot tub", "Drought-tolerant garden", "Covered porch"],
        yearBuilt: 1978,
        schools: [
            { name: "Bay View Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "0.7 miles" },
            { name: "Mission Hill Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "1.3 miles" },
            { name: "Santa Cruz High", rating: "8/10", type: "Public", grades: "9-12", distance: "1.9 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$6,250", taxAssessment: "$565,000" },
            { year: 2022, propertyTaxes: "$6,050", taxAssessment: "$550,000" }
        ],
        agent: {
            name: "Sophia Ocean",
            title: "Coastal Living Specialist",
            phone: "(555) 234-5678",
            imageUrl: "https://picsum.photos/seed/agent45/100/100"
        },
        paymentCalculator: {
            loanAmount: "$460,000",
            downPayment: "$115,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$2,790"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$575,000", date: "June 10, 2024" },
            { event: "Kitchen remodel", price: "N/A", date: "February 2024" },
            { event: "Sold", price: "$475,000", date: "April 20, 2019" }
        ],
        latitude: 36.9740,
        longitude: -122.0308
    },
    {
        id: "46",
        price: "$2,250,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3600,
        address: "975 Nantucket Lane, Nantucket, MA 02554",
        description: [
            "Classic Nantucket shingle-style home with harbor views and private beach access.",
            "Impeccable craftsmanship featuring coffered ceilings, built-ins, and gourmet kitchen.",
            "Stunning outdoor living with expansive deck, outdoor fireplace, and manicured gardens."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop46img1/800/600", alt: "Shingle-style Nantucket exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop46img2/800/600", alt: "Living room with harbor view" },
            { id: "img3", url: "https://picsum.photos/seed/prop46img3/800/600", alt: "Deck with outdoor fireplace" }
        ],
        interiorFeatures: ["Custom millwork", "Marble countertops", "Ship lap walls", "Window seats"],
        exteriorFeatures: ["Cedar shingles", "Bluestone patio", "Outdoor fireplace", "Private beach path"],
        yearBuilt: 2005,
        schools: [
            { name: "Nantucket Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "1.5 miles" },
            { name: "Cyrus Peirce Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.8 miles" },
            { name: "Nantucket High", rating: "8/10", type: "Public", grades: "9-12", distance: "2.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$24,750", taxAssessment: "$2,225,000" },
            { year: 2022, propertyTaxes: "$24,200", taxAssessment: "$2,180,000" }
        ],
        agent: {
            name: "Victoria Nantucket",
            title: "Island Luxury Properties",
            phone: "(555) 345-6789",
            imageUrl: "https://picsum.photos/seed/agent46/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,800,000",
            downPayment: "$450,000",
            interestRate: "5.7%",
            loanTerm: "30 years",
            monthlyPayment: "$10,475"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$2,250,000", date: "May 25, 2024" },
            { event: "Sold", price: "$1,950,000", date: "June 15, 2018" }
        ],
        latitude: 41.2835,
        longitude: -70.0995
    },
    {
        id: "47",
        price: "$389,900",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1750,
        address: "412 Maple Street, Burlington, VT 05401",
        description: [
            "Charming New England colonial with modern updates in Burlington's historic district.",
            "Restored original features with energy-efficient systems and thoughtful improvements.",
            "Lovely fenced backyard with mature maple trees, vegetable garden, and stone patio."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop47img1/800/600", alt: "Colonial exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop47img2/800/600", alt: "Updated kitchen with original features" },
            { id: "img3", url: "https://picsum.photos/seed/prop47img3/800/600", alt: "Backyard with maple trees" }
        ],
        interiorFeatures: ["Original wide-plank floors", "Soapstone counters", "Vermont casting wood stove", "Built-in bookshelves"],
        exteriorFeatures: ["Slate roof", "Stone patio", "Raised garden beds", "Maple trees"],
        yearBuilt: 1899,
        schools: [
            { name: "Champlain Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "0.6 miles" },
            { name: "Edmunds Middle School", rating: "7/10", type: "Public", grades: "6-8", distance: "1.2 miles" },
            { name: "Burlington High", rating: "8/10", type: "Public", grades: "9-12", distance: "1.9 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$7,850", taxAssessment: "$380,000" },
            { year: 2022, propertyTaxes: "$7,650", taxAssessment: "$370,000" }
        ],
        agent: {
            name: "Benjamin Maple",
            title: "Historic Home Expert",
            phone: "(555) 456-7890",
            imageUrl: "https://picsum.photos/seed/agent47/100/100"
        },
        paymentCalculator: {
            loanAmount: "$311,920",
            downPayment: "$77,980",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$1,915"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$389,900", date: "June 5, 2024" },
            { event: "Energy retrofit completed", price: "N/A", date: "October 2023" },
            { event: "Sold", price: "$330,000", date: "August 10, 2017" }
        ],
        latitude: 44.4759,
        longitude: -73.2121
    },
    {
        id: "48",
        price: "$799,500",
        bedrooms: 4,
        bathrooms: 3,
        squareFootage: 2800,
        address: "1845 Pearl Street, Boulder, CO 80302",
        description: [
            "Stunning craftsman bungalow within walking distance to Pearl Street Mall and hiking trails.",
            "Beautifully renovated with sustainable materials, solar power, and energy-efficient design.",
            "Private backyard oasis with hot tub, native landscaping, and views of the Flatirons."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop48img1/800/600", alt: "Craftsman bungalow exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop48img2/800/600", alt: "Eco-friendly kitchen" },
            { id: "img3", url: "https://picsum.photos/seed/prop48img3/800/600", alt: "Backyard with mountain views" }
        ],
        interiorFeatures: ["Reclaimed wood floors", "Energy-efficient appliances", "Solar power system", "Radiant floor heating"],
        exteriorFeatures: ["Xeriscaped gardens", "Hot tub", "Solar panels", "Front porch swing"],
        yearBuilt: 1922,
        schools: [
            { name: "Whittier Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.5 miles" },
            { name: "Casey Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.1 miles" },
            { name: "Boulder High", rating: "9/10", type: "Public", grades: "9-12", distance: "1.4 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$6,450", taxAssessment: "$785,000" },
            { year: 2022, propertyTaxes: "$6,250", taxAssessment: "$760,000" }
        ],
        agent: {
            name: "Sierra Mountain",
            title: "Sustainable Living Expert",
            phone: "(555) 567-8901",
            imageUrl: "https://picsum.photos/seed/agent48/100/100"
        },
        paymentCalculator: {
            loanAmount: "$639,600",
            downPayment: "$159,900",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$3,835"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$799,500", date: "May 30, 2024" },
            { event: "Solar installation", price: "N/A", date: "July 2023" },
            { event: "Sold", price: "$685,000", date: "September 5, 2019" }
        ],
        latitude: 40.0160,
        longitude: -105.2797
    },
    {
        id: "49",
        price: "$525,000",
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1350,
        address: "72 Artist Row, Hudson, NY 12534",
        description: [
            "Converted industrial loft in Hudson's historic arts district with original character.",
            "Soaring 14-foot ceilings, exposed brick walls, and massive windows flooding the space with light.",
            "Rooftop deck with panoramic views of the Hudson River and Catskill Mountains."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop49img1/800/600", alt: "Industrial loft exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop49img2/800/600", alt: "Open living space with exposed brick" },
            { id: "img3", url: "https://picsum.photos/seed/prop49img3/800/600", alt: "Rooftop deck with river view" }
        ],
        interiorFeatures: ["Exposed brick", "14-foot ceilings", "Original wood beams", "Sliding barn doors"],
        exteriorFeatures: ["Rooftop deck", "Historic facade", "Secure entry", "Artist community"],
        yearBuilt: 1910,
        schools: [
            { name: "Montgomery C. Smith Elementary", rating: "7/10", type: "Public", grades: "K-5", distance: "0.9 miles" },
            { name: "Hudson Junior High", rating: "6/10", type: "Public", grades: "6-8", distance: "1.2 miles" },
            { name: "Hudson Senior High", rating: "7/10", type: "Public", grades: "9-12", distance: "1.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$5,650", taxAssessment: "$515,000" },
            { year: 2022, propertyTaxes: "$5,450", taxAssessment: "$500,000" }
        ],
        agent: {
            name: "Olivia Hudson",
            title: "Creative Space Specialist",
            phone: "(555) 678-9012",
            imageUrl: "https://picsum.photos/seed/agent49/100/100"
        },
        paymentCalculator: {
            loanAmount: "$420,000",
            downPayment: "$105,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$2,545"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$525,000", date: "June 12, 2024" },
            { event: "Converted to loft", price: "N/A", date: "Completed May 2021" },
            { event: "Sold (as warehouse)", price: "$320,000", date: "January 5, 2020" }
        ],
        latitude: 42.2529,
        longitude: -73.7901
    },
    {
        id: "50",
        price: "$12,950,000",
        bedrooms: 8,
        bathrooms: 10,
        squareFootage: 11500,
        address: "42 Ocean Drive, Palm Beach, FL 33480",
        description: [
            "Opulent Mediterranean-style estate with 120 feet of private beach frontage and stunning ocean views.",
            "Resort-style living with gourmet kitchen, home theater, wine cellar, and marble throughout.",
            "Tropical paradise with infinity pool, private cabanas, outdoor kitchen, and lush landscaping."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop50img1/800/600", alt: "Mediterranean estate exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop50img2/800/600", alt: "Grand foyer with chandelier" },
            { id: "img3", url: "https://picsum.photos/seed/prop50img3/800/600", alt: "Infinity pool with ocean view" }
        ],
        interiorFeatures: ["Marble floors", "Crystal chandeliers", "Home theater", "Wine cellar", "Elevator"],
        exteriorFeatures: ["Private beach access", "Infinity pool", "Outdoor kitchen", "Private dock", "Tennis court"],
        yearBuilt: 2015,
        schools: [
            { name: "Palm Beach Day Academy", rating: "10/10", type: "Private", grades: "K-9", distance: "1.8 miles" },
            { name: "Palm Beach Public", rating: "9/10", type: "Public", grades: "K-5", distance: "2.2 miles" },
            { name: "Palm Beach Gardens High", rating: "8/10", type: "Public", grades: "9-12", distance: "7.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$156,000", taxAssessment: "$12,800,000" },
            { year: 2022, propertyTaxes: "$151,200", taxAssessment: "$12,600,000" }
        ],
        agent: {
            name: "Elizabeth Royal",
            title: "Luxury Estate Director",
            phone: "(555) 789-0123",
            imageUrl: "https://picsum.photos/seed/agent50/100/100"
        },
        paymentCalculator: {
            loanAmount: "$10,360,000",
            downPayment: "$2,590,000",
            interestRate: "5.5%",
            loanTerm: "30 years",
            monthlyPayment: "$58,850"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$12,950,000", date: "April 15, 2024" },
            { event: "Renovation completed", price: "N/A", date: "December 2022" },
            { event: "Sold", price: "$10,500,000", date: "May 20, 2018" }
        ],
        latitude: 26.7056,
        longitude: -80.0364
    },
    {
        id: "51",
        price: "$349,900",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1650,
        address: "7685 River Bend Road, Nashville, TN 37221",
        description: [
            "Charming modern farmhouse in sought-after West Nashville neighborhood with mature trees.",
            "Fully renovated with shiplap walls, farmhouse sink, and reclaimed wood accents.",
            "Peaceful backyard retreat with covered porch, fire pit, and professional landscaping."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop51img1/800/600", alt: "Modern farmhouse exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop51img2/800/600", alt: "Kitchen with farmhouse sink" },
            { id: "img3", url: "https://picsum.photos/seed/prop51img3/800/600", alt: "Covered porch with seating area" }
        ],
        interiorFeatures: ["Shiplap accent walls", "Barn doors", "Wide plank flooring", "Subway tile backsplash"],
        exteriorFeatures: ["Metal roof", "Covered porch", "Fire pit", "White picket fence"],
        yearBuilt: 1965,
        schools: [
            { name: "Harpeth Valley Elementary", rating: "9/10", type: "Public", grades: "K-4", distance: "1.1 miles" },
            { name: "Bellevue Middle", rating: "7/10", type: "Public", grades: "5-8", distance: "2.3 miles" },
            { name: "Hillwood High", rating: "7/10", type: "Public", grades: "9-12", distance: "3.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$2,950", taxAssessment: "$340,000" },
            { year: 2022, propertyTaxes: "$2,850", taxAssessment: "$330,000" }
        ],
        agent: {
            name: "Ryan Nashville",
            title: "Modern Farmhouse Specialist",
            phone: "(555) 901-2345",
            imageUrl: "https://picsum.photos/seed/agent51/100/100"
        },
        paymentCalculator: {
            loanAmount: "$279,920",
            downPayment: "$69,980",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$1,720"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$349,900", date: "June 8, 2024" },
            { event: "Renovation completed", price: "N/A", date: "April 2024" },
            { event: "Sold", price: "$275,000", date: "January 15, 2020" }
        ],
        latitude: 36.0825,
        longitude: -86.9969
    },
    {
        id: "52",
        price: "$1,095,000",
        bedrooms: 3,
        bathrooms: 3.5,
        squareFootage: 2650,
        address: "1024 Rainier Vista, Seattle, WA 98112",
        description: [
            "Striking contemporary home designed by award-winning local architect in Madison Park.",
            "Walls of glass, soaring ceilings, and an open floor plan create a light-filled living space.",
            "Tranquil courtyard garden and roof deck with spectacular views of Mt. Rainier and Lake Washington."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop52img1/800/600", alt: "Contemporary architectural exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop52img2/800/600", alt: "Open living area with walls of glass" },
            { id: "img3", url: "https://picsum.photos/seed/prop52img3/800/600", alt: "Roof deck with mountain view" }
        ],
        interiorFeatures: ["Floor-to-ceiling windows", "Architectural concrete", "Minimalist design", "Custom lighting"],
        exteriorFeatures: ["Living roof", "Courtyard garden", "Roof deck", "Rainwater collection"],
        yearBuilt: 2019,
        schools: [
            { name: "McGilvra Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.6 miles" },
            { name: "Washington Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.8 miles" },
            { name: "Garfield High", rating: "8/10", type: "Public", grades: "9-12", distance: "2.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$10,850", taxAssessment: "$1,080,000" },
            { year: 2022, propertyTaxes: "$10,550", taxAssessment: "$1,050,000" }
        ],
        agent: {
            name: "Zach Modern",
            title: "Architectural Properties Specialist",
            phone: "(555) 012-3456",
            imageUrl: "https://picsum.photos/seed/agent52/100/100"
        },
        paymentCalculator: {
            loanAmount: "$876,000",
            downPayment: "$219,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$5,250"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,095,000", date: "May 28, 2024" },
            { event: "Sold", price: "$985,000", date: "June 10, 2021" }
        ],
        latitude: 47.6319,
        longitude: -122.2851
    },
    {
        id: "53",
        price: "$750,000",
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1800,
        address: "459 Greenwich Street, Tribeca, NY 10013",
        description: [
            "Authentic TriBeCa loft in a coveted pre-war building with historic architecture and details.",
            "Meticulously renovated with exquisite finishes while preserving original industrial character.",
            "Perfect downtown location steps from Hudson River Park, top restaurants, and transit."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop53img1/800/600", alt: "Historic Tribeca building" },
            { id: "img2", url: "https://picsum.photos/seed/prop53img2/800/600", alt: "Open loft living space" },
            { id: "img3", url: "https://picsum.photos/seed/prop53img3/800/600", alt: "Gourmet kitchen with island" }
        ],
        interiorFeatures: ["Original cast iron columns", "Exposed brick walls", "12-foot tin ceilings", "Industrial windows"],
        exteriorFeatures: ["Historic facade", "Roof access", "Cast iron details", "Elevator building"],
        yearBuilt: 1899,
        schools: [
            { name: "PS 234 Independence School", rating: "9/10", type: "Public", grades: "K-5", distance: "0.3 miles" },
            { name: "IS 289", rating: "8/10", type: "Public", grades: "6-8", distance: "0.5 miles" },
            { name: "Stuyvesant High School", rating: "10/10", type: "Public", grades: "9-12", distance: "0.7 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$12,450", taxAssessment: "$740,000" },
            { year: 2022, propertyTaxes: "$12,150", taxAssessment: "$725,000" }
        ],
        agent: {
            name: "Natalie Loft",
            title: "Downtown Manhattan Expert",
            phone: "(555) 123-4567",
            imageUrl: "https://picsum.photos/seed/agent53/100/100"
        },
        paymentCalculator: {
            loanAmount: "$600,000",
            downPayment: "$150,000",
            interestRate: "5.9%",
            loanTerm: "30 years",
            monthlyPayment: "$3,560"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$750,000", date: "June 1, 2024" },
            { event: "Renovation completed", price: "N/A", date: "September 2023" },
            { event: "Sold", price: "$625,000", date: "May 5, 2018" }
        ],
        latitude: 40.7203,
        longitude: -74.0097
    },
    {
        id: "54",
        price: "$595,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1950,
        address: "2475 Saguaro Drive, Scottsdale, AZ 85250",
        description: [
            "Desert contemporary home with stunning Camelback Mountain views in North Scottsdale.",
            "Sleek interior featuring floor-to-ceiling windows, concrete floors, and designer finishes.",
            "Resort-style backyard with negative-edge pool, outdoor kitchen, and firepit conversation area."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop54img1/800/600", alt: "Desert contemporary exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop54img2/800/600", alt: "Living room with mountain view" },
            { id: "img3", url: "https://picsum.photos/seed/prop54img3/800/600", alt: "Negative-edge pool" }
        ],
        interiorFeatures: ["Polished concrete floors", "Quartz countertops", "Floor-to-ceiling windows", "Smart home system"],
        exteriorFeatures: ["Negative-edge pool", "Built-in BBQ", "Fire pit", "Desert landscaping"],
        yearBuilt: 2010,
        schools: [
            { name: "Cochise Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "1.3 miles" },
            { name: "Cocopah Middle School", rating: "8/10", type: "Public", grades: "6-8", distance: "1.9 miles" },
            { name: "Chaparral High School", rating: "9/10", type: "Public", grades: "9-12", distance: "2.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$5,250", taxAssessment: "$585,000" },
            { year: 2022, propertyTaxes: "$5,050", taxAssessment: "$570,000" }
        ],
        agent: {
            name: "Daniel Desert",
            title: "Contemporary Home Specialist",
            phone: "(555) 234-5678",
            imageUrl: "https://picsum.photos/seed/agent54/100/100"
        },
        paymentCalculator: {
            loanAmount: "$476,000",
            downPayment: "$119,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$2,885"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$595,000", date: "May 15, 2024" },
            { event: "Pool renovation", price: "N/A", date: "November 2023" },
            { event: "Sold", price: "$520,000", date: "February 10, 2019" }
        ],
        latitude: 33.6050,
        longitude: -111.7495
    },
    {
        id: "55",
        price: "$490,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1850,
        address: "723 Magnolia Avenue, Charleston, SC 29403",
        description: [
            "Classic Charleston single house with iconic side piazza in the historic district.",
            "Thoughtfully restored with original heart pine floors, decorative fireplaces, and period moldings.",
            "Charming walled garden with brick pathways, fountain, and centuries-old camellias and azaleas."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop55img1/800/600", alt: "Charleston single house exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop55img2/800/600", alt: "Side piazza with rocking chairs" },
            { id: "img3", url: "https://picsum.photos/seed/prop55img3/800/600", alt: "Walled garden with fountain" }
        ],
        interiorFeatures: ["Heart pine floors", "Original fireplaces", "Plaster medallions", "Period moldings"],
        exteriorFeatures: ["Side piazza", "Walled garden", "Brick pathways", "Historic detailing"],
        yearBuilt: 1845,
        schools: [
            { name: "Memminger Elementary", rating: "7/10", type: "Public", grades: "K-5", distance: "0.6 miles" },
            { name: "Charleston Catholic", rating: "9/10", type: "Private", grades: "K-8", distance: "0.8 miles" },
            { name: "Burke High School", rating: "6/10", type: "Public", grades: "9-12", distance: "1.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$4,850", taxAssessment: "$480,000" },
            { year: 2022, propertyTaxes: "$4,650", taxAssessment: "$465,000" }
        ],
        agent: {
            name: "Margaret Charleston",
            title: "Historic District Expert",
            phone: "(555) 345-6789",
            imageUrl: "https://picsum.photos/seed/agent55/100/100"
        },
        paymentCalculator: {
            loanAmount: "$392,000",
            downPayment: "$98,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$2,350"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$490,000", date: "June 15, 2024" },
            { event: "Historic restoration", price: "N/A", date: "Completed March 2024" },
            { event: "Sold", price: "$425,000", date: "September 12, 2019" }
        ],
        latitude: 32.7907,
        longitude: -79.9313
    },
    {
        id: "56",
        price: "$1,350,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3400,
        address: "185 Blackcomb Way, Whistler, BC V0N 1B4, Canada",
        description: [
            "Luxurious mountain chalet with breathtaking views of Whistler and Blackcomb mountains.",
            "Stunning great room with soaring ceilings, stone fireplace, and floor-to-ceiling windows.",
            "Premier ski-in/ski-out location with private hot tub, sauna, and heated driveway."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop56img1/800/600", alt: "Mountain chalet exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop56img2/800/600", alt: "Great room with mountain view" },
            { id: "img3", url: "https://picsum.photos/seed/prop56img3/800/600", alt: "Outdoor hot tub with snow views" }
        ],
        interiorFeatures: ["Stone fireplace", "Exposed timber beams", "Heated floors", "Gourmet kitchen"],
        exteriorFeatures: ["Ski-in/ski-out access", "Private hot tub", "Sauna", "Heated driveway"],
        yearBuilt: 2008,
        schools: [
            { name: "Myrtle Philip Community School", rating: "8/10", type: "Public", grades: "K-6", distance: "2.1 miles" },
            { name: "Whistler Secondary", rating: "7/10", type: "Public", grades: "7-12", distance: "3.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$8,750", taxAssessment: "$1,330,000" },
            { year: 2022, propertyTaxes: "$8,550", taxAssessment: "$1,310,000" }
        ],
        agent: {
            name: "Xavier Mountain",
            title: "Luxury Mountain Properties",
            phone: "(555) 456-7890",
            imageUrl: "https://picsum.photos/seed/agent56/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,080,000",
            downPayment: "$270,000",
            interestRate: "5.8%",
            loanTerm: "30 years",
            monthlyPayment: "$6,345"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,350,000", date: "May 20, 2024" },
            { event: "Interior remodel", price: "N/A", date: "Completed January 2023" },
            { event: "Sold", price: "$1,175,000", date: "December 5, 2018" }
        ],
        latitude: 50.1162,
        longitude: -122.9535
    },
    {
        id: "57",
        price: "$1,750,000",
        bedrooms: 5,
        bathrooms: 4,
        squareFootage: 4250,
        address: "423 Royal Street, New Orleans, LA 70130",
        description: [
            "Historic Creole townhouse in the heart of the French Quarter with classic wrought iron balconies.",
            "Elegant interior featuring 14-foot ceilings, original crystal chandeliers, and antique heart pine floors.",
            "Private courtyard oasis with fountain, lush tropical plants, and outdoor dining area."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop57img1/800/600", alt: "French Quarter townhouse" },
            { id: "img2", url: "https://picsum.photos/seed/prop57img2/800/600", alt: "Formal parlor with chandelier" },
            { id: "img3", url: "https://picsum.photos/seed/prop57img3/800/600", alt: "Tropical courtyard" }
        ],
        interiorFeatures: ["14-foot ceilings", "Crystal chandeliers", "Heart pine floors", "Period fireplaces"],
        exteriorFeatures: ["Wrought iron balconies", "Private courtyard", "Fountain", "Historic facade"],
        yearBuilt: 1834,
        schools: [
            { name: "Homer A. Plessy Community School", rating: "6/10", type: "Public", grades: "K-8", distance: "0.7 miles" },
            { name: "McDonogh 35 High", rating: "5/10", type: "Public", grades: "9-12", distance: "2.3 miles" },
            { name: "Lusher Charter School", rating: "9/10", type: "Charter", grades: "K-12", distance: "3.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$18,250", taxAssessment: "$1,720,000" },
            { year: 2022, propertyTaxes: "$17,850", taxAssessment: "$1,680,000" }
        ],
        agent: {
            name: "Monique Orleans",
            title: "Historic Properties Expert",
            phone: "(555) 567-8901",
            imageUrl: "https://picsum.photos/seed/agent57/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,400,000",
            downPayment: "$350,000",
            interestRate: "5.9%",
            loanTerm: "30 years",
            monthlyPayment: "$8,310"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,750,000", date: "June 5, 2024" },
            { event: "Historic restoration", price: "N/A", date: "Completed August 2023" },
            { event: "Sold", price: "$1,350,000", date: "October 15, 2017" }
        ],
        latitude: 29.9566,
        longitude: -90.0659
    },
    {
        id: "58",
        price: "$395,000",
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1250,
        address: "405 N 5th Street, Williamsburg, Brooklyn, NY 11211",
        description: [
            "Hip industrial loft in converted Williamsburg warehouse in prime location near Bedford Avenue.",
            "Soaring 13-foot ceilings with oversized windows, exposed brick, and original timber columns.",
            "Rooftop access with spectacular Manhattan skyline views and vibrant community garden."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop58img1/800/600", alt: "Industrial loft interior" },
            { id: "img2", url: "https://picsum.photos/seed/prop58img2/800/600", alt: "Exposed brick bedroom" },
            { id: "img3", url: "https://picsum.photos/seed/prop58img3/800/600", alt: "Rooftop with Manhattan view" }
        ],
        interiorFeatures: ["Exposed brick", "Timber columns", "13-foot ceilings", "Oversized windows"],
        exteriorFeatures: ["Rooftop access", "Community garden", "Bike storage", "Historic facade"],
        yearBuilt: 1912,
        schools: [
            { name: "PS 84 Jose De Diego", rating: "7/10", type: "Public", grades: "K-8", distance: "0.4 miles" },
            { name: "Grand Street Campus High", rating: "6/10", type: "Public", grades: "9-12", distance: "1.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$4,250", taxAssessment: "$385,000" },
            { year: 2022, propertyTaxes: "$4,120", taxAssessment: "$375,000" }
        ],
        agent: {
            name: "Zoe Brooklyn",
            title: "Williamsburg Loft Specialist",
            phone: "(555) 678-9012",
            imageUrl: "https://picsum.photos/seed/agent58/100/100"
        },
        paymentCalculator: {
            loanAmount: "$316,000",
            downPayment: "$79,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$1,915"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$395,000", date: "June 12, 2024" },
            { event: "Kitchen renovation", price: "N/A", date: "April 2024" },
            { event: "Sold", price: "$335,000", date: "May 5, 2019" }
        ],
        latitude: 40.7176,
        longitude: -73.9574
    },
    {
        id: "59",
        price: "$875,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 2450,
        address: "2156 Marina Boulevard, San Francisco, CA 94123",
        description: [
            "Classic San Francisco Marina-style home with spectacular Golden Gate Bridge and bay views.",
            "Meticulously maintained with period details, crown moldings, and beautiful hardwood floors.",
            "Prime location steps from Marina Green, Crissy Field, and the Presidio."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop59img1/800/600", alt: "Marina-style exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop59img2/800/600", alt: "Living room with bay view" },
            { id: "img3", url: "https://picsum.photos/seed/prop59img3/800/600", alt: "Updated kitchen with period details" }
        ],
        interiorFeatures: ["Crown moldings", "Hardwood floors", "Bay windows", "Period details"],
        exteriorFeatures: ["Marina-style facade", "Private garden", "Bay views", "Garage"],
        yearBuilt: 1939,
        schools: [
            { name: "Claire Lilienthal Elementary", rating: "9/10", type: "Public", grades: "K-8", distance: "0.8 miles" },
            { name: "Galileo High School", rating: "7/10", type: "Public", grades: "9-12", distance: "1.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$10,250", taxAssessment: "$865,000" },
            { year: 2022, propertyTaxes: "$9,950", taxAssessment: "$845,000" }
        ],
        agent: {
            name: "Patricia Marina",
            title: "San Francisco Specialist",
            phone: "(555) 789-0123",
            imageUrl: "https://picsum.photos/seed/agent59/100/100"
        },
        paymentCalculator: {
            loanAmount: "$700,000",
            downPayment: "$175,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$4,195"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$875,000", date: "May 25, 2024" },
            { event: "Kitchen and bath remodel", price: "N/A", date: "February 2024" },
            { event: "Sold", price: "$780,000", date: "June 15, 2018" }
        ],
        latitude: 37.8035,
        longitude: -122.4434
    },
    {
        id: "60",
        price: "$685,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 2100,
        address: "1247 Historic Street, Annapolis, MD 21401",
        description: [
            "Charming colonial townhouse in Annapolis Historic District steps from the Naval Academy.",
            "Beautifully preserved 18th-century architecture with modern updates throughout.",
            "Private brick courtyard with herb garden and outdoor dining space perfect for entertaining."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop60img1/800/600", alt: "Colonial townhouse exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop60img2/800/600", alt: "Period living room with fireplace" },
            { id: "img3", url: "https://picsum.photos/seed/prop60img3/800/600", alt: "Brick courtyard garden" }
        ],
        interiorFeatures: ["Wide plank floors", "Period mantels", "Exposed beams", "Updated kitchen"],
        exteriorFeatures: ["Brick courtyard", "Historic facade", "Slate roof", "Garden shed"],
        yearBuilt: 1789,
        schools: [
            { name: "Eastport Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "0.9 miles" },
            { name: "Annapolis Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "1.4 miles" },
            { name: "Annapolis High", rating: "8/10", type: "Public", grades: "9-12", distance: "1.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$8,950", taxAssessment: "$675,000" },
            { year: 2022, propertyTaxes: "$8,750", taxAssessment: "$660,000" }
        ],
        agent: {
            name: "William Historic",
            title: "Colonial Properties Expert",
            phone: "(555) 234-5678",
            imageUrl: "https://picsum.photos/seed/agent60/100/100"
        },
        paymentCalculator: {
            loanAmount: "$548,000",
            downPayment: "$137,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$3,285"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$685,000", date: "June 20, 2024" },
            { event: "Kitchen renovation", price: "N/A", date: "March 2024" },
            { event: "Sold", price: "$595,000", date: "July 10, 2020" }
        ],
        latitude: 38.9784,
        longitude: -76.4951
    },
    {
        id: "61",
        price: "$1,450,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3200,
        address: "892 Vineyard Heights, Paso Robles, CA 93446",
        description: [
            "Stunning Tuscan-style villa on 3 acres with panoramic vineyard and rolling hill views.",
            "Gourmet kitchen with professional appliances, wine cellar, and outdoor entertaining areas.",
            "Private vineyard, infinity pool, and guest casita perfect for wine country lifestyle."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop61img1/800/600", alt: "Tuscan villa exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop61img2/800/600", alt: "Great room with vineyard view" },
            { id: "img3", url: "https://picsum.photos/seed/prop61img3/800/600", alt: "Infinity pool with hills view" }
        ],
        interiorFeatures: ["Travertine floors", "Coffered ceilings", "Wine cellar", "Chef's kitchen"],
        exteriorFeatures: ["Infinity pool", "Guest casita", "Vineyard", "Olive grove"],
        yearBuilt: 2011,
        schools: [
            { name: "Glen Speck Elementary", rating: "7/10", type: "Public", grades: "K-5", distance: "3.2 miles" },
            { name: "Daniel Lewis Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "4.1 miles" },
            { name: "Paso Robles High", rating: "8/10", type: "Public", grades: "9-12", distance: "5.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$16,850", taxAssessment: "$1,425,000" },
            { year: 2022, propertyTaxes: "$16,450", taxAssessment: "$1,390,000" }
        ],
        agent: {
            name: "Francesca Wine",
            title: "Wine Country Estates",
            phone: "(555) 345-6789",
            imageUrl: "https://picsum.photos/seed/agent61/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,160,000",
            downPayment: "$290,000",
            interestRate: "5.8%",
            loanTerm: "30 years",
            monthlyPayment: "$6,815"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,450,000", date: "May 10, 2024" },
            { event: "Sold", price: "$1,285,000", date: "March 15, 2019" }
        ],
        latitude: 35.6269,
        longitude: -120.6907
    },
    {
        id: "62",
        price: "$295,000",
        bedrooms: 2,
        bathrooms: 1.5,
        squareFootage: 1150,
        address: "4567 Mill Street, Burlington, IA 52601",
        description: [
            "Cozy Victorian cottage in Burlington's historic Mill District with original charm.",
            "Restored with period-appropriate details, modern utilities, and energy efficiency upgrades.",
            "Sweet backyard with perennial gardens, fruit trees, and covered back porch."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop62img1/800/600", alt: "Victorian cottage exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop62img2/800/600", alt: "Cozy living room" },
            { id: "img3", url: "https://picsum.photos/seed/prop62img3/800/600", alt: "Garden with fruit trees" }
        ],
        interiorFeatures: ["Original trim", "Pocket doors", "Clawfoot tub", "Built-in hutch"],
        exteriorFeatures: ["Wraparound porch", "Fruit trees", "Garden beds", "Carriage house"],
        yearBuilt: 1888,
        schools: [
            { name: "North Hill Elementary", rating: "6/10", type: "Public", grades: "K-5", distance: "0.8 miles" },
            { name: "James Madison Middle", rating: "6/10", type: "Public", grades: "6-8", distance: "1.5 miles" },
            { name: "Burlington High", rating: "7/10", type: "Public", grades: "9-12", distance: "2.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$3,250", taxAssessment: "$285,000" },
            { year: 2022, propertyTaxes: "$3,150", taxAssessment: "$275,000" }
        ],
        agent: {
            name: "Sarah Prairie",
            title: "Historic Home Specialist",
            phone: "(555) 456-7890",
            imageUrl: "https://picsum.photos/seed/agent62/100/100"
        },
        paymentCalculator: {
            loanAmount: "$236,000",
            downPayment: "$59,000",
            interestRate: "6.3%",
            loanTerm: "30 years",
            monthlyPayment: "$1,460"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$295,000", date: "June 25, 2024" },
            { event: "Restoration completed", price: "N/A", date: "April 2024" },
            { event: "Sold", price: "$225,000", date: "November 20, 2021" }
        ],
        latitude: 40.8078,
        longitude: -91.1129
    },
    {
        id: "63",
        price: "$2,750,000",
        bedrooms: 5,
        bathrooms: 4.5,
        squareFootage: 4800,
        address: "78 Ocean Bluff Drive, Kiawah Island, SC 29455",
        description: [
            "Spectacular oceanfront home with 100 feet of private beach and unobstructed Atlantic views.",
            "Masterfully designed with hurricane-rated construction, elevator, and resort-style amenities.",
            "Multiple outdoor living areas, infinity pool, and private boardwalk to pristine beach."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop63img1/800/600", alt: "Oceanfront home exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop63img2/800/600", alt: "Great room with ocean view" },
            { id: "img3", url: "https://picsum.photos/seed/prop63img3/800/600", alt: "Infinity pool overlooking ocean" }
        ],
        interiorFeatures: ["Hurricane windows", "Elevator", "Wine room", "Chef's kitchen", "Home theater"],
        exteriorFeatures: ["Private beach", "Infinity pool", "Outdoor kitchen", "Boardwalk", "Guest cottage"],
        yearBuilt: 2017,
        schools: [
            { name: "Angel Oak Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "8.5 miles" },
            { name: "Johns Island Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "9.2 miles" },
            { name: "St. Johns High", rating: "8/10", type: "Public", grades: "9-12", distance: "10.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$32,500", taxAssessment: "$2,720,000" },
            { year: 2022, propertyTaxes: "$31,850", taxAssessment: "$2,650,000" }
        ],
        agent: {
            name: "Hampton Coastal",
            title: "Luxury Oceanfront Specialist",
            phone: "(555) 567-8901",
            imageUrl: "https://picsum.photos/seed/agent63/100/100"
        },
        paymentCalculator: {
            loanAmount: "$2,200,000",
            downPayment: "$550,000",
            interestRate: "5.6%",
            loanTerm: "30 years",
            monthlyPayment: "$12,595"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$2,750,000", date: "April 25, 2024" },
            { event: "Sold", price: "$2,450,000", date: "August 10, 2020" }
        ],
        latitude: 32.6099,
        longitude: -80.0821
    },
    {
        id: "64",
        price: "$425,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1750,
        address: "2341 Maple Ridge Lane, Missoula, MT 59802",
        description: [
            "Mountain craftsman home with stunning views of the Rattlesnake Mountains and outdoor recreation access.",
            "Open floor plan with vaulted ceilings, stone fireplace, and large windows showcasing mountain vistas.",
            "Private deck, fire pit area, and mature landscaping create perfect outdoor entertaining space."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop64img1/800/600", alt: "Mountain craftsman exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop64img2/800/600", alt: "Living room with mountain view" },
            { id: "img3", url: "https://picsum.photos/seed/prop64img3/800/600", alt: "Deck with fire pit" }
        ],
        interiorFeatures: ["Vaulted ceilings", "Stone fireplace", "Hardwood floors", "Exposed beams"],
        exteriorFeatures: ["Mountain views", "Large deck", "Fire pit", "Two-car garage"],
        yearBuilt: 2003,
        schools: [
            { name: "Rattlesnake Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "1.2 miles" },
            { name: "C.S. Porter Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "2.8 miles" },
            { name: "Sentinel High", rating: "8/10", type: "Public", grades: "9-12", distance: "3.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$4,850", taxAssessment: "$415,000" },
            { year: 2022, propertyTaxes: "$4,650", taxAssessment: "$400,000" }
        ],
        agent: {
            name: "Jake Mountain",
            title: "Big Sky Properties",
            phone: "(555) 678-9012",
            imageUrl: "https://picsum.photos/seed/agent64/100/100"
        },
        paymentCalculator: {
            loanAmount: "$340,000",
            downPayment: "$85,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$2,065"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$425,000", date: "June 15, 2024" },
            { event: "Sold", price: "$365,000", date: "September 5, 2018" }
        ],
        latitude: 46.8772,
        longitude: -113.9962
    },
    {
        id: "65",
        price: "$195,000",
        bedrooms: 2,
        bathrooms: 1,
        squareFootage: 950,
        address: "856 University Drive, Norman, OK 73069",
        description: [
            "Adorable bungalow near University of Oklahoma campus perfect for students or first-time buyers.",
            "Recently updated with fresh paint, new flooring, and modern kitchen appliances.",
            "Large front porch and fenced backyard with mature shade trees and garden space."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop65img1/800/600", alt: "Campus bungalow exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop65img2/800/600", alt: "Updated kitchen" },
            { id: "img3", url: "https://picsum.photos/seed/prop65img3/800/600", alt: "Shaded backyard" }
        ],
        interiorFeatures: ["New flooring", "Updated kitchen", "Central air", "Built-in storage"],
        exteriorFeatures: ["Front porch", "Fenced yard", "Mature trees", "Garden area"],
        yearBuilt: 1951,
        schools: [
            { name: "Irving Elementary", rating: "7/10", type: "Public", grades: "K-5", distance: "0.9 miles" },
            { name: "Irving Middle School", rating: "6/10", type: "Public", grades: "6-8", distance: "1.1 miles" },
            { name: "Norman High", rating: "7/10", type: "Public", grades: "9-12", distance: "2.3 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$2,150", taxAssessment: "$190,000" },
            { year: 2022, propertyTaxes: "$2,050", taxAssessment: "$185,000" }
        ],
        agent: {
            name: "Kelly Campus",
            title: "Student Housing Specialist",
            phone: "(555) 789-0123",
            imageUrl: "https://picsum.photos/seed/agent65/100/100"
        },
        paymentCalculator: {
            loanAmount: "$156,000",
            downPayment: "$39,000",
            interestRate: "6.5%",
            loanTerm: "30 years",
            monthlyPayment: "$985"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$195,000", date: "July 1, 2024" },
            { event: "Updates completed", price: "N/A", date: "May 2024" },
            { event: "Sold", price: "$165,000", date: "April 10, 2020" }
        ],
        latitude: 35.2226,
        longitude: -97.4395
    },
    {
        id: "66",
        price: "$1,895,000",
        bedrooms: 4,
        bathrooms: 4,
        squareFootage: 3650,
        address: "45 Beacon Hill Terrace, Boston, MA 02108",
        description: [
            "Elegant Federal-style townhouse in prestigious Beacon Hill with original architectural details.",
            "Four floors of sophisticated living with period fireplaces, crown moldings, and hardwood floors.",
            "Private roof deck with panoramic city and harbor views, plus rare garage parking."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop66img1/800/600", alt: "Federal townhouse exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop66img2/800/600", alt: "Formal parlor with fireplace" },
            { id: "img3", url: "https://picsum.photos/seed/prop66img3/800/600", alt: "Roof deck with city view" }
        ],
        interiorFeatures: ["Period fireplaces", "Crown moldings", "Wide plank floors", "Built-in bookcases"],
        exteriorFeatures: ["Brick facade", "Roof deck", "Garage parking", "Historic details"],
        yearBuilt: 1825,
        schools: [
            { name: "Eliot Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "0.6 miles" },
            { name: "Boston Latin Academy", rating: "9/10", type: "Public", grades: "6-12", distance: "1.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$24,750", taxAssessment: "$1,875,000" },
            { year: 2022, propertyTaxes: "$24,200", taxAssessment: "$1,850,000" }
        ],
        agent: {
            name: "Preston Beacon",
            title: "Historic Boston Properties",
            phone: "(555) 901-2345",
            imageUrl: "https://picsum.photos/seed/agent66/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,516,000",
            downPayment: "$379,000",
            interestRate: "5.7%",
            loanTerm: "30 years",
            monthlyPayment: "$8,820"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,895,000", date: "May 5, 2024" },
            { event: "Sold", price: "$1,650,000", date: "October 20, 2017" }
        ],
        latitude: 42.3584,
        longitude: -71.0598
    },
    {
        id: "67",
        price: "$545,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 2200,
        address: "1789 River Valley Road, Eugene, OR 97401",
        description: [
            "Contemporary home nestled in the hills with Willamette River views and eco-friendly features.",
            "Open concept design with floor-to-ceiling windows, sustainable materials, and energy efficiency.",
            "Terraced gardens, outdoor entertaining areas, and proximity to hiking trails and wineries."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop67img1/800/600", alt: "Contemporary hillside home" },
            { id: "img2", url: "https://picsum.photos/seed/prop67img2/800/600", alt: "Open living area with river view" },
            { id: "img3", url: "https://picsum.photos/seed/prop67img3/800/600", alt: "Terraced garden" }
        ],
        interiorFeatures: ["Bamboo flooring", "Solar panels", "Energy-efficient appliances", "Open concept"],
        exteriorFeatures: ["River views", "Terraced gardens", "Deck", "Sustainable landscaping"],
        yearBuilt: 2014,
        schools: [
            { name: "Spring Creek Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "2.1 miles" },
            { name: "Roosevelt Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "3.5 miles" },
            { name: "South Eugene High", rating: "8/10", type: "Public", grades: "9-12", distance: "4.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$6,150", taxAssessment: "$535,000" },
            { year: 2022, propertyTaxes: "$5,950", taxAssessment: "$520,000" }
        ],
        agent: {
            name: "River Woods",
            title: "Sustainable Living Expert",
            phone: "(555) 012-3456",
            imageUrl: "https://picsum.photos/seed/agent67/100/100"
        },
        paymentCalculator: {
            loanAmount: "$436,000",
            downPayment: "$109,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$2,615"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$545,000", date: "June 8, 2024" },
            { event: "Solar upgrade", price: "N/A", date: "January 2024" },
            { event: "Sold", price: "$485,000", date: "May 15, 2019" }
        ],
        latitude: 44.0521,
        longitude: -123.0868
    },
    {
        id: "68",
        price: "$775,000",
        bedrooms: 4,
        bathrooms: 3,
        squareFootage: 2850,
        address: "623 Capitol Hill Avenue, Little Rock, AR 72201",
        description: [
            "Stunning Victorian mansion in the historic Quapaw Quarter with original architectural details.",
            "Meticulously restored with period-appropriate finishes, modern systems, and luxury amenities.",
            "Grand entertaining spaces, wraparound porch, and beautifully landscaped gardens."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop68img1/800/600", alt: "Victorian mansion exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop68img2/800/600", alt: "Grand staircase" },
            { id: "img3", url: "https://picsum.photos/seed/prop68img3/800/600", alt: "Wraparound porch" }
        ],
        interiorFeatures: ["Original millwork", "Pocket doors", "Medallion ceilings", "Restored hardwoods"],
        exteriorFeatures: ["Wraparound porch", "Turret", "Historic details", "Landscaped gardens"],
        yearBuilt: 1889,
        schools: [
            { name: "Gibbs Elementary", rating: "7/10", type: "Public", grades: "K-5", distance: "1.1 miles" },
            { name: "Dunbar Magnet Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.8 miles" },
            { name: "Central High", rating: "8/10", type: "Public", grades: "9-12", distance: "2.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$5,950", taxAssessment: "$765,000" },
            { year: 2022, propertyTaxes: "$5,750", taxAssessment: "$750,000" }
        ],
        agent: {
            name: "Magnolia Heritage",
            title: "Historic Restoration Specialist",
            phone: "(555) 123-4567",
            imageUrl: "https://picsum.photos/seed/agent68/100/100"
        },
        paymentCalculator: {
            loanAmount: "$620,000",
            downPayment: "$155,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$3,760"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$775,000", date: "May 30, 2024" },
            { event: "Restoration completed", price: "N/A", date: "February 2024" },
            { event: "Sold", price: "$425,000", date: "August 25, 2021" }
        ],
        latitude: 34.7465,
        longitude: -92.2896
    },
    {
        id: "69",
        price: "$1,125,000",
        bedrooms: 3,
        bathrooms: 3,
        squareFootage: 2500,
        address: "456 Lighthouse Point, Bar Harbor, ME 04609",
        description: [
            "Spectacular coastal cottage with panoramic views of Frenchman Bay and Acadia National Park.",
            "Classic Maine shingle-style architecture with modern amenities and luxury finishes throughout.",
            "Private dock, stone terraces, and direct access to rocky coastline and lobster boat watching."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop69img1/800/600", alt: "Coastal cottage with bay view" },
            { id: "img2", url: "https://picsum.photos/seed/prop69img2/800/600", alt: "Living room with panoramic windows" },
            { id: "img3", url: "https://picsum.photos/seed/prop69img3/800/600", alt: "Private dock and coastline" }
        ],
        interiorFeatures: ["Shiplap walls", "Stone fireplace", "Gourmet kitchen", "Panoramic windows"],
        exteriorFeatures: ["Private dock", "Stone terraces", "Coastal access", "Cedar shingles"],
        yearBuilt: 2009,
        schools: [
            { name: "Conners Emerson Elementary", rating: "8/10", type: "Public", grades: "K-8", distance: "2.8 miles" },
            { name: "Mount Desert Island High", rating: "8/10", type: "Public", grades: "9-12", distance: "3.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$13,850", taxAssessment: "$1,110,000" },
            { year: 2022, propertyTaxes: "$13,450", taxAssessment: "$1,085,000" }
        ],
        agent: {
            name: "Coastal Maine",
            title: "Downeast Properties Specialist",
            phone: "(555) 234-5678",
            imageUrl: "https://picsum.photos/seed/agent69/100/100"
        },
        paymentCalculator: {
            loanAmount: "$900,000",
            downPayment: "$225,000",
            interestRate: "5.9%",
            loanTerm: "30 years",
            monthlyPayment: "$5,340"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,125,000", date: "April 30, 2024" },
            { event: "Sold", price: "$975,000", date: "June 20, 2018" }
        ],
        latitude: 44.3876,
        longitude: -68.2039
    },
    {
        id: "70",
        price: "$950,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3100,
        address: "1523 Desert Willow Drive, Scottsdale, AZ 85262",
        description: [
            "Stunning Southwestern adobe home with panoramic Sonoran Desert and mountain views.",
            "Authentic design featuring hand-troweled walls, exposed vigas, and custom tile work throughout.",
            "Resort-style backyard with infinity pool, ramada, and mature desert landscaping."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop70img1/800/600", alt: "Southwestern adobe exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop70img2/800/600", alt: "Great room with desert view" },
            { id: "img3", url: "https://picsum.photos/seed/prop70img3/800/600", alt: "Infinity pool with mountain backdrop" }
        ],
        interiorFeatures: ["Saltillo tile floors", "Kiva fireplace", "Hand-troweled walls", "Exposed vigas"],
        exteriorFeatures: ["Infinity pool", "Ramada", "Desert landscaping", "Outdoor kitchen"],
        yearBuilt: 2006,
        schools: [
            { name: "Copper Ridge Elementary", rating: "9/10", type: "Public", grades: "K-5", distance: "1.8 miles" },
            { name: "Desert Canyon Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "2.5 miles" },
            { name: "Desert Mountain High", rating: "9/10", type: "Public", grades: "9-12", distance: "3.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$8,450", taxAssessment: "$935,000" },
            { year: 2022, propertyTaxes: "$8,250", taxAssessment: "$915,000" }
        ],
        agent: {
            name: "Mesa Sunrise",
            title: "Desert Properties Expert",
            phone: "(555) 345-6789",
            imageUrl: "https://picsum.photos/seed/agent70/100/100"
        },
        paymentCalculator: {
            loanAmount: "$760,000",
            downPayment: "$190,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$4,555"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$950,000", date: "June 30, 2024" },
            { event: "Pool renovation", price: "N/A", date: "March 2024" },
            { event: "Sold", price: "$825,000", date: "January 15, 2019" }
        ],
        latitude: 33.7539,
        longitude: -111.9369
    },
    {
        id: "71",
        price: "$365,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 1650,
        address: "4729 Riverfront Avenue, Davenport, IA 52807",
        description: [
            "Charming craftsman bungalow with Mississippi River views in historic Village of East Davenport.",
            "Completely renovated while preserving original character, including built-ins and hardwood floors.",
            "Private river-view deck, mature trees, and walking distance to shops and restaurants."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop71img1/800/600", alt: "Craftsman bungalow with river view" },
            { id: "img2", url: "https://picsum.photos/seed/prop71img2/800/600", alt: "Living room with built-ins" },
            { id: "img3", url: "https://picsum.photos/seed/prop71img3/800/600", alt: "River-view deck" }
        ],
        interiorFeatures: ["Original hardwoods", "Craftsman built-ins", "Coved ceilings", "Updated kitchen"],
        exteriorFeatures: ["River views", "Private deck", "Mature trees", "Historic district"],
        yearBuilt: 1918,
        schools: [
            { name: "Buchanan Elementary", rating: "7/10", type: "Public", grades: "K-5", distance: "0.8 miles" },
            { name: "John F. Kennedy Elementary", rating: "7/10", type: "Public", grades: "6-8", distance: "1.5 miles" },
            { name: "Davenport Central High", rating: "6/10", type: "Public", grades: "9-12", distance: "2.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$4,250", taxAssessment: "$355,000" },
            { year: 2022, propertyTaxes: "$4,050", taxAssessment: "$340,000" }
        ],
        agent: {
            name: "River Valley",
            title: "Historic Riverfront Specialist",
            phone: "(555) 456-7890",
            imageUrl: "https://picsum.photos/seed/agent71/100/100"
        },
        paymentCalculator: {
            loanAmount: "$292,000",
            downPayment: "$73,000",
            interestRate: "6.2%",
            loanTerm: "30 years",
            monthlyPayment: "$1,790"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$365,000", date: "July 5, 2024" },
            { event: "Renovation completed", price: "N/A", date: "April 2024" },
            { event: "Sold", price: "$285,000", date: "September 10, 2020" }
        ],
        latitude: 41.5403,
        longitude: -90.5596
    },
    {
        id: "72",
        price: "$3,250,000",
        bedrooms: 6,
        bathrooms: 5.5,
        squareFootage: 5800,
        address: "892 Summit Ridge Estate, Jackson Hole, WY 83025",
        description: [
            "Spectacular mountain estate with unobstructed views of the Teton Range and ski slope access.",
            "Luxurious lodge-style architecture featuring timber frame construction and stone accents.",
            "Multiple outdoor living areas, heated pool, spa, and guest house perfect for mountain entertaining."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop72img1/800/600", alt: "Mountain lodge estate" },
            { id: "img2", url: "https://picsum.photos/seed/prop72img2/800/600", alt: "Great room with Teton views" },
            { id: "img3", url: "https://picsum.photos/seed/prop72img3/800/600", alt: "Heated pool with mountain backdrop" }
        ],
        interiorFeatures: ["Timber frame construction", "Stone fireplaces", "Wine cellar", "Home theater"],
        exteriorFeatures: ["Ski access", "Heated pool", "Guest house", "Multiple decks"],
        yearBuilt: 2012,
        schools: [
            { name: "Jackson Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "5.2 miles" },
            { name: "Jackson Hole Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "5.8 miles" },
            { name: "Jackson Hole High", rating: "9/10", type: "Public", grades: "9-12", distance: "6.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$19,850", taxAssessment: "$3,200,000" },
            { year: 2022, propertyTaxes: "$19,250", taxAssessment: "$3,100,000" }
        ],
        agent: {
            name: "Teton Peaks",
            title: "Luxury Mountain Estates",
            phone: "(555) 567-8901",
            imageUrl: "https://picsum.photos/seed/agent72/100/100"
        },
        paymentCalculator: {
            loanAmount: "$2,600,000",
            downPayment: "$650,000",
            interestRate: "5.5%",
            loanTerm: "30 years",
            monthlyPayment: "$14,765"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$3,250,000", date: "April 20, 2024" },
            { event: "Sold", price: "$2,850,000", date: "June 15, 2018" }
        ],
        latitude: 43.4799,
        longitude: -110.7624
    },
    {
        id: "73",
        price: "$435,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 1950,
        address: "2167 Historic Main Street, Lexington, KY 40507",
        description: [
            "Elegant Victorian home in Lexington's historic Gratz Park neighborhood near downtown.",
            "Beautifully preserved with original architectural details, updated systems, and modern amenities.",
            "Private courtyard garden, wraparound porch, and walking distance to horse farms and bourbon trail."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop73img1/800/600", alt: "Victorian home exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop73img2/800/600", alt: "Formal parlor with period details" },
            { id: "img3", url: "https://picsum.photos/seed/prop73img3/800/600", alt: "Courtyard garden" }
        ],
        interiorFeatures: ["Original moldings", "Period mantels", "Medallion ceilings", "Pocket doors"],
        exteriorFeatures: ["Wraparound porch", "Courtyard garden", "Historic details", "Carriage house"],
        yearBuilt: 1878,
        schools: [
            { name: "Cardinal Valley Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "1.3 miles" },
            { name: "Beaumont Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "2.1 miles" },
            { name: "Henry Clay High", rating: "8/10", type: "Public", grades: "9-12", distance: "2.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$4,850", taxAssessment: "$425,000" },
            { year: 2022, propertyTaxes: "$4,650", taxAssessment: "$410,000" }
        ],
        agent: {
            name: "Bluegrass Heritage",
            title: "Historic Properties Expert",
            phone: "(555) 678-9012",
            imageUrl: "https://picsum.photos/seed/agent73/100/100"
        },
        paymentCalculator: {
            loanAmount: "$348,000",
            downPayment: "$87,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$2,110"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$435,000", date: "July 10, 2024" },
            { event: "Historic renovation", price: "N/A", date: "May 2024" },
            { event: "Sold", price: "$365,000", date: "March 20, 2019" }
        ],
        latitude: 38.0498,
        longitude: -84.4970
    },
    {
        id: "74",
        price: "$725,000",
        bedrooms: 4,
        bathrooms: 3,
        squareFootage: 2650,
        address: "3847 Coastal Highway, Rehoboth Beach, DE 19971",
        description: [
            "Stunning beach house just two blocks from the Atlantic Ocean in popular Rehoboth Beach.",
            "Contemporary coastal design with expansive windows, open floor plan, and luxury finishes.",
            "Multiple decks, outdoor shower, and perfect for vacation rental or year-round coastal living."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop74img1/800/600", alt: "Contemporary beach house" },
            { id: "img2", url: "https://picsum.photos/seed/prop74img2/800/600", alt: "Open living area with ocean views" },
            { id: "img3", url: "https://picsum.photos/seed/prop74img3/800/600", alt: "Multi-level decks" }
        ],
        interiorFeatures: ["Open concept", "Luxury vinyl flooring", "Granite counters", "Coastal design"],
        exteriorFeatures: ["Multiple decks", "Outdoor shower", "Near beach", "Coastal landscaping"],
        yearBuilt: 2016,
        schools: [
            { name: "Rehoboth Elementary", rating: "7/10", type: "Public", grades: "K-5", distance: "1.5 miles" },
            { name: "Beacon Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "2.8 miles" },
            { name: "Cape Henlopen High", rating: "8/10", type: "Public", grades: "9-12", distance: "3.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$3,950", taxAssessment: "$715,000" },
            { year: 2022, propertyTaxes: "$3,750", taxAssessment: "$695,000" }
        ],
        agent: {
            name: "Atlantic Shore",
            title: "Coastal Properties Specialist",
            phone: "(555) 789-0123",
            imageUrl: "https://picsum.photos/seed/agent74/100/100"
        },
        paymentCalculator: {
            loanAmount: "$580,000",
            downPayment: "$145,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$3,475"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$725,000", date: "June 25, 2024" },
            { event: "Sold", price: "$645,000", date: "August 10, 2020" }
        ],
        latitude: 38.7209,
        longitude: -75.0760
    },
    {
        id: "75",
        price: "$485,000",
        bedrooms: 3,
        bathrooms: 2,
        squareFootage: 2100,
        address: "1456 Vineyard View Lane, Walla Walla, WA 99362",
        description: [
            "Charming farmhouse on 2 acres with vineyard views in the heart of Washington wine country.",
            "Renovated with modern amenities while preserving rustic charm and original character.",
            "Covered porches, fire pit area, and proximity to award-winning wineries and tasting rooms."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop75img1/800/600", alt: "Farmhouse with vineyard views" },
            { id: "img2", url: "https://picsum.photos/seed/prop75img2/800/600", alt: "Rustic kitchen with modern updates" },
            { id: "img3", url: "https://picsum.photos/seed/prop75img3/800/600", alt: "Covered porch with vineyard view" }
        ],
        interiorFeatures: ["Exposed beams", "Farmhouse sink", "Wide plank floors", "Stone fireplace"],
        exteriorFeatures: ["2 acres", "Vineyard views", "Covered porches", "Fire pit area"],
        yearBuilt: 1947,
        schools: [
            { name: "Green Park Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "2.8 miles" },
            { name: "Prospect Point Elementary", rating: "8/10", type: "Public", grades: "6-8", distance: "3.2 miles" },
            { name: "Walla Walla High", rating: "7/10", type: "Public", grades: "9-12", distance: "4.1 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$5,850", taxAssessment: "$475,000" },
            { year: 2022, propertyTaxes: "$5,650", taxAssessment: "$460,000" }
        ],
        agent: {
            name: "Valley Vineyards",
            title: "Wine Country Properties",
            phone: "(555) 901-2345",
            imageUrl: "https://picsum.photos/seed/agent75/100/100"
        },
        paymentCalculator: {
            loanAmount: "$388,000",
            downPayment: "$97,000",
            interestRate: "6.1%",
            loanTerm: "30 years",
            monthlyPayment: "$2,350"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$485,000", date: "July 15, 2024" },
            { event: "Renovation completed", price: "N/A", date: "January 2024" },
            { event: "Sold", price: "$395,000", date: "November 5, 2019" }
        ],
        latitude: 46.0649,
        longitude: -118.3430
    },
    {
        id: "76",
        price: "$1,650,000",
        bedrooms: 5,
        bathrooms: 4.5,
        squareFootage: 4200,
        address: "234 Heritage Oak Drive, Greenwich, CT 06830",
        description: [
            "Stately colonial estate on 1.5 acres in prestigious Greenwich with mature landscaping.",
            "Elegant formal rooms, gourmet kitchen, and luxurious master suite with sitting area.",
            "Tennis court, swimming pool, and three-car garage perfect for sophisticated entertaining."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop76img1/800/600", alt: "Colonial estate exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop76img2/800/600", alt: "Formal dining room" },
            { id: "img3", url: "https://picsum.photos/seed/prop76img3/800/600", alt: "Tennis court and pool" }
        ],
        interiorFeatures: ["Crown moldings", "Hardwood floors", "Coffered ceilings", "Wine cellar"],
        exteriorFeatures: ["1.5 acres", "Tennis court", "Swimming pool", "Mature landscaping"],
        yearBuilt: 1994,
        schools: [
            { name: "North Mianus Elementary", rating: "10/10", type: "Public", grades: "K-5", distance: "1.2 miles" },
            { name: "Eastern Middle School", rating: "9/10", type: "Public", grades: "6-8", distance: "2.1 miles" },
            { name: "Greenwich High School", rating: "9/10", type: "Public", grades: "9-12", distance: "2.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$32,850", taxAssessment: "$1,625,000" },
            { year: 2022, propertyTaxes: "$31,950", taxAssessment: "$1,580,000" }
        ],
        agent: {
            name: "Connecticut Gold Coast",
            title: "Luxury Estate Specialist",
            phone: "(555) 012-3456",
            imageUrl: "https://picsum.photos/seed/agent76/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,320,000",
            downPayment: "$330,000",
            interestRate: "5.8%",
            loanTerm: "30 years",
            monthlyPayment: "$7,755"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,650,000", date: "May 15, 2024" },
            { event: "Sold", price: "$1,485,000", date: "September 20, 2017" }
        ],
        latitude: 41.0534,
        longitude: -73.6287
    },
    {
        id: "77",
        price: "$275,000",
        bedrooms: 2,
        bathrooms: 2,
        squareFootage: 1250,
        address: "5823 University Boulevard, Mobile, AL 36608",
        description: [
            "Charming Southern cottage near University of South Alabama with classic front porch.",
            "Recently updated with new paint, flooring, and kitchen while maintaining original character.",
            "Large backyard with mature live oak trees and perfect for students or first-time buyers."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop77img1/800/600", alt: "Southern cottage with front porch" },
            { id: "img2", url: "https://picsum.photos/seed/prop77img2/800/600", alt: "Updated kitchen" },
            { id: "img3", url: "https://picsum.photos/seed/prop77img3/800/600", alt: "Backyard with live oaks" }
        ],
        interiorFeatures: ["Original hardwoods", "Updated kitchen", "Crown molding", "Central air"],
        exteriorFeatures: ["Front porch", "Live oak trees", "Large backyard", "Off-street parking"],
        yearBuilt: 1955,
        schools: [
            { name: "Meadowlake Elementary", rating: "6/10", type: "Public", grades: "K-5", distance: "1.8 miles" },
            { name: "Causey Middle", rating: "6/10", type: "Public", grades: "6-8", distance: "2.5 miles" },
            { name: "Murphy High", rating: "7/10", type: "Public", grades: "9-12", distance: "3.2 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$1,850", taxAssessment: "$265,000" },
            { year: 2022, propertyTaxes: "$1,750", taxAssessment: "$255,000" }
        ],
        agent: {
            name: "Gulf Coast",
            title: "Student Housing Expert",
            phone: "(555) 123-4567",
            imageUrl: "https://picsum.photos/seed/agent77/100/100"
        },
        paymentCalculator: {
            loanAmount: "$220,000",
            downPayment: "$55,000",
            interestRate: "6.3%",
            loanTerm: "30 years",
            monthlyPayment: "$1,360"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$275,000", date: "July 20, 2024" },
            { event: "Updates completed", price: "N/A", date: "June 2024" },
            { event: "Sold", price: "$215,000", date: "April 5, 2021" }
        ],
        latitude: 30.7588,
        longitude: -88.1867
    },
    {
        id: "78",
        price: "$1,285,000",
        bedrooms: 4,
        bathrooms: 3.5,
        squareFootage: 3500,
        address: "789 Mountainside Terrace, Asheville, NC 28801",
        description: [
            "Spectacular contemporary mountain home with panoramic Blue Ridge Mountain views.",
            "Open concept design with floor-to-ceiling windows, natural materials, and luxury finishes.",
            "Multiple outdoor living areas, infinity pool, and proximity to downtown Asheville and hiking trails."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop78img1/800/600", alt: "Contemporary mountain home" },
            { id: "img2", url: "https://picsum.photos/seed/prop78img2/800/600", alt: "Great room with mountain views" },
            { id: "img3", url: "https://picsum.photos/seed/prop78img3/800/600", alt: "Infinity pool with mountain backdrop" }
        ],
        interiorFeatures: ["Floor-to-ceiling windows", "Natural stone accents", "Gourmet kitchen", "Master suite retreat"],
        exteriorFeatures: ["Mountain views", "Infinity pool", "Multiple decks", "Native landscaping"],
        yearBuilt: 2018,
        schools: [
            { name: "Asheville Primary", rating: "8/10", type: "Public", grades: "K-2", distance: "2.5 miles" },
            { name: "Asheville Middle", rating: "7/10", type: "Public", grades: "6-8", distance: "3.1 miles" },
            { name: "Asheville High", rating: "8/10", type: "Public", grades: "9-12", distance: "3.8 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$11,250", taxAssessment: "$1,265,000" },
            { year: 2022, propertyTaxes: "$10,850", taxAssessment: "$1,230,000" }
        ],
        agent: {
            name: "Blue Ridge Peaks",
            title: "Mountain Luxury Properties",
            phone: "(555) 234-5678",
            imageUrl: "https://picsum.photos/seed/agent78/100/100"
        },
        paymentCalculator: {
            loanAmount: "$1,028,000",
            downPayment: "$257,000",
            interestRate: "5.9%",
            loanTerm: "30 years",
            monthlyPayment: "$6,100"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$1,285,000", date: "June 1, 2024" },
            { event: "Sold", price: "$1,150,000", date: "July 10, 2020" }
        ],
        latitude: 35.5951,
        longitude: -82.5515
    },
    {
        id: "79",
        price: "$615,000",
        bedrooms: 3,
        bathrooms: 2.5,
        squareFootage: 2300,
        address: "4521 Historic Square, Williamsburg, VA 23185",
        description: [
            "Elegant Georgian colonial in historic Williamsburg near Colonial Williamsburg attractions.",
            "Authentic 18th-century architecture with modern amenities and period-appropriate restoration.",
            "Formal gardens, brick pathways, and walking distance to historic sites and College of William & Mary."
        ],
        images: [
            { id: "img1", url: "https://picsum.photos/seed/prop79img1/800/600", alt: "Georgian colonial exterior" },
            { id: "img2", url: "https://picsum.photos/seed/prop79img2/800/600", alt: "Formal parlor with period details" },
            { id: "img3", url: "https://picsum.photos/seed/prop79img3/800/600", alt: "Formal garden with brick pathways" }
        ],
        interiorFeatures: ["Wide plank floors", "Period fireplaces", "Crown moldings", "Authentic details"],
        exteriorFeatures: ["Formal gardens", "Brick pathways", "Historic district", "Colonial architecture"],
        yearBuilt: 1756,
        schools: [
            { name: "Matthew Whaley Elementary", rating: "8/10", type: "Public", grades: "K-5", distance: "1.1 miles" },
            { name: "Berkeley Middle", rating: "8/10", type: "Public", grades: "6-8", distance: "1.8 miles" },
            { name: "Jamestown High", rating: "8/10", type: "Public", grades: "9-12", distance: "2.5 miles" }
        ],
        taxHistory: [
            { year: 2023, propertyTaxes: "$6,950", taxAssessment: "$605,000" },
            { year: 2022, propertyTaxes: "$6,750", taxAssessment: "$590,000" }
        ],
        agent: {
            name: "Colonial Heritage",
            title: "Historic Williamsburg Specialist",
            phone: "(555) 345-6789",
            imageUrl: "https://picsum.photos/seed/agent79/100/100"
        },
        paymentCalculator: {
            loanAmount: "$492,000",
            downPayment: "$123,000",
            interestRate: "6.0%",
            loanTerm: "30 years",
            monthlyPayment: "$2,950"
        },
        propertyHistory: [
            { event: "Listed for sale", price: "$615,000", date: "July 8, 2024" },
            { event: "Historic preservation completed", price: "N/A", date: "March 2024" },
            { event: "Sold", price: "$525,000", date: "June 15, 2018" }
        ],
        latitude: 37.2707,
        longitude: -76.7075
    }
]; 