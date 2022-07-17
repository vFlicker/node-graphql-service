import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        favourites: Favourites
    }

    type Mutation {
        addArtistToFavourites(id: ID!): Favourites
        addBandToFavourites(id: ID!): Favourites
        addGenreToFavourites(id: ID!): Favourites
        addTrackToFavourites(id: ID!): Favourites
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
