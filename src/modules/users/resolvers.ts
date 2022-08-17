import { Resolvers } from '../../common';

export const resolvers: Resolvers = {
  Query: {
    jwt: (_, input, { dataSources }) => {
      return dataSources.usersService.jwt(input);
    },
    user: (_, { id }, { dataSources }) => {
      return dataSources.usersService.getUserById(id);
    },
  },
  Mutation: {
    register: (_, { input }, { dataSources }) => {
      return dataSources.usersService.register(input);
    },
  },
  User: {
    id: ({ _id }) => _id,
  },
};
