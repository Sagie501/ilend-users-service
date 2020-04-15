import { typeDefs as usersTypeDefs } from '../entities/user/user.schema'
import { mergeTypes } from 'merge-graphql-schemas';
import { gql } from 'apollo-server-express';
import { genderTypeDefs } from '../enums/gender/gender-enum.schema';
import { typeDefs as scalarsTypeDefs } from 'graphql-scalars';

export const rootTypeDefs = gql`${mergeTypes([gql`${scalarsTypeDefs}`, genderTypeDefs, usersTypeDefs])}`;
