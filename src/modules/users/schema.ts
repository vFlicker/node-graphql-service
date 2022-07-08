import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Query {
        jwt(email: String!, password: String!): JWT
        user(id: ID!): User
    }

    type User {
        id: ID!
        firstName: String
        lastName: String
        password: String
        email: String!
    }

    type JWT {
        jwt: String
    }
`
