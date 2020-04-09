import { UserConnector } from './user.connector';

const userConnector: UserConnector = new UserConnector();
const getUserById = userConnector.getUserById;

export const resolvers = {
  Query: {
    getUserById: async (source, args, context, info) => {
      return await new UserConnector().getUserById(args.id)
    },
  },
  User: {
    // TODO: Understand when needed
    __resolveReference(user, { getUserById }){
      return getUserById(user.id)
    }
  }
};
