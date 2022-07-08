import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        albums: [Album!]!
        album(id: ID!): Album
    }

    type Album {
        id: ID!
        name: String
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
    }
`
