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
    Mutation: {
        createGenre: (_, { input }, { dataSources }) => {
            return dataSources.genresService.createItem(input)
        },
        updateGenre: (_, { id, input }, { dataSources }) => {
            return dataSources.genresService.updateItem(id, input)
        },
        deleteGenre: (_, { id }, { dataSources }) => {
            return dataSources.genresService.deleteItem(id)
        },
    },
    Genre: {
        id: ({ _id }) => _id,
    },
}
