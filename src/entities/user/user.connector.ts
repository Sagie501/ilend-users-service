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
}
