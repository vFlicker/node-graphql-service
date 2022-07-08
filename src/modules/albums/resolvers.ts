import { Resolvers } from '../../types'

export const resolvers: Resolvers = {
    Query: {
        albums: (_, __, { dataSources }) => {
            return dataSources.albumsService.getAllItems()
        },
        album: (_, { id }, { dataSources }) => {
            return dataSources.albumsService.getItemById(id)
        },
    },
    Album: {
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
        tracks: ({ trackIds }, _, { dataSources }) => {
            return dataSources.tracksService.getItemsByIds(trackIds)
        },
    },
}
