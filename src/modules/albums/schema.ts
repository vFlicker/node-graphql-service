import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        albums: [Album!]!
        album(id: ID!): Album
    }

    type Mutation {
        createAlbum(input: AlbumInput!): Album!
    }

    type Album {
        id: ID!
        name: String!
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
    }

    input AlbumInput {
        name: String!
        released: Int
        artistsIds: [String]
        bandsIds: [String]
        trackIds: [String]
        genresIds: [String]
        image: String
    }
`
