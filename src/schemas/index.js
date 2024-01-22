// schemas/index.js

const { gql } = require("apollo-server");

const typeDefs = gql`
    """
    Work type represents a work (for example, a book) in the system
    """
    type Work {
        """
        Unique identifier for the work
        """
        id: Int!

        """
        Title of the work
        """
        title: String!

        """
        Year of publication or creation
        """
        year: String!

        """
        Additional notes about the work
        """
        notes: String

        """
        Unique identifier of the author associated with the work
        """
        authorId: Int!

        """
        Fetch the author details for the work
        """
        author(id: Int): Author
    }

    type Author {
        """
        Unique identifier for the author
        """
        id: Int!

        """
        Name of the author
        """
        name: String!

        """
        Birthdate of the author
        """
        birthDate: String!

        """
        Date of death (if applicable) of the author
        """
        deathDate: String

        """
        List of works by the author
        """
        works: [Work!]!

        """
        Biography or additional information about the author
        """
        bio: String!
    }

    """
    Query type defines the available queries in the GraphQL schema
    """
    type Query {
        """
        Get all authors in the system
        """
        getAllAuthors: [Author!]!

        """
        Get author details by their unique identifier
        """
        getAuthorById(id: Int!): Author

        """
        Get all works in the system
        """
        getAllWorks: [Work!]!

        """
        Get work details by its unique identifier
        """
        getWorkById(id: Int!): Work
    }

    type Mutation {
        createAnAuthor(
            """
            Name of the author
            """
            name: String

            """
            Birthdate of the author
            """
            birthDate: String

            """
            Date of death (if applicable) of the author
            """
            deathDate: String

            """
            Biography or additional information about the author
            """
            bio: String
        ): Author!

        deleteAnAuthor(
            """
            Unique identifier for the author
            """
            id: Int

            """
            Name of the author
            """
            name: String
        ): Author!
    }
`;

module.exports = typeDefs;
