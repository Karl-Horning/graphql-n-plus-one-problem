// author.dataSources.js

const { PrismaClient } = require("@prisma/client");
const { getByIdWhere } = require("../helpers");

// Initialize Prisma client
const prisma = new PrismaClient({
    log: ["query"], // Enable query logging
});

/**
 * Get all authors from the database.
 * @returns {Promise<Array>} A Promise that resolves to an array of authors.
 */
const getAllAuthors = async () => prisma.author.findMany();

/**
 * Get an author by their unique identifier (id).
 * @param {number} id - The unique identifier of the author.
 * @returns {Promise<Object|null>} A Promise that resolves to the author object or null if not found.
 */
const getAuthorById = async (id) => prisma.author.findUnique(getByIdWhere(id));

/**
 * Get the author of a specific work by the work's unique identifier (id).
 * @param {number} id - The unique identifier of the work.
 * @returns {Promise<Object|null>} A Promise that resolves to the author object or null if not found.
 */
const getAuthorOfWork = async (id) =>
    prisma.author.findUnique(getByIdWhere(id));

module.exports = {
    getAllAuthors,
    getAuthorById,
    getAuthorOfWork,
};
