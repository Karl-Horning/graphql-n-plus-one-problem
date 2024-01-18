const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllAuthors = async () => prisma.author.findMany();

const getAuthorById = async (id) =>
    prisma.author.findUnique({
        where: {
            id,
        },
    });

const getWorksByAuthor = async (authorId) =>
    prisma.work.findMany({
        where: {
            authorId,
        },
    });

const resolvers = {
    Query: {
        getAllAuthors: async () => {
            try {
                const authorsData = await getAllAuthors();

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
                const author = await getAuthorById(id);

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
    Author: {
        works: async ({ id }) => {
            try {
                return getWorksByAuthor(id);
            } catch (error) {
                console.error(`Error getting works for author ${id}:`, error);
                throw new Error(`Failed to get works for author ${id}`);
            }
        },
    },
};

module.exports = resolvers;
