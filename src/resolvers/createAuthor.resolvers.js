/**
 * Resolvers for GraphQL mutations related to authors.
 * @module resolvers/author
 */
module.exports = {
    Mutation: {
        /**
         * Resolver for the createAnAuthor mutation.
         * @async
         * @param {Object} _ - The parent object (not used).
         * @param {Object} args - The arguments object containing data for creating an author.
         * @param {Object} context - The context object containing dataSources.
         * @returns {Promise<Object>} A Promise that resolves to the created author object.
         * @throws {Error} If there is an error writing the data or if author creation fails.
         */
        createAnAuthor: async (_, args, { dataSources }) => {
            try {
                const author = await dataSources.createAnAuthor({ ...args });

                if (!author) {
                    throw new Error(`Author not created`);
                }

                return author;
            } catch (error) {
                console.error("Error writing data:", error);
                throw new Error("Failed to write data");
            }
        },
    },
};
