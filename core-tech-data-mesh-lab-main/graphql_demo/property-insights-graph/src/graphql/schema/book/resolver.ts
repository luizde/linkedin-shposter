export default {
    // eslint-disable-next-line zillow/@typescript-eslint/naming-convention
    Query: {
        // Example resolver
        books: async (parent: any, args: any, contextValue: GraphQLContext) => {
            // eslint-disable-next-line zillow/@typescript-eslint/no-unsafe-assignment
            const bookData = contextValue.dataSources.books.getBooks();
            return bookData;
        },
    },
};
