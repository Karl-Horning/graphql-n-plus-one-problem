// author.dataSources.js

const { PrismaClient } = require("@prisma/client");
const { getByIdWhere, formatAuthorData } = require("../helpers");

// Initialize Prisma client
const prisma = new PrismaClient({
    log: ["query"], // Enable query logging
});

/**
 * Get all authors from the database.
 * @returns {Promise<Array>} A Promise that resolves to an array of authors.
 */
const getAllAuthors = async () => {
    const allAuthors = await prisma.author.findMany();
    return allAuthors.map(formatAuthorData);
};

/**
 * Get an author by their unique identifier (id).
 * @param {number} id - The unique identifier of the author.
 * @returns {Promise<Object|null>} A Promise that resolves to the author object or null if not found.
 */
const getAuthorById = async (id) => {
    const author = await prisma.author.findUnique(getByIdWhere(id));
    return formatAuthorData(author);
};

/**
 * Get the author of a specific work by the work's unique identifier (id).
 * @param {number} id - The unique identifier of the work.
 * @returns {Promise<Object|null>} A Promise that resolves to the author object or null if not found.
 */
const getAuthorOfWork = async (id) => {
    const author = await prisma.author.findUnique(getByIdWhere(id));
    return formatAuthorData(author);
};

/**
 * Create an author in the database.
 * @param {Object} params - Object containing information for creating an author.
 * @param {string} params.name - The name of the author.
 * @param {string} params.bio - The biography of the author.
 * @param {string} params.birthDate - The birth date of the author in "YYYY-MM-DD" format.
 * @param {string} [params.deathDate="9999-12-31"] - The death date of the author in "YYYY-MM-DD" format (default is "9999-12-31").
 * @returns {Promise<Object>} A Promise that resolves to the created author object.
 */
const createAnAuthor = async ({
    name,
    bio,
    birthDate,
    deathDate = "9999-12-31",
}) => {
    const createdAuthor = await prisma.author.create({
        data: {
            name,
            birthDate: new Date(birthDate),
            deathDate: new Date(deathDate),
            bio,
        },
    });

    return createdAuthor;
};

/**
 * Delete an author by their unique identifier (id) or name.
 * @param {Object} params - Object containing information for deleting an author.
 * @param {number} [params.id] - The unique identifier of the author.
 * @param {string} [params.name] - The name of the author.
 * @returns {Promise<Object|null>} A Promise that resolves to the deleted author object or null if not found.
 * @throws {Error} If neither id nor name is provided, or if the deletion fails.
 */
const deleteAnAuthor = async ({ id, name }) => {
    if (!id && !name) {
        console.error("An author ID or name must be included");
        throw new Error("An author ID or name must be included");
    }

    let deletedAuthor;

    // Delete by id if provided
    if (id) {
        deletedAuthor = await prisma.author.delete({
            where: {
                id,
            },
        });
    }

    // Delete by name if provided
    if (name) {
        deletedAuthor = await prisma.author.delete({
            where: {
                name,
            },
        });
    }

    return deletedAuthor;
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    getAuthorOfWork,
    createAnAuthor,
    deleteAnAuthor,
};
