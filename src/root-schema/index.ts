import { typeDefs as usersTypeDefs } from '../entities/user/user.schema'
import { gql } from 'apollo-server-express';
import * as _ from 'lodash';

export const root = gql`
  type Query {
    root: String
  }
  
  type Mutation {
    root: String
  }
`;

export const rootTypeDefs = _.merge(root, usersTypeDefs);
