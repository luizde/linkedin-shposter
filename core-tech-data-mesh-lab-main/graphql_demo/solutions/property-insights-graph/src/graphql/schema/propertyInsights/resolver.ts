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

export default {
    Query: {
        propertyInsights: async (_parent: unknown, args: { userId: string }, { dataSources }: GraphQLContext) => {
            const response = await dataSources.propertyInsights.getPropertyInsights();
            return filterByUserId(response, args.userId);
        }
    },
    UserPropertyInsights: {
        __resolveReference: async (reference: { userId: string }, { dataSources }: GraphQLContext) => {
            const response = await dataSources.propertyInsights.getPropertyInsights();
            console.log(response);
            return filterByUserId(response, reference.userId);
        },
        userId: (parent: UserPropertyInsight) => parent.user_id,
        propertyInfo: (parent: UserPropertyInsight) => parent.property_info || []
    },
    Property: {
        zpid: (parent: Property) => String(parent.zpid),
        bathrooms: (parent: Property) => parent.bathrooms ?? null,
        bedrooms: (parent: Property) => parent.bedrooms ?? null,
        city: (parent: Property) => parent.city ?? null,
        description: (parent: Property) => parent.description ?? null,
        address: (parent: Property) => parent.full_address ?? null,
        images: (parent: Property) => parent.images ?? [],
        price: (parent: Property) => parent.price ?? null,
        sqft: (parent: Property) => parent.sqft ?? null
    }
};

// Helper functions
const filterByUserId = (response: UserPropertyInsight[], userId: string) => {
    return response.find((item: UserPropertyInsight) => item.user_id === userId);
};