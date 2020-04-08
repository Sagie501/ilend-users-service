import { BooksConnector } from './books.connector';

export const resolvers = {
  Query: {
    books: async () => {
      return await (new BooksConnector().getAllBooks())
    },
  },
};
