import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        jwt(email: String!, password: String!): String!
        user(id: ID!): User!
    }

    type Mutation {
        register(input: CreateUserInput!): User!
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }

    input CreateUserInput {
        firstName: String!
        lastName: String!
        password: String!
        email: String!
    }
`
