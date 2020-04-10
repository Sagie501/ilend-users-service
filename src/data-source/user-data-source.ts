import { SQLDataSource } from './sql-data-source';
import Knex from 'knex';
import { UserConnector } from '../entities/user/user.connector';

export class UserDataSource extends SQLDataSource {
  public usersConnector: UserConnector;

  constructor(knexConfig: Knex.Config) {
    super(knexConfig);

    this.usersConnector = new UserConnector(this.knex);
  }
}
