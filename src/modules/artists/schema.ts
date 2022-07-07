import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        artists: [Artist!]!
        artist(id: ID!): Artist
    }

    type Artist {
        _id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [Band]
        instruments: [String]
    }
`
