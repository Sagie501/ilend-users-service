export const resolvers = {
  Query: {
    getUserById: async (source, args, { dataSources }) => {
      return await dataSources.usersDataSource.usersConnector.getUserById(args.id)
    },
  },
  User: {
    async __resolveReference(user, { dataSources }) {
      return await dataSources.usersDataSource.usersConnector.getUserById(user.id)
    }
  }
};
