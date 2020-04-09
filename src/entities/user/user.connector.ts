import { User } from './user.model';

export class UserConnector {
  users: Array<User> = [
    {
      id: '1',
      firstName: 'Sagie',
      lastName: 'Ivan',
      isAdmin: true,
      email: "bla1@gmail.com",
      zipCode: 12345,
      phoneNumber: "050-1234567"
    },
    {
      id: '2',
      firstName: 'Niv',
      lastName: 'Hindi',
      isAdmin: true,
      email: "bla2@gmail.com",
      zipCode: 12346,
      phoneNumber: "050-1234568"
    },
    {
      id: '3',
      firstName: 'Tom',
      lastName: 'Shushan',
      isAdmin: true,
      email: "bla3@gmail.com",
      zipCode: 12347,
      phoneNumber: "050-1234569"
    }
  ];

  async getUserById(id: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.users.find((user) => user.id === id));
      }, 500);
    });
  }
}
