export const resolvers = {
  Query: {
    login: async (source, args, { dataSources }) => {
      return await dataSources.usersDataSource.usersConnector.login(args.email, args.password);
    },
    getAllUsers: async (source, args, { dataSources }) => {
      return await dataSources.usersDataSource.usersConnector.getAllUsers();
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
    __resolveReference: async (user, { dataSources }) => {
      return await dataSources.usersDataSource.usersConnector.getUserById(user.id)
    }
  }
};
