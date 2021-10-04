const path = require('path');
require('dotenv').config();
const { DB_URL } = process.env;

module.exports = {

  development: {
    client: 'postgresql',
    connection: DB_URL,
    migrations: {
      directory: path.join(__dirname, 'data', 'migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'data', 'seeds'),
    },
  },

};
