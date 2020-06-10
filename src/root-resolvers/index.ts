import { resolvers as usersResolver } from '../entities/user/user.resolvers'
import { mergeResolvers } from '@graphql-tools/merge';

export const rootResolvers = mergeResolvers([usersResolver]);
