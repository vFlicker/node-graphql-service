import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        artists: [Artist!]!
        artist(id: ID!): Artist!
    }

    type Mutation {
        createArtist(input: ArtistInput!): Artist!
    }

    type Artist {
        id: ID!
        firstName: String!
        secondName: String!
        middleName: String
        birthDate: String
        birthPlace: String
        country: String!
        bands: [Band]
        instruments: [String]
    }

    input ArtistInput {
        firstName: String!
        secondName: String!
        middleName: String
        birthDate: String
        birthPlace: String
        country: String!
        bandsIds: [ID]
        instruments: [String]
    }
`
