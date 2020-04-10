import { User } from './user.model';
import Knex from 'knex';

export class UserConnector {
  private knex: Knex<User>;

  constructor(knex: Knex<User>) {
    this.knex = knex;
  }

  async getUserById(id: number): Promise<User> {
    return this.knex.select('*').from('user').where({ id }).first();
  }

  async addUser(user: User) {
    return this.knex.insert(user).into('user').then(([id]) => {
      return this.getUserById(id);
    }, (err) => {
      throw new Error(err.sqlMessage);
    });
  }

  async removeUser(userId: number) {
    return this.knex('user').where('id', userId).del().then((res) => {
      if (res === 0) {
        throw new Error(`The user with id: ${userId} not found`);
      } else {
        return true;
      }
    }, (err) => {
      throw new Error(err.sqlMessage);
    })
  }
}
