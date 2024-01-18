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
    getAllAuthors,
    getAuthorById,
    getAuthorOfWork,
    getAllWorks,
    getWorkById,
    getWorksByAuthor,
};
