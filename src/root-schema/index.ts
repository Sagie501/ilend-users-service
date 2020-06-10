import { typeDefs as usersTypeDefs } from '../entities/user/user.schema'
import { gql } from 'apollo-server-express';
import { genderTypeDefs } from '../enums/gender/gender-enum.schema';
import { typeDefs as scalarsTypeDefs } from 'graphql-scalars';
import { mergeTypeDefs } from '@graphql-tools/merge';

export const rootTypeDefs = gql`${mergeTypeDefs([gql`${scalarsTypeDefs}`, genderTypeDefs, usersTypeDefs], {
  useSchemaDefinition: true,
  forceSchemaDefinition: true,
  throwOnConflict: true,
  commentDescriptions: true,
  reverseDirectives: true
})}`;
