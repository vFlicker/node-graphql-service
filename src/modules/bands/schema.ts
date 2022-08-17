import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    bands(offset: Int, limit: Int): [Band!]!
    band(id: ID!): Band
  }

  type Mutation {
    createBand(input: CreateBandInput!): Band!
    updateBand(id: ID!, input: UpdateBandInput!): Band!
    deleteBand(id: ID!): DeleteResponse!
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

  input CreateMemberInput {
    artistId: ID!
    instrument: String
    years: [String]
  }

  input CreateBandInput {
    name: String!
    origin: String
    members: [CreateMemberInput]
    website: String
    genresIds: [ID]
  }

  input UpdateMemberInput {
    artistId: ID
    instrument: String
    years: [String]
  }

  input UpdateBandInput {
    name: String
    origin: String
    members: [UpdateMemberInput]
    website: String
    genresIds: [ID]
  }
`;
