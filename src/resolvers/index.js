// resolvers/index.js

const authorResolvers = require("./author.resolvers");
const workResolvers = require("./work.resolvers");

module.exports = [authorResolvers, workResolvers];
