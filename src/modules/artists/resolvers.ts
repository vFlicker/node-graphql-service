import { Resolvers } from '../../types/index'

export const resolvers: Resolvers = {
    Query: {
        artists: (_, __, { dataSources }) => {
            return dataSources.artistsAPI.getAllArtists()
        },
        artist: (_, { id }, { dataSources }) => {
            return dataSources.artistsAPI.getArtistById(id)
        },
    },
    Artist: {
        id: ({ _id }) => _id,
        bands: ({ bandsIds }, _, { dataSources }) => {
            const bands = []
            for (const bandsId of bandsIds) {
                bands.push(dataSources.bandsAPI.getBandById(bandsId))
            }
            return bands
        },
    },
}
