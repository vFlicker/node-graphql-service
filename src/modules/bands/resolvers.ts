import { Resolvers } from '../../types/index'

export const resolvers: Resolvers = {
    Query: {
        bands: (_, __, { dataSources }) => {
            return dataSources.bandsService.getAllItems()
        },
        band: (_, { id }, { dataSources }) => {
            return dataSources.bandsService.getItemById(id)
        },
    },
    Band: {
        id: ({ _id }) => _id,
        genres: ({ genresIds }, _, { dataSources }) => {
            const bands = []
            for (const genresId of genresIds) {
                bands.push(dataSources.genresService.getItemById(genresId))
            }
            return bands
        },
    },
}
