import { ApolloServer } from 'apollo-server';

import { apolloServerConfig, dotEnvConfig } from './config';

const server = new ApolloServer(apolloServerConfig);

export const startApolloServer = async () => {
  const { url } = await server.listen({ port: dotEnvConfig.PORT || 4000 });
  console.log(`Server ready at ${url}`);
};
