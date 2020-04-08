import { typeDefs as usersTypeDefs } from '../entities/user/user.schema'
import { gql } from 'apollo-server-express';

export const root = gql`
  type Query {
    root: String
  }
  
  type Mutation {
    root: String
  }
`;

export const rootTypeDefs = [root, usersTypeDefs];
