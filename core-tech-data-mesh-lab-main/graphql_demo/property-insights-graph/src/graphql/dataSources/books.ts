import { RESTDataSource } from "@apollo/datasource-rest";

export const bookData = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    }
];

export default class Books extends RESTDataSource {
    override baseURL = "BASE_URL";

    // eslint-disable-next-line zillow/@typescript-eslint/require-await, class-methods-use-this
    async getBooks() {
        /*
        This method is intended to fetch book data from a RESTful API. 
        In a complete implementation, we would use an asynchronous HTTP request 
        to retrieve the data, like so: return await this.get(`${baseURL}/endpoint`)
        
        Currently, we are returning a static dataset, `bookData`, as a placeholder.
        */
        return bookData;
    }
}
