import * as Knex from 'knex';
import { InternalServerError } from '../errors/InternalServerError';
const knexConfig = require('../knexfile');

export class DBConfig {
  static async init(): Promise<void> {
    try {
      const instance: Knex = Knex(knexConfig);
      await instance.raw('select 1');
    } catch (error) {
      throw new InternalServerError(`Failed to connect to database: ${error}`);
    }
  }
}
