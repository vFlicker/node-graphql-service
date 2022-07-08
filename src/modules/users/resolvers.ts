import { Resolvers } from '../../types'

export const resolvers: Resolvers = {
    Query: {
        jwt: (_, userData, { dataSources }) => {
            return dataSources.usersService.jwt(userData)
        },
        user: (_, { id }, { dataSources }) => {
            return dataSources.usersService.getUserById(id)
        },
    },
    User: {
        id: ({ _id }) => _id,
    },
}
