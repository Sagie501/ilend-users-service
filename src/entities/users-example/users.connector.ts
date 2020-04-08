export class UsersConnector {
  users = [
    {
      name: 'Niv',
      age: 23
    },
    {
      name: 'Tom',
      age: 24
    }
  ];

  async getAllUsers() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users);
      }, 500);
    });
  }
}
