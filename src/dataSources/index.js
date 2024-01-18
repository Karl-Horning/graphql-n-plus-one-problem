const {
    getAllAuthors,
    getAuthorById,
    getAuthorOfWork,
    getAllWorks,
    getWorkById,
    getWorksByAuthor,
} = require("./dataSources");

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
