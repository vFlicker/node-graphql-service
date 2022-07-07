import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        bands: [Band!]!
        band(id: ID!): Band
    }

    type Band {
        _id: ID!
        name: String
        origin: String
        website: String
        genres: [Genre]
    }
`