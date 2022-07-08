import { Resolvers } from '../../types/index'

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
            const artists = []
            for (const artistId of artistsIds) {
                artists.push(dataSources.artistsService.getItemById(artistId))
            }
            return artists
        },
        bands: ({ bandsIds }, _, { dataSources }) => {
            const bands = []
            for (const artistId of bandsIds) {
                bands.push(dataSources.bandsService.getItemById(artistId))
            }
            return bands
        },
        genres: ({ genresIds }, _, { dataSources }) => {
            const genres = []
            for (const artistId of genresIds) {
                genres.push(dataSources.genresService.getItemById(artistId))
            }
            return genres
        },
    },
}
