// work.dataSources.js

const { PrismaClient } = require("@prisma/client");
const { getByIdWhere, getByAuthorIdWhere } = require("../helpers");

// Initialize Prisma client
const prisma = new PrismaClient({
    log: ["query"], // Enable query logging
});

/**
 * Get all works from the database.
 * @returns {Promise<Array>} A Promise that resolves to an array of works.
 */
const getAllWorks = async () => prisma.work.findMany();

/**
 * Get a work by its unique identifier (id).
 * @param {number} id - The unique identifier of the work.
 * @returns {Promise<Object|null>} A Promise that resolves to the work object or null if not found.
 */
const getWorkById = async (id) => prisma.work.findUnique(getByIdWhere(id));

/**
 * Get all works by a specific author's unique identifier (authorId).
 * @param {number} authorId - The unique identifier of the author.
 * @returns {Promise<Array>} A Promise that resolves to an array of works by the specified author.
 */
const getWorksByAuthorId = async (authorId) =>
    prisma.work.findMany(getByAuthorIdWhere(authorId));

module.exports = {
    getAllWorks,
    getWorkById,
    getWorksByAuthorId,
};
