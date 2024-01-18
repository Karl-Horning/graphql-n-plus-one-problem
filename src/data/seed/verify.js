// Verify data in your main application or another script
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
    log: ["query"], // Enable query logging
});

const verifyData = async () => {
    try {
        // Authors
        const allAuthors = await prisma.author.findMany();
        console.log("All authors:", allAuthors);

        // Works
        const allWorks = await prisma.work.findMany();
        console.log("All works:", allWorks);
    } catch (error) {
        console.error("Error verifying data:", error);
    } finally {
        await prisma.$disconnect();
    }
};

// Run the verification function
verifyData();
