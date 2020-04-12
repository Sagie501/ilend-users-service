import { User } from './user.model';
import Knex from 'knex';

export class UserConnector {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  async login(email: string, password: string) {
    email = email.toLowerCase();
    return this.knex.select('*').from('user').where({ email, password }).first();
  }

  async getUserById(id: number) {
    return this.knex.select('*').from('user').where({ id }).first();
  }

  async addUser(user: User) {
    user.email = user.email.toLowerCase();
    return this.knex.insert(user).into('user').then(([id]) => {
      return this.getUserById(id);
    }, (err) => {
      throw new Error(err.sqlMessage);
    });
  }

  async updateUser(userId: number, user: User) {
    return this.knex('user').where({ id: userId }).update(user).then((id) => {
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
