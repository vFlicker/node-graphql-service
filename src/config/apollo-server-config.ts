import path from 'path'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

import { ArtistsService, BandsService, GenresService } from '../modules'

const typesArray = loadFilesSync(
    path.resolve(__dirname, '../modules/**/schema.ts'),
)
const resolversArray = loadFilesSync(
    path.resolve(__dirname, '../modules/**/resolvers.ts'),
)

const typeDefs = mergeTypeDefs(typesArray)
const resolvers = mergeResolvers(resolversArray)

export const dataSources = () => ({
    artistsService: new ArtistsService(),
    bandsService: new BandsService(),
    genresService: new GenresService(),
})

export const apolloServerConfig = {
    typeDefs,
    resolvers,
    dataSources,
}
