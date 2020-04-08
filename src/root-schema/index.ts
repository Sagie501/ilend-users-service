import { typeDefs as booksTypeDefs } from '../entities/books-example/books.schema'
import { typeDefs as usersTypeDefs } from '../entities/users-example/users.schema'
import { gql } from 'apollo-server-express';

export const root = gql`
  type Query {
    root: String
  }
  
  type Mutation {
    root: String
  }
`;

export const rootTypeDefs = [root, booksTypeDefs, usersTypeDefs];
