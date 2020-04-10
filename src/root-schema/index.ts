import { typeDefs as usersTypeDefs } from '../entities/user/user.schema'
import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';

export const rootTypeDefs = gql`${mergeTypes([usersTypeDefs])}`;
