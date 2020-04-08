import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    # gender
    # birthDate
    email: String
    phoneNumber: String
    # country
    # city
    # street
    zipCode: Int
    isAdmin: Boolean
  }

  extend type Query {
    getUsersById(id: ID!): User
  }
`;
