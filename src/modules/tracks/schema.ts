import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        tracks: [Track!]!
        track(id: ID!): Track
    }

    type Track {
        id: ID!
        title: String!
        album: Album
        artists: [Artist]
        bands: [Band]
        duration: Int
        released: Int
        genres: [Genre]
    }
`
