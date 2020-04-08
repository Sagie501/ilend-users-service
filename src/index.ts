import { ApolloServer } from 'apollo-server';
import { rootResolvers } from './root-resolvers';
import { rootTypeDefs } from './root-schema';

const server = new ApolloServer({ typeDefs: rootTypeDefs, resolvers: rootResolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
