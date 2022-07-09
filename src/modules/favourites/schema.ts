import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        favourites: Favourites
    }

    type Favourites {
        id: ID!
        userId: ID
        artists: [Artist]
        bands: [Band]
        genres: [Genre]
        tracks: [Track]
    }
`
