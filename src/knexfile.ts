require('ts-node/register');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

module.exports = {
  test: {
    client: process.env.client || 'pg',
    useNullAsDefault: true,
    connection: {
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database
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
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database
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
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database
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
