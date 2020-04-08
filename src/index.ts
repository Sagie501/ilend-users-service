import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { rootResolvers } from './root-resolvers';
import { rootTypeDefs } from './root-schema';
import { Environment } from './environment/environment';

const app = express();

const server = new ApolloServer({ typeDefs: rootTypeDefs, resolvers: rootResolvers });
server.applyMiddleware({ app });

app.listen({port: Environment.getConfig().port}, () => {
  console.log(`🚀 Server ready at http://localhost:${Environment.getConfig().port}${server.graphqlPath}`)
});
