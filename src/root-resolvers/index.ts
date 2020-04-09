import { resolvers as usersResolver } from '../entities/user/user.resolvers'
import * as _ from 'lodash';

export const rootResolvers = _.merge(usersResolver);
