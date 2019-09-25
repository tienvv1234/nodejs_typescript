require('ts-node/register');
const path = require('path');
const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});
module.exports = {
  test: {
    debug: true,
    client: process.env.client || 'pg',
    useNullAsDefault: true,
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + '/seeds',
      tableName: 'seeds'
    }
  },
  development: {
    debug: true,
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + '/seeds',
      tableName: 'seeds'
    }
  },
  production: {
    debug: false,
    client: process.env.client || 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + '/seeds',
      tableName: 'seeds'
    }
  }
};
