import * as Knex from 'knex';
const knexConfig = require('../../knexfile');

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
    const instance: Knex = Knex(knexConfig.dbConfig);
    try {
      await instance.raw('select 1');
      console.log('Connected to database - OK`');
    } catch (error) {
      console.log(`Failed to connect to database: ${error}`);
      process.exit(1);
    }
  }
}
