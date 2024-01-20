/**
 * Author resolvers for GraphQL queries.
 * @module resolvers/author
 */

module.exports = {
    Query: {
        /**
         * Resolver for the getAllAuthors query.
         * @async
         * @param {Object} _ - The parent object (not used).
         * @param {Object} __ - The arguments object (not used).
         * @param {Object} context - The context object containing dataSources.
         * @returns {Promise<Array>} A Promise that resolves to an array of authors.
         * @throws {Error} If there is an error reading the data or if author data is not found.
         */
        getAllAuthors: async (_, __, { dataSources }) => {
            try {
                const authorsData = await dataSources.getAllAuthors();

                if (!authorsData) {
                    throw new Error(`Author data not found`);
                }

                return authorsData;
            } catch (error) {
                console.error("Error reading data:", error);
                throw new Error("Failed to read data");
            }
        },
        /**
         * Resolver for the getAuthorById query.
         * @async
         * @param {Object} _ - The parent object (not used).
         * @param {Object} args - The arguments object containing 'id'.
         * @param {number} args.id - The unique identifier of the author.
         * @param {Object} context - The context object containing dataSources.
         * @returns {Promise<Object|null>} A Promise that resolves to the author object or null if not found.
         * @throws {Error} If there is an error reading the data or if the author with the specified ID is not found.
         */
        getAuthorById: async (_, { id }, { dataSources }) => {
            try {
                const author = await dataSources.getAuthorById(id);

                if (!author) {
                    throw new Error(`Author with ID ${id} not found`);
                }

                return author;
            } catch (error) {
                console.error("Error reading data:", error);
                throw new Error("Failed to read data");
            }
        },
    },
    Author: {
        /**
         * Resolver for the 'works' field of the Author type.
         * @async
         * @param {Object} parent - The parent object (Author).
         * @param {Object} _ - The arguments object (not used).
         * @param {Object} context - The context object containing dataSources.
         * @returns {Promise<Array>} A Promise that resolves to an array of works by the specified author.
         * @throws {Error} If there is an error getting the works or if the works for the author are not found.
         */
        works: async ({ id }, _, { dataSources }) => {
            try {
                return dataSources.getWorksByAuthorId(id);
            } catch (error) {
                console.error(`Error getting works for author ${id}:`, error);
                throw new Error(`Failed to get works for author ${id}`);
            }
        },
    },
};
