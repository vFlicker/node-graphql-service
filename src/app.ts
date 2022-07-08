import { ApolloServer } from 'apollo-server'

import { apolloServerConfig, dotEnvConfig } from './config'

export const server = new ApolloServer(apolloServerConfig)

export const startApolloServer = async (server: ApolloServer) => {
    const { url } = await server.listen({ port: dotEnvConfig.PORT || 4000 })
    console.log(`Server ready at ${url}`)
}
