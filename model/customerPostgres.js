const db = require('../Databases/postgredb') ;
const Sequelize = require('sequelize') ;

const Customer = db.define('customers', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  postalcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
});


db.sync()
  .then(() => console.log('Customer table synced'))
  .catch(err => console.error('Error creating Customer table', err.stack));

module.exports = Customer;
