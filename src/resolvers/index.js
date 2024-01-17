const fs = require("fs").promises;

const resolvers = {
    Query: {
        getAllAuthors: async () => {
            try {
                const jsonData = await fs.readFile(
                    "src/data/data.json",
                    "utf-8"
                );
                const authorsData = JSON.parse(jsonData);

                if (!authorsData) {
                    throw new Error(`Author data not found`);
                }

                return authorsData;
            } catch (error) {
                console.error("Error reading JSON file:", error);
                throw new Error("Failed to read JSON file");
            }
        },
        getAuthorById: async (_, { id }) => {
            try {
                const jsonData = await fs.readFile(
                    "src/data/data.json",
                    "utf-8"
                );
                const authorsData = JSON.parse(jsonData);

                // Find the author with the specified ID
                const author = authorsData.find((a) => a.id === id);

                if (!author) {
                    throw new Error(`Author with ID ${id} not found`);
                }

                return author;
            } catch (error) {
                console.error("Error reading JSON file:", error);
                throw new Error("Failed to read JSON file");
            }
        },
    },
};

module.exports = resolvers;
