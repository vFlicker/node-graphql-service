import { Resolvers } from '../../types'

export const resolvers: Resolvers = {
    Query: {
        genres: (_, __, { dataSources }) => {
            return dataSources.genresAPI.getAllGenres()
        },
        genre: (_, { id }, { dataSources }) => {
            return dataSources.genresAPI.getGenreById(id)
        },
    },
}
