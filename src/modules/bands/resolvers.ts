import { Resolvers } from '../../types/index'

export const resolvers: Resolvers = {
    Query: {
        bands: (_, __, { dataSources }) => {
            return dataSources.bandAPI.getAllBands()
        },
        band: (_, { id }, { dataSources }) => {
            return dataSources.bandAPI.getBandById(id)
        },
    },
}
