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
    Mutation: {
        createTrack: (_, { input }, { dataSources }) => {
            return dataSources.tracksService.createItem(input)
        },
    },
    Track: {
        id: ({ _id }) => _id,
        album: ({ albumId }, _, { dataSources }) => {
            return dataSources.albumsService.getItemById(albumId)
        },
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
