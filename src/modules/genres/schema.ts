import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        genres: [Genre!]!
        genre(id: ID!): Genre
    }

    type Genre {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }
`
