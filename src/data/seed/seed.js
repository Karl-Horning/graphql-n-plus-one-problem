// seed.js

const { PrismaClient } = require("@prisma/client");
const { authorsToInsert, worksToInsert } = require("./seedData");

// Function to seed the database with authors
const seedAuthors = async (prisma, authors) => {
    for (const person of authors) {
        await prisma.author.create({
            data: {
                name: person.name,
                birthDate: person.birthDate,
                deathDate: person.deathDate,
                bio: person.bio,
            },
        });
    }
};

// Function to seed the database with works
const seedWorks = async (prisma, works) => {
    for (const book of works) {
        await prisma.work.create({
            data: {
                author: {
                    connect: { id: book.authorId },
                },
                title: book.title,
                year: book.year,
                notes: book.notes,
            },
        });
    }
};

/**
 * Seed function to populate the database with authors and works.
 * @param {PrismaClient} prisma - The PrismaClient instance.
 * @returns {Promise<void>}
 */
const seed = async (prisma) => {
    // Use transactions for data consistency
    const transaction = await prisma.$transaction;

    try {
        // Seed authors
        await seedAuthors(prisma, authorsToInsert);

        // Seed works
        await seedWorks(prisma, worksToInsert);

        console.log("Seeding completed successfully.");
    } catch (error) {
        // Roll back the transaction on error
        console.error("Error seeding database:", error);
        await transaction.$rollback();
    } finally {
        // Disconnect Prisma client
        await prisma.$disconnect();
    }
};

// Initialize Prisma client
const prisma = new PrismaClient({
    log: ["query"], // Enable query logging
});

// Run the seed function
seed(prisma);
