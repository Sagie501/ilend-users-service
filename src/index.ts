import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { rootResolvers } from './root-resolvers';
import { rootTypeDefs } from './root-schema';

const app = express();

const server = new ApolloServer({ typeDefs: rootTypeDefs, resolvers: rootResolvers });
server.applyMiddleware({ app });

app.listen({port: 4000}, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
});
