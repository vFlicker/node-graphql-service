import { gql } from 'apollo-server'

export const typeDefs = gql`
    type DeleteResponse {
        acknowledged: Boolean
        deletedCount: Int
    }
`
