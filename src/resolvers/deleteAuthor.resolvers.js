/**
 * Resolvers for GraphQL delete mutations related to authors.
 * @module resolvers/author
 */
module.exports = {
    Mutation: {
        /**
         * Mutation resolver for deleting an author.
         * @param {Object} _ - The parent object, not used in this resolver.
         * @param {Object} args - Arguments passed to the resolver, including the author's id.
         * @param {Object} context - The context object, including dataSources for interacting with data.
         * @returns {Promise<Object|null>} A Promise that resolves to the deleted author object or null if not found.
         * @throws {Error} If the deletion fails, an error is thrown.
         */
        deleteAnAuthor: async (_, args, { dataSources }) => {
            try {
                const author = await dataSources.deleteAnAuthor({ ...args });

                if (!author) {
                    throw new Error(`Author not deleted`);
                }

                return author;
            } catch (error) {
                console.error("Error deleting data:", error);
                throw new Error("Failed to delete data");
            }
        },
    },
};
