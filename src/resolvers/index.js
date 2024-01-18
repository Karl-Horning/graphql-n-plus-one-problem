const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllAuthors = async () => prisma.author.findMany();

const getAuthorById = async (id) =>
    prisma.author.findUnique({
        where: {
            id,
        },
    });

const getAllWorks = async () => prisma.work.findMany();

const getWorkById = async (id) =>
    prisma.work.findUnique({
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

const getAuthorOfWork = async (id) =>
    prisma.author.findUnique({
        where: {
            id,
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
                console.error("Error reading data:", error);
                throw new Error("Failed to read data");
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
                console.error("Error reading data:", error);
                throw new Error("Failed to read data");
            }
        },
        getAllWorks: async () => {
            try {
                const worksData = await getAllWorks();

                if (!worksData) {
                    throw new Error(`Work data not found`);
                }

                return worksData;
            } catch (error) {
                console.error("Error reading data:", error);
                throw new Error("Failed to read data");
            }
        },
        getWorkById: async (_, { id }) => {
            try {
                const author = await getWorkById(id);

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
    Work: {
        author: async ({ authorId }) => {
            try {
                return getAuthorOfWork(authorId);
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

module.exports = resolvers;
