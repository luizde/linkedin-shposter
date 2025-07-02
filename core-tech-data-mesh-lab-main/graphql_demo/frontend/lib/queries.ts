import { gql } from '@apollo/client';

// TODO: Insert query to get recommended properties
export const GET_RECOMMENDED_PROPERTIES = gql`
    query {
        books {
            title
            author
        }
    }
`; 