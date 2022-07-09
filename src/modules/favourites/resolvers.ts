import { Resolvers } from '../../types'

export const resolvers: Resolvers = {
    Query: {
        favourites: (_, __, { dataSources }) => {
            return dataSources.favouritesService.getFavourites()
        },
    },
    Favourites: {
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
        tracks: ({ tracksIds }, _, { dataSources }) => {
            return dataSources.tracksService.getItemsByIds(tracksIds)
        },
    },
}
