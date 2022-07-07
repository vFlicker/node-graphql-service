import { ApolloServer } from 'apollo-server'
import 'dotenv/config.js'

import { apolloServerConfig } from './config'

export const server = new ApolloServer(apolloServerConfig)

export const startApolloServer = async (server: ApolloServer) => {
    const { url } = await server.listen({ port: process.env.PORT || 4000 })
    console.log(`Server ready at ${url}`)
}
