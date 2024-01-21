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

module.exports = { getByIdWhere, getByAuthorIdWhere, formatTimestampToYYYYMMDD };
