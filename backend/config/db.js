const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('appointment_db', 'postgres', 'irad123456789', {
    host: 'localhost',
    dialect: 'postgres'
});
sequelize.authenticate()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Unable to connect to the database:', err));
module.exports = sequelize;