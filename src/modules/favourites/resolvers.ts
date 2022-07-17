import { Resolvers } from '../../common'
import { Favourite } from './types'

export const resolvers: Resolvers = {
    Query: {
        favourites: (_, __, { dataSources }) => {
            return dataSources.favouritesService.getAllItems()
        },
    },
    Mutation: {
        addArtistToFavourites(_, { id }, { dataSources }) {
            return dataSources.favouritesService.addItem(id, Favourite.ARTISTS)
        },
        addBandToFavourites(_, { id }, { dataSources }) {
            return dataSources.favouritesService.addItem(id, Favourite.BANDS)
        },
        addGenreToFavourites(_, { id }, { dataSources }) {
            return dataSources.favouritesService.addItem(id, Favourite.GENRES)
        },
        addTrackToFavourites(_, { id }, { dataSources }) {
            return dataSources.favouritesService.addItem(id, Favourite.TRACKS)
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
