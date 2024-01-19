module.exports = {
    Query: {
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
