import { Property, PropertyImage } from "./mock-data";

export const additionalProperties: Property[] = [
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
    }
]; 