const dotenv = require('dotenv').config();

module.exports = {
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
    tableName: 'migrations',
    extensions: ['js', 'ts'] // both should be set by default
  },
  seeds: {
    directory: __dirname + '/seeds',
    tableName: 'seeds',
    extensions: ['js', 'ts'] // both should be set by default
  }
};
