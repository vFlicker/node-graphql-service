import { Resolvers } from '../../types'

export const resolvers: Resolvers = {
    Query: {
        tracks: (_, __, { dataSources }) => {
            return dataSources.tracksService.getAllItems()
        },
        track: (_, { id }, { dataSources }) => {
            return dataSources.tracksService.getItemById(id)
        },
    },
    Track: {
        id: ({ _id }) => _id,
        artists: ({ artistsIds }, _, { dataSources }) => {
            return dataSources.artistsService.getItemsByIds(artistsIds)
        },
        bands: ({ bandsIds }, _, { dataSources }) => {
            return dataSources.bandsService.getItemsByIds(bandsIds)
        },
        genres: ({ genresIds }, _, { dataSources }) => {
            return dataSources.genresService.getItemsByIds(genresIds)
        },
    },
}
