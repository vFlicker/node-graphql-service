import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        tracks: [Track!]!
        track(id: ID!): Track
    }

    type Mutation {
        createTrack(input: TrackInput!): Track!
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

    input TrackInput {
        title: String!
        albumId: String
        artistsIds: [String]
        bandsIds: [String]
        duration: Int
        released: Int
        genresIds: [String]
    }
`
