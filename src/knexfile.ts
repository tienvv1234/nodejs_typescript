require('ts-node/register');
const dotenv = require('dotenv').config();

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
