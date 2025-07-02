import { gql } from '@apollo/client';

export const GET_RECOMMENDED_PROPERTIES = gql`
  query GetRecommendedProperties($userId: ID!) {
    propertyInsights(userId: $userId) {
      propertyInfo {
        zpid
        address
        bathrooms
        bedrooms
        images {
          url
          alt
        }
        price
        sqft
        price
      }
    }
  }
`; 