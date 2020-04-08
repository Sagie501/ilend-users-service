import { resolvers as booksResolver } from '../entities/books-example/books.resolvers'
import { resolvers as usersResolver } from '../entities/users-example/users.resolvers'

export const rootResolvers = [booksResolver, usersResolver];
