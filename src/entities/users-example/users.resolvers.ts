import { UsersConnector } from './users.connector';

export const resolvers = {
  Query: {
    users: async () => {
      return await new UsersConnector().getAllUsers()
    },
  },
};
