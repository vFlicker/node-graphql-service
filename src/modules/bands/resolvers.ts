import { Resolvers } from '../../types/index'

export const resolvers: Resolvers = {
    Query: {
        bands: (_, __, { dataSources }) => {
            return dataSources.bandsService.getAllItems()
        },
        band: (_, { id }, { dataSources }) => {
            return dataSources.bandsService.getItemById(id)
        },
    },
    Band: {
        id: ({ _id }) => _id,
        genres: ({ genresIds }, _, { dataSources }) => {
            const bands = []
            for (const genresId of genresIds) {
                bands.push(dataSources.genresService.getItemById(genresId))
            }
            return bands
        },
        members: async ({ members }, _, { dataSources }) => {
            const memberList = []
            for (const { artistId: id, instrument, years } of members) {
                const artist = await dataSources.artistsService.getItemById(id)
                const { firstName, secondName, middleName } = artist
                memberList.push({
                    id,
                    firstName,
                    secondName,
                    middleName,
                    instrument,
                    years,
                })
            }
            return memberList
        },
    },
}
