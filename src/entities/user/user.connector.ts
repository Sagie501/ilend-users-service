import { User } from './user.model';

export class UserConnector {
  users: User = [
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
