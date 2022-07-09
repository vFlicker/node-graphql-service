import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        tracks: [Track!]!
        track(id: ID!): Track
    }

    type Mutation {
        createTrack(input: CreateTrackInput!): Track!
        updateTrack(id: ID!, input: UpdateTrackInput!): Track!
        deleteTrack(id: ID!): DeleteResponse!
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

    input CreateTrackInput {
        title: String!
        albumId: String
        artistsIds: [ID]
        bandsIds: [ID]
        duration: Int
        released: Int
        genresIds: [ID]
    }

    input UpdateTrackInput {
        title: String
        albumId: String
        artistsIds: [ID]
        bandsIds: [ID]
        duration: Int
        released: Int
        genresIds: [ID]
    }
`
