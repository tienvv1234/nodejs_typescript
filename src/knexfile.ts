const dotenv = require('dotenv').config();

module.exports = {
  dbConfig: {
    client: process.env.client,
    useNullAsDefault: true,
    connection: {
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.database
    }
  }
};
