import { Resolvers } from '../../types'

export const resolvers: Resolvers = {
    Query: {
        genres: (_, __, { dataSources }) => {
            return dataSources.genresService.getAllItems()
        },
        genre: (_, { id }, { dataSources }) => {
            return dataSources.genresService.getItemById(id)
        },
    },
    Genre: {
        id: ({ _id }) => _id,
    },
}
