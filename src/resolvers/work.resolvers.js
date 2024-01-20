/**
 * Work resolvers for GraphQL queries.
 * @module resolvers/work
 */

module.exports = {
    Query: {
        /**
         * Resolver for the getAllWorks query.
         * @async
         * @param {Object} _ - The parent object (not used).
         * @param {Object} __ - The arguments object (not used).
         * @param {Object} context - The context object containing dataSources.
         * @returns {Promise<Array>} A Promise that resolves to an array of works.
         * @throws {Error} If there is an error reading the data or if work data is not found.
         */
        getAllWorks: async (_, __, { dataSources }) => {
            try {
                const worksData = await dataSources.getAllWorks();

                if (!worksData) {
                    throw new Error(`Work data not found`);
                }

                return worksData;
            } catch (error) {
                console.error("Error reading data:", error);
                throw new Error("Failed to read data");
            }
        },
        /**
         * Resolver for the getWorkById query.
         * @async
         * @param {Object} _ - The parent object (not used).
         * @param {Object} args - The arguments object containing 'id'.
         * @param {number} args.id - The unique identifier of the work.
         * @param {Object} context - The context object containing dataSources.
         * @returns {Promise<Object|null>} A Promise that resolves to the work object or null if not found.
         * @throws {Error} If there is an error reading the data or if the work with the specified ID is not found.
         */
        getWorkById: async (_, { id }, { dataSources }) => {
            try {
                const author = await dataSources.getWorkById(id);

                if (!author) {
                    throw new Error(`Work with ID ${id} not found`);
                }

                return author;
            } catch (error) {
                console.error("Error reading data:", error);
                throw new Error("Failed to read data");
            }
        },
    },
    Work: {
        /**
         * Resolver for the 'author' field of the Work type.
         * @async
         * @param {Object} work - The parent object (Work).
         * @param {Object} _ - The arguments object (not used).
         * @param {Object} context - The context object containing dataSources.
         * @returns {Promise<Object|null>} A Promise that resolves to the author object or null if not found.
         * @throws {Error} If there is an error getting the author or if the author for the work is not found.
         * @description Resolves the author of the current work.
         */
        author: async ({ authorId }, _, { dataSources }) => {
            try {
                return dataSources.getAuthorOfWork(authorId);
            } catch (error) {
                console.error(
                    `Error getting author for work ${authorId}:`,
                    error
                );
                throw new Error(`Failed to get author for work ${authorId}`);
            }
        },
    },
};
