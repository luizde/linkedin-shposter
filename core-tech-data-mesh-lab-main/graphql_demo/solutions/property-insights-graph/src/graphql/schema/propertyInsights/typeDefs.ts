import gql from "graphql-tag";

export default gql`
    extend schema @link(url: "https://specs.apollo.dev/federation/v2.8", import: ["@key"]) {
        query: Query
    }

    type Query {
        propertyInsights(userId: ID!): UserPropertyInsights
    }

    type UserPropertyInsights @key(fields: "userId") {
        userId: ID!
        propertyInfo: [Property]
    }

    type Property {
        zpid: ID!
        bathrooms: Float
        bedrooms: Float
        city: String
        description: String
        address: String
        images: [Images]
        price: Int
        sqft: Int
    }

    type Images {
        id: ID!
        alt: String
        url: String
    }
`;
