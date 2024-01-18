module.exports = {
    Query: {
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
        author: async ({ authorId }, _, { dataSources }) => {
            try {
                return dataSources.getAuthorOfWork(authorId);
            } catch (error) {
                console.error(
                    `Error getting works for author ${authorId}:`,
                    error
                );
                throw new Error(`Failed to get works for author ${authorId}`);
            }
        },
    },
};
