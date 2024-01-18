const { gql } = require("apollo-server");

const typeDefs = gql`
    type Work {
        id: Int!
        title: String!
        year: String!
        notes: String
        authorId: Int!
        author(id: Int): Author
    }

    type Author {
        id: Int!
        name: String!
        birthDate: String!
        deathDate: String!
        works: [Work!]!
        bio: String!
    }

    type Query {
        getAllAuthors: [Author!]!
        getAuthorById(id: Int!): Author
        getAllWorks: [Work!]!
        getWorkById(id: Int!): Work
    }
`;

module.exports = typeDefs;
