import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User @key(fields: "id") {
    id: ID!
    firstName: String
    lastName: String
    gender: Gender
    birthDate: Long
    email: String
    phoneNumber: String
    country: String
    city: String
    street: String
    zipCode: Int
    isAdmin: Boolean
    password: String
  }
  
  input UserInput {
    firstName: String
    lastName: String
    gender: Gender
    birthDate: Long
    email: String
    phoneNumber: String
    country: String
    city: String
    street: String
    zipCode: Int
    password: String
  }

  extend type Query {
    login(email: String!, password: String!): User
    getAllUsers: [User]
  }
  
  extend type Mutation {
    addUser(user: UserInput!): User
    updateUser(userId: ID!, user: UserInput!): User
    removeUser(userId: ID!): Boolean
  }
`;
