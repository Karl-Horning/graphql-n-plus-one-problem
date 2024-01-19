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

module.exports = { getByIdWhere, getByAuthorIdWhere };
