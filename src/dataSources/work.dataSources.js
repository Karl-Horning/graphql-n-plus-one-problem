const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
    log: ["query"], // Enable query logging
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

module.exports = {
    getAllWorks,
    getWorkById,
    getWorksByAuthor,
};
