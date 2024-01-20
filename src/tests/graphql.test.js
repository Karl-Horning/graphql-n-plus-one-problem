const { ApolloServer } = require("apollo-server");
const { DataSources } = require("../dataSources");
const typeDefs = require("../schemas");
const resolvers = require("../resolvers");

/**
 * Set up Apollo Server for testing.
 * @type {ApolloServer}
 */
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        dataSources: new DataSources(),
    }),
});

// Test suite for GraphQL endpoints.
describe("GraphQL Endpoints", () => {
    // Test case for querying all authors.
    it("should return all authors", async () => {
        const query = `
            query {
                getAllAuthors {
                    id
                    name
                    birthDate
                }
            }
        `;

        // Execute the GraphQL operation and validate the response.
        const response = await server.executeOperation({ query });

        expect(response.errors).toBeUndefined();
        expect(response.data.getAllAuthors).toHaveLength(10);
    });

    // Test case for querying all works.
    it("should return all works", async () => {
        const query = `
            query {
                getAllWorks {
                    title
                    year
                    notes
                }
            }
        `;

        // Execute the GraphQL operation and validate the response.
        const response = await server.executeOperation({ query });

        expect(response.errors).toBeUndefined();
        expect(response.data.getAllWorks).toHaveLength(52);
    });

    // Test case for querying an author by ID.
    it("should get author by ID", async () => {
        const operation = `
            query GetAuthorById($getAuthorById: Int!) {
                getAuthorById(id: $getAuthorById) {
                    name
                    birthDate
                    deathDate
                    bio
                    works {
                        title
                        year
                    }
                }
            }
        `;

        // Variables for the GraphQL operation.
        const variables = {
            getAuthorById: 1,
        };

        // Execute the GraphQL operation and validate the response.
        const response = await server.executeOperation({
            query: operation,
            variables,
        });

        expect(response.errors).toBeUndefined();
        const author = response.data.getAuthorById;

        expect(author).toBeDefined();
        expect(author.name).toBe("Jane Austen");
        expect(author.birthDate).toBe("-6123427200000");
        expect(author.works).toHaveLength(6);
    });

    // Test case for querying a work by ID.
    it("should get Work by ID", async () => {
        const operation = `
            query GetWorkById($getWorkById: Int!) {
                getWorkById(id: $getWorkById) {
                    title
                    year
                    notes
                    author {
                        name
                    }
                }
            }
        `;

        // Variables for the GraphQL operation.
        const variables = {
            getWorkById: 13,
        };

        // Execute the GraphQL operation and validate the response.
        const response = await server.executeOperation({
            query: operation,
            variables,
        });

        expect(response.errors).toBeUndefined();
        const work = response.data.getWorkById;

        expect(work).toBeDefined();
        expect(work.title).toBe("Oliver Twist");
        expect(work.year).toBe("1837-1839");
        expect(work.author.name).toBe("Charles Dickens");
    });
});
