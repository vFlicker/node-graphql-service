import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    albums(offset: Int, limit: Int): [Album!]!
    album(id: ID!): Album
  }

  type Mutation {
    createAlbum(input: CreateAlbumInput!): Album!
    updateAlbum(id: ID!, input: UpdateAlbumInput!): Album!
    deleteAlbum(id: ID!): DeleteResponse!
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

  input CreateAlbumInput {
    name: String!
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    trackIds: [ID]
    genresIds: [ID]
    image: String
  }

  input UpdateAlbumInput {
    name: String
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    trackIds: [ID]
    genresIds: [ID]
    image: String
  }
`;
