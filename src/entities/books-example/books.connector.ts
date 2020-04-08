export class BooksConnector {

  books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
  ];

  async getAllBooks() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.books);
      }, 500);
    });
  }
}
