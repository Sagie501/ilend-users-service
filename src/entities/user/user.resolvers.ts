import { UserConnector } from './user.connector';

export const resolvers = {
  Query: {
    getUserById: async (source, args, context, info) => {
      return await new UserConnector().getUserById(args.id)
    },
  },
  User: {
    async __resolveReference(user) {
      return await new UserConnector().getUserById(user.id)
    }
  }
};
