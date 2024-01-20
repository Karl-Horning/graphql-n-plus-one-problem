// dataSources/index.js

const {
    getAllAuthors,
    getAuthorById,
    getAuthorOfWork,
    createAnAuthor,
} = require("./author.dataSources");

const {
    getAllWorks,
    getWorkById,
    getWorksByAuthorId,
} = require("./work.dataSources");

class DataSources {
    constructor() {
        // Author data sources
        this.getAllAuthors = getAllAuthors;
        this.getAuthorById = getAuthorById;
        this.getAuthorOfWork = getAuthorOfWork;
        this.createAnAuthor = createAnAuthor;

        // Work data sources
        this.getAllWorks = getAllWorks;
        this.getWorkById = getWorkById;
        this.getWorksByAuthorId = getWorksByAuthorId;
    }
}

module.exports = { DataSources };
