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
        birth_date: String!
        death_date: String!
        works: [Work!]!
        bio: String!
    }

    type Query {
        getAuthorById(id: Int!): Author
    }
`;

module.exports = typeDefs;
