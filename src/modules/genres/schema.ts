import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        genres: [Genre!]!
        genre(id: ID!): Genre
    }

    type Mutation {
        createGenre(input: CreateGenreInput!): Genre!
        updateGenre(id: ID!, input: UpdateGenreInput!): Genre!
        deleteGenre(id: ID!): DeleteResponse!
    }

    type Genre {
        id: ID!
        name: String!
        description: String
        country: String
        year: Int
    }

    input CreateGenreInput {
        name: String!
        description: String
        country: String
        year: Int
    }

    input UpdateGenreInput {
        name: String
        description: String
        country: String
        year: Int
    }
`
