import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { rootResolvers } from './root-resolvers';
import { rootTypeDefs } from './root-schema';
import { Environment } from './environment/environment';

const app = express();

const server = new ApolloServer({ typeDefs: rootTypeDefs, resolvers: rootResolvers });
server.applyMiddleware({ app });

const config = Environment.getConfig();
console.log('check');
app.listen({port: config.port}, () => {
  console.log(`${config.serviceName} ready at port: ${config.port}`)
});
