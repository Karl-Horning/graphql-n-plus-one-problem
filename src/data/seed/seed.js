// seed.js

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const authorsToInsert = [
    {
        name: "Jane Austen",
        birthDate: new Date("1775-12-16"),
        deathDate: new Date("1817-07-18"),
        bio: "Jane Austen was a Georgian and Regency-era novelist born on 16 December 1775 and died on 18 July 1817. Known for her wit and keen observations, Austen's novels explore the relationships and manners of the English landed gentry in the early 19th century.",
    },
    {
        name: "Charlotte Brontë",
        birthDate: new Date("1816-04-21"),
        deathDate: new Date("1855-03-31"),
        bio: "Charlotte Brontë was a Victorian novelist born on 21 April 1816 and died on 31 March 1855. She is best known for her novel 'Jane Eyre,' which remains a classic of English literature.",
    },
    {
        name: "Anne Brontë",
        birthDate: new Date("1820-01-17"),
        deathDate: new Date("1849-05-28"),
        bio: "Anne Brontë was a Victorian novelist born on 17 January 1820 and died on 28 May 1849. She is known for her novels 'Agnes Grey' and 'The Tenant of Wildfell Hall.'",
    },
    {
        name: "Charles Dickens",
        birthDate: new Date("1812-02-07"),
        deathDate: new Date("1870-06-09"),
        bio: "Charles Dickens was a Victorian novelist born on 7 February 1812 and died on 9 June 1870. Dickens is one of the most celebrated and prolific authors of the 19th century. His novels, known for their vivid characters and social commentary, reflect the realities of Victorian society. Some of his most famous works include 'A Tale of Two Cities,' 'Great Expectations,' and 'A Christmas Carol.'",
    },
    {
        name: "George Eliot",
        birthDate: new Date("1819-11-22"),
        deathDate: new Date("1880-12-22"),
        bio: "George Eliot (Mary Ann Evans) was a prominent Victorian novelist born on 22 November 1819 and died on 22 December 1880. Her novels often explore complex characters, psychological insight, and societal issues of her time. 'Middlemarch' is considered one of her masterpieces.",
    },
    {
        name: "Thomas Hardy",
        birthDate: new Date("1840-06-02"),
        deathDate: new Date("1928-01-11"),
        bio: "Thomas Hardy was a Victorian novelist born on 2 June 1840 and died on 11 January 1928. He is known for his novels that explore rural life, social issues, and the complexities of human relationships in Victorian England.",
    },
    {
        name: "Edgar Allan Poe",
        birthDate: new Date("1809-01-19"),
        deathDate: new Date("1849-10-07"),
        bio: "Edgar Allan Poe was an American writer born on 19 January 1809 and died on 7 October 1849. He is known for his dark and macabre tales. His works often explore themes of madness, death, and the macabre, and he is considered a master of the short story and poetry in the Gothic tradition. 'The Raven' is one of his most famous poems, and 'The Tell-Tale Heart' and 'The Fall of the House of Usher' are among his well-known short stories.",
    },
    {
        name: "Mark Twain",
        birthDate: new Date("1835-11-30"),
        deathDate: new Date("1910-04-21"),
        bio: "Mark Twain (Samuel Clemens) was an American writer born on 30 November 1835 and died on 21 April 1910. He is known for his humour, social commentary, and iconic works such as 'The Adventures of Tom Sawyer' and 'Adventures of Huckleberry Finn.'",
    },
    {
        name: "Emily Brontë",
        birthDate: new Date("1818-07-30"),
        deathDate: new Date("1848-12-19"),
        bio: "Emily Brontë was a Victorian novelist born on 30 July 1818 and died on 19 December 1848. She is best known for her only novel, 'Wuthering Heights,' which is considered a classic of English literature.",
    },
    {
        name: "Oscar Wilde",
        birthDate: new Date("1854-10-16"),
        deathDate: new Date("1900-11-30"),
        bio: "Oscar Wilde was an Irish playwright, poet, and author born on 16 October 1854 and died on 30 November 1900. Wilde is known for his wit, satirical plays, and flamboyant style. 'The Picture of Dorian Gray' is his only novel and remains one of his most famous and enduring works. 'The Importance of Being Earnest' is considered one of the greatest comedies in the English language.",
    },
];

const worksToInsert = [
    {
        authorId: 1,
        title: "Sense and Sensibility",
        year: "1811",
        notes: "",
    },
    {
        authorId: 1,
        title: "Pride and Prejudice",
        year: "1813",
        notes: "",
    },
    {
        authorId: 1,
        title: "Mansfield Park",
        year: "1814",
        notes: "",
    },
    {
        authorId: 1,
        title: "Emma",
        year: "1815",
        notes: "",
    },
    {
        authorId: 1,
        title: "Northanger Abbey",
        year: "1818",
        notes: "posthumously published",
    },
    {
        authorId: 1,
        title: "Persuasion",
        year: "1818",
        notes: "posthumously published",
    },
    {
        authorId: 2,
        title: "Jane Eyre",
        year: "1847",
        notes: "",
    },
    {
        authorId: 2,
        title: "Shirley",
        year: "1849",
        notes: "",
    },
    {
        authorId: 2,
        title: "Villette",
        year: "1853",
        notes: "",
    },
    {
        authorId: 3,
        title: "Agnes Grey",
        year: "1847",
        notes: "",
    },
    {
        authorId: 3,
        title: "The Tenant of Wildfell Hall",
        year: "1848",
        notes: "",
    },
    {
        authorId: 4,
        title: "The Pickwick Papers",
        year: "1837",
        notes: "",
    },
    {
        authorId: 4,
        title: "Oliver Twist",
        year: "1837-1839",
        notes: "",
    },
    {
        authorId: 4,
        title: "Nicholas Nickleby",
        year: "1838-1839",
        notes: "",
    },
    {
        authorId: 4,
        title: "A Christmas Carol",
        year: "1843",
        notes: "",
    },
    {
        authorId: 4,
        title: "David Copperfield",
        year: "1849-1850",
        notes: "",
    },
    {
        authorId: 4,
        title: "Bleak House",
        year: "1852-1853",
        notes: "",
    },
    {
        authorId: 4,
        title: "A Tale of Two Cities",
        year: "1859",
        notes: "",
    },
    {
        authorId: 4,
        title: "Great Expectations",
        year: "1860-1861",
        notes: "",
    },
    {
        authorId: 5,
        title: "Adam Bede",
        year: "1859",
        notes: "",
    },
    {
        authorId: 5,
        title: "The Mill on the Floss",
        year: "1860",
        notes: "",
    },
    {
        authorId: 5,
        title: "Silas Marner",
        year: "1861",
        notes: "",
    },
    {
        authorId: 5,
        title: "Romola",
        year: "1862-1863",
        notes: "",
    },
    {
        authorId: 5,
        title: "Felix Holt, the Radical",
        year: "1866",
        notes: "",
    },
    {
        authorId: 5,
        title: "Middlemarch",
        year: "1871-1872",
        notes: "",
    },
    {
        authorId: 6,
        title: "Desperate Remedies",
        year: "1871",
        notes: "",
    },
    {
        authorId: 6,
        title: "Under the Greenwood Tree",
        year: "1872",
        notes: "",
    },
    {
        authorId: 6,
        title: "A Pair of Blue Eyes",
        year: "1873",
        notes: "",
    },
    {
        authorId: 6,
        title: "Far from the Madding Crowd",
        year: "1874",
        notes: "",
    },
    {
        authorId: 6,
        title: "The Return of the Native",
        year: "1878",
        notes: "",
    },
    {
        authorId: 6,
        title: "Tess of the d'Urbervilles",
        year: "1891",
        notes: "",
    },
    {
        authorId: 6,
        title: "Jude the Obscure",
        year: "1895",
        notes: "",
    },
    {
        authorId: 7,
        title: "The Tell-Tale Heart",
        year: "1843",
        notes: "",
    },
    {
        authorId: 7,
        title: "The Fall of the House of Usher",
        year: "1839",
        notes: "",
    },
    {
        authorId: 7,
        title: "The Murders in the Rue Morgue",
        year: "1841",
        notes: "",
    },
    {
        authorId: 7,
        title: "The Masque of the Red Death",
        year: "1842",
        notes: "",
    },
    {
        authorId: 7,
        title: "The Pit and the Pendulum",
        year: "1842",
        notes: "",
    },
    {
        authorId: 7,
        title: "The Raven",
        year: "1845",
        notes: "",
    },
    {
        authorId: 7,
        title: "The Cask of Amontillado",
        year: "1846",
        notes: "",
    },
    {
        authorId: 7,
        title: "Annabel Lee",
        year: "1849",
        notes: "",
    },
    {
        authorId: 8,
        title: "The Celebrated Jumping Frog of Calaveras County",
        year: "1865",
        notes: "",
    },
    {
        authorId: 8,
        title: "The Innocents Abroad",
        year: "1869",
        notes: "",
    },
    {
        authorId: 8,
        title: "The Adventures of Tom Sawyer",
        year: "1876",
        notes: "",
    },
    {
        authorId: 8,
        title: "The Prince and the Pauper",
        year: "1881",
        notes: "",
    },
    {
        authorId: 8,
        title: "Adventures of Huckleberry Finn",
        year: "1884",
        notes: "",
    },
    {
        authorId: 8,
        title: "A Connecticut Yankee in King Arthur's Court",
        year: "1889",
        notes: "",
    },
    {
        authorId: 9,
        title: "Wuthering Heights",
        year: "1847",
        notes: "",
    },
    {
        authorId: 10,
        title: "The Picture of Dorian Gray",
        year: "1890",
        notes: "",
    },
    {
        authorId: 10,
        title: "The Happy Prince and Other Tales",
        year: "1888",
        notes: "",
    },
    {
        authorId: 10,
        title: "De Profundis",
        year: "1905",
        notes: "",
    },
    {
        authorId: 10,
        title: "The Importance of Being Earnest",
        year: "1895",
        notes: "",
    },
    {
        authorId: 10,
        title: "Salomé",
        year: "published in 1893, performed in 1896",
        notes: "",
    },
];

const seed = async () => {
    try {

        // createMany doesn't work with SQLite
        for (const person of authorsToInsert) {
            await prisma.author.create({
                data: {
                    name: person.name,
                    birthDate: person.birthDate,
                    deathDate: person.deathDate,
                    bio: person.bio,
                },
            });
        }

        for (const book of worksToInsert) {
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

        console.log("Seeding completed successfully.");
    } catch (error) {
        console.error("Error seeding database:", error);
    } finally {
        await prisma.$disconnect();
    }
};

// Run the seed function
seed();
