import { gql } from 'apollo-server-express';

// TODO: Handle birthDate
export const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    firstName: String
    lastName: String
    gender: String
    # birthDate
    email: String
    phoneNumber: String
    country: String
    city: String
    street: String
    zipCode: Int
    isAdmin: Boolean
  }
  
  input UserInput {
    firstName: String
    lastName: String
    gender: String
    # birthDate
    email: String
    phoneNumber: String
    country: String
    city: String
    street: String
    zipCode: Int
    password: String
  }

  extend type Query {
    getUserById(id: ID!): User
  }
  
  extend type Mutation {
    addUser(user: UserInput!): User
    removeUser(userId: ID!): Boolean
  }
`;
