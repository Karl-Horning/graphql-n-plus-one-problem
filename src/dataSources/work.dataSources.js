const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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
