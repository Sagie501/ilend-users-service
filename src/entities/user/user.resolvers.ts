export const resolvers = {
  Query: {
    getUserById: async (source, args, { dataSources }) => {
      return await dataSources.usersDataSource.usersConnector.getUserById(args.id)
    }
  },
  Mutation: {
    addUser: async (source, args, { dataSources }) => {
      return await dataSources.usersDataSource.usersConnector.addUser(args.user);
    }
  },
  User: {
    async __resolveReference(user, { dataSources }) {
      return await dataSources.usersDataSource.usersConnector.getUserById(user.id)
    }
  }
};
