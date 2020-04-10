export const resolvers = {
  Query: {
    login: async (source, args, { dataSources }) => {
      return await dataSources.usersDataSource.usersConnector.login(args.email, args.password);
    }
  },
  Mutation: {
    addUser: async (source, args, { dataSources }) => {
      return await dataSources.usersDataSource.usersConnector.addUser(args.user);
    },
    updateUser: async (source, args, { dataSources }) => {
      return await dataSources.usersDataSource.usersConnector.updateUser(args.userId, args.user);
    },
    removeUser: async (source, args, { dataSources }) => {
      return await dataSources.usersDataSource.usersConnector.removeUser(args.userId);
    },
  },
  User: {
    async __resolveReference(user, { dataSources }) {
      return await dataSources.usersDataSource.usersConnector.getUserById(user.id)
    }
  }
};
