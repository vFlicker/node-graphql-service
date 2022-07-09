import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        artists: [Artist!]!
        artist(id: ID!): Artist!
    }

    type Mutation {
        createArtist(input: CreateArtistInput!): Artist!
        updateArtist(id: ID!, input: UpdateArtistInput!): Artist!
        deleteArtist(id: ID!): DeleteResponse!
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

    input CreateArtistInput {
        firstName: String!
        secondName: String!
        middleName: String
        birthDate: String
        birthPlace: String
        country: String!
        bandsIds: [ID]
        instruments: [String]
    }

    input UpdateArtistInput {
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bandsIds: [ID]
        instruments: [String]
    }
`
