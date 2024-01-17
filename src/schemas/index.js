const { gql } = require("apollo-server");

const typeDefs = gql`
    type Work {
        id: Int!
        title: String!
        year: String!
        notes: String
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
    }
`;

module.exports = typeDefs;
