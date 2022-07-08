import { Resolvers } from '../../types'

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
            return dataSources.bandsService.getItemsByIds(bandsIds)
        },
    },
}
