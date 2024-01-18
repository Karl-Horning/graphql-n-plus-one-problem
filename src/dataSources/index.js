const {
    getAllAuthors,
    getAuthorById,
    getAuthorOfWork,
} = require("./author.dataSources");

const {
    getAllWorks,
    getWorkById,
    getWorksByAuthor,
} = require("./work.dataSources");

class DataSources {
    constructor() {
        this.getAllAuthors = getAllAuthors;
        this.getAuthorById = getAuthorById;
        this.getAuthorOfWork = getAuthorOfWork;
        this.getAllWorks = getAllWorks;
        this.getWorkById = getWorkById;
        this.getWorksByAuthor = getWorksByAuthor;
    }
}

module.exports = { DataSources };
