import 'dotenv/config.js'

import { ApolloServer } from 'apollo-server'

import { typeDefs } from './modules/genres/schema'
import { resolvers } from './modules/genres/resolvers'
import { GenreAPI } from './modules/genres/service'

const dataSources = () => ({
    genreAPI: new GenreAPI(),
})

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources,
})

export const startApolloServer = async (server: ApolloServer) => {
    const { url } = await server.listen({ port: process.env.PORT || 4000 })
    console.log(`Server ready at ${url}`)
}
