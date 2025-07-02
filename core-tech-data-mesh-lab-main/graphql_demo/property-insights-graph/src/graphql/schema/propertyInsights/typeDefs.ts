import gql from "graphql-tag";

export default gql`
    extend schema @link(url: "https://specs.apollo.dev/federation/v2.8", import: ["@key"]) {
        query: Query
    }

    # TODO: add typeDefs here
`;
