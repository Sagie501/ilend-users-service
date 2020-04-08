import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    name: String
    age: Int
  }

  extend type Query {
    users: [User]
  }
`;
