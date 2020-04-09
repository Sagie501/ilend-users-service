import { typeDefs as usersTypeDefs } from '../entities/user/user.schema'
import * as _ from 'lodash';

export const rootTypeDefs = _.merge(usersTypeDefs);
