import * as Knex from 'knex';
import { InternalServerError } from '../errors/InternalServerError';
import { logger } from '../service/logger';
const knexConfig = require('../knexfile');

// export const config = {
//     client: 'pg',
//     connection: {
//         host: process.env.POSTGRES_HOST,
//         user: process.env.POSTGRES_USER,
//         password: process.env.POSTGRES_PASSWORD,
//         database: process.env.POSTGRES_DB
//     },
//     migrations: {
//         // This is missing from the TypeScript types currently.
//         stub: 'migration.stub'
//     }
// }

export class DBConfig {
  static async init(): Promise<void> {
    try {
      const instance: Knex = Knex(knexConfig.dbConfig);
      await instance.raw('select 1');
    } catch (error) {
      logger.error(error);
      throw new InternalServerError(`Failed to connect to database: ${error}`);
    }
  }
}
