import { Pagination, Resolvers } from '../../types'

export const resolvers: Resolvers = {
    Query: {
        artists: (_, { offset, limit }: Pagination, { dataSources }) => {
            return dataSources.artistsService.getAllItems(offset, limit)
        },
        artist: (_, { id }, { dataSources }) => {
            return dataSources.artistsService.getItemById(id)
        },
    },
    Mutation: {
        createArtist: (_, { input }, { dataSources }) => {
            return dataSources.artistsService.createItem(input)
        },
        updateArtist: (_, { id, input }, { dataSources }) => {
            return dataSources.artistsService.updateItem(id, input)
        },
        deleteArtist: (_, { id }, { dataSources }) => {
            return dataSources.artistsService.deleteItem(id)
        },
    },
    Artist: {
        id: ({ _id }) => _id,
        bands: ({ bandsIds }, _, { dataSources }) => {
            return dataSources.bandsService.getItemsByIds(bandsIds)
        },
    },
}
