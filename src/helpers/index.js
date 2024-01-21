// helpers/index.js

// Common 'where' by 'id' object for reuse
const getByIdWhere = (id) => ({
    where: {
        id,
    },
});

// Common 'where' by 'authorId' object for reuse
const getByAuthorIdWhere = (authorId) => ({
    where: {
        authorId,
    },
});

/**
 * Converts a timestamp to the YYYY-MM-DD format.
 * @param {number} timestamp - The timestamp to convert.
 * @returns {string} The formatted date in YYYY-MM-DD format.
 */
const formatTimestampToYYYYMMDD = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
};

/**
 * Format author data for consistent output.
 * @param {Object} author - The author object from the database.
 * @returns {Object} The formatted author object.
 */
const formatAuthorData = (author) => ({
    id: author.id,
    name: author.name,
    bio: author.bio,
    birthDate: formatTimestampToYYYYMMDD(author.birthDate),
    deathDate: formatTimestampToYYYYMMDD(author.deathDate),
});

module.exports = {
    getByIdWhere,
    getByAuthorIdWhere,
    formatAuthorData,
    formatTimestampToYYYYMMDD,
};
