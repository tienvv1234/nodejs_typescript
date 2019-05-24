require('ts-node/register');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
console.log('process.env', process.env)
module.exports = {
  test: {
    client: process.env.client || 'pg',
    useNullAsDefault: true,
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
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
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
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
    client: process.env.client || 'pg',
    useNullAsDefault: true,
    connection: {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
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
