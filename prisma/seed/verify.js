// verify.js
const { PrismaClient } = require("@prisma/client");
const chalk = require("chalk");
const { yellow, green } = chalk;

// Initialize Prisma client
const prisma = new PrismaClient({
    log: ["query"], // Enable query logging
});

/**
 * Verify data in the database by fetching and logging all authors and works.
 * @returns {Promise<void>}
 */
const verifyData = async () => {
    try {
        // Fetch and log all authors
        const allAuthors = await prisma.author.findMany();
        console.log(yellow(`There are ${green(allAuthors.length)} authors`));

        // Fetch and log all works
        const allWorks = await prisma.work.findMany();
        console.log(yellow(`There are ${green(allWorks.length)} works`));
    } catch (error) {
        console.error("Error verifying data:", error);
    } finally {
        await prisma.$disconnect();
    }
};

// Run the verification function
verifyData();
