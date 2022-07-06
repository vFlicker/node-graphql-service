import { Resolvers } from '../../types'

export const resolvers: Resolvers = {
    Query: {
        genres: (_, __, { dataSources }) => {
            return dataSources.genreAPI.getAllGenres()
        },
        genre: (_, { id }, { dataSources }) => {
            return dataSources.genreAPI.getGenreById(id)
        },
    },
}
