import path from 'path'
import {
    ApolloServerExpressConfig,
    ExpressContext,
} from 'apollo-server-express'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

import {
    AlbumsService,
    ArtistsService,
    BandsService,
    GenresService,
    FavouritesService,
    TracksService,
    UsersService,
} from '../modules'

const typesArray = loadFilesSync(path.resolve(__dirname, '../**/schema.ts'))
const resolversArray = loadFilesSync(
    path.resolve(__dirname, '../modules/**/resolvers.ts'),
)

const typeDefs = mergeTypeDefs(typesArray)
const resolvers = mergeResolvers(resolversArray)

const context = ({ req }: ExpressContext) => {
    const token = (req.headers && req.headers.authorization) || ''
    return { token }
}

export const dataSources = () => ({
    albumsService: new AlbumsService(),
    artistsService: new ArtistsService(),
    bandsService: new BandsService(),
    genresService: new GenresService(),
    favouritesService: new FavouritesService(),
    tracksService: new TracksService(),
    usersService: new UsersService(),
})

export const apolloServerConfig: ApolloServerExpressConfig = {
    typeDefs,
    resolvers,
    dataSources,
    context,
}
