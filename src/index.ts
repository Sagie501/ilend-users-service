import express from "express";
import { ApolloServer } from "apollo-server-express";
import { rootResolvers as resolvers } from "./root-resolvers";
import { rootTypeDefs as typeDefs } from "./root-schema";
import { Environment } from "./environment/environment";
import { Config } from "./environment/config";
import { buildFederatedSchema } from "@apollo/federation";
import { UserDataSource } from "./data-source/user-data-source";

const app = express();
app.use(express.json({ limit: "2mb" }));

const config: Config = Environment.getConfig();

const usersDataSource = new UserDataSource(config.dbConfig);

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  dataSources: () => {
    return {
      usersDataSource,
    };
  },
});
server.applyMiddleware({ app });

app.listen({ port: config.port }, () => {
  console.log(`${config.serviceName} ready at port: ${config.port}`);
});
