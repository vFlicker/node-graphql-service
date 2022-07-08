import { Resolvers } from '../../types/index'

export const resolvers: Resolvers = {
    Query: {
        artists: (_, __, { dataSources }) => {
            return dataSources.artistsService.getAllItems()
        },
        artist: (_, { id }, { dataSources }) => {
            return dataSources.artistsService.getItemById(id)
        },
    },
    Artist: {
        id: ({ _id }) => _id,
        bands: ({ bandsIds }, _, { dataSources }) => {
            const bands = []
            for (const bandsId of bandsIds) {
                bands.push(dataSources.bandsService.getItemById(bandsId))
            }
            return bands
        },
    },
}
