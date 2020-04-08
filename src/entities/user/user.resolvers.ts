import { UserConnector } from './user.connector';

export const resolvers = {
  Query: {
    users: async () => {
      return await new UserConnector().getAllUsers()
    },
  },
};
