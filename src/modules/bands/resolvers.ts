import { Resolvers } from '../../types/index'

export const resolvers: Resolvers = {
    Query: {
        bands: (_, __, { dataSources }) => {
            return dataSources.bandsAPI.getAllBands()
        },
        band: (_, { id }, { dataSources }) => {
            return dataSources.bandsAPI.getBandById(id)
        },
    },
    Band: {
        id: ({ _id }) => _id,
        genres: ({ genresIds }, _, { dataSources }) => {
            const bands = []
            for (const genresId of genresIds) {
                bands.push(dataSources.genresAPI.getGenreById(genresId))
            }
            return bands
        },
    },
}
