const {Sequelize} = require('sequelize');

// creating a new instance of Sequelize and connectng to the database
const db = new Sequelize('customers', 'postgres', 'password', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

/*


,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

*/

// testing the connection
db.authenticate()
  .then(() => console.log('Connected to the PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = db;