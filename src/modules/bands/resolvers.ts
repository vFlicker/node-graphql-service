import { Resolvers } from '../../types/index'

export const resolvers: Resolvers = {
    Query: {
        bands: (_, __, { dataSources }) => {
            return dataSources.bandsAPI.getAllBands()
        },
        band: (_, { id }, { dataSources }) => {
            return dataSources.bandsAPI.getBandById(id)
        },
    },
}
