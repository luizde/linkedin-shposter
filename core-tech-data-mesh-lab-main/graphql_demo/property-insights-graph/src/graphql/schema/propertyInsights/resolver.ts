// These interfaces might be helpful for you to use in your resolver implementation.
interface Property {
    zpid: number;
    bathrooms?: number;
    bedrooms?: number;
    city?: string;
    description?: string;
    full_address?: string;
    images?: Array<{ id: string; alt?: string; url?: string }>;
    price?: number;
    sqft?: number;
}

interface UserPropertyInsight {
    user_id: string;
    property_info: Property[];
}

// TODO: Implement the resolver
export default {
    Query: {
        propertyInsights: async (_parent: unknown, args: { userId: string }, { dataSources }: GraphQLContext) => {
            // TODO: Call the function to get the properties from your data source instead of the hardcoded response.
            const response = [];
            return filterByUserId(response, args.userId);
        }
    },
    UserPropertyInsights: {
        __resolveReference: (reference: { userId: string }, { dataSources }: GraphQLContext) => {
            // TODO: Call the function to get the properties from your data source instead of the hardcoded response.
            const response = [];
            return filterByUserId(response, reference.userId);
        },
        userId: (parent: UserPropertyInsight) => parent.user_id,
        propertyInfo: (parent: UserPropertyInsight) => parent.property_info || []
    },
    Property: {
        // TODO: Implement the resolvers for the fields in the Property type.
        zpid: (parent: Property) => null,
        bathrooms: (parent: Property) => null,
        bedrooms: (parent: Property) => null,
        city: (parent: Property) => null,
        description: (parent: Property) => null,
        address: (parent: Property) => null,
        images: (parent: Property) => [],
        price: (parent: Property) => null,
        sqft: (parent: Property) => null
    }
};

// Helper functions
const filterByUserId = (response: UserPropertyInsight[], userId: string) => {
    return response.find((item: UserPropertyInsight) => item.user_id === userId);
};