import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User @key(fields: "id") {
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
    getUserById(id: ID!): User
  }
`;
