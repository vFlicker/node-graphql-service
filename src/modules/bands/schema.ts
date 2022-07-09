import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        bands: [Band!]!
        band(id: ID!): Band
    }

    type Mutation {
        createBand(input: BandInput!): Band!
    }

    type Band {
        id: ID!
        name: String!
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

    input BandInput {
        name: String!
        origin: String
        members: [MemberInput]
        website: String
        genresIds: [String]
    }

    input MemberInput {
        artistId: ID!
        instrument: String
        years: [String]
    }
`
