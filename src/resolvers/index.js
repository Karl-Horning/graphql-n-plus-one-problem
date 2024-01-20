// resolvers/index.js

const authorResolvers = require("./author.resolvers");
const createAuthorResolvers = require("./createAuthor.resolvers");
const workResolvers = require("./work.resolvers");

module.exports = [authorResolvers, createAuthorResolvers, workResolvers];
