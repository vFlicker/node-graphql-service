import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        bands: [Band!]!
        band(id: ID!): Band
    }

    type Band {
        id: ID!
        name: String
        origin: String
        members: [Member]
        website: String
        genres: [Genre]
    }

    type Member {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        instrument: String
        years: [String]
    }
`
