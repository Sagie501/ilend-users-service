import { gql } from "apollo-server-express";

export const genderTypeDefs = gql`
  enum Gender {
    MALE
    FEMALE
  }
`;
