import Books from "./books";
import PropertyInsights from "./propertyInsights";

export interface DataSources {
    books: Books;
    propertyInsights: PropertyInsights;
}

export function dataSources(): DataSources {
    return {
        books: new Books(),
        propertyInsights: new PropertyInsights(),
    };
}
