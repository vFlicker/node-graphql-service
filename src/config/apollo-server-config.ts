import path from 'path'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

import { BandsAPI, GenresAPI } from '../modules'

const typesArray = loadFilesSync(
    path.resolve(__dirname, '../modules/**/schema.ts'),
)
const resolversArray = loadFilesSync(
    path.resolve(__dirname, '../modules/**/resolvers.ts'),
)

const typeDefs = mergeTypeDefs(typesArray)
const resolvers = mergeResolvers(resolversArray)

export const dataSources = () => ({
    bandsAPI: new BandsAPI(),
    genresAPI: new GenresAPI(),
})

export const apolloServerConfig = {
    typeDefs,
    resolvers,
    dataSources,
}
