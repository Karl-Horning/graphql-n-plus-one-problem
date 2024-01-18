const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAllAuthors = async () => prisma.author.findMany();

const getAuthorById = async (id) =>
    prisma.author.findUnique({
        where: {
            id,
        },
    });

const getAuthorOfWork = async (id) =>
    prisma.author.findUnique({
        where: {
            id,
        },
    });

module.exports = {
    getAllAuthors,
    getAuthorById,
    getAuthorOfWork,
};
