import { UserConnector } from './user.connector';

export const resolvers = {
  Query: {
    getUsersById: async (source, args, context, info) => {
      return await new UserConnector().getUserById(args.id)
    },
  },
};
