const Sequelize = require('sequelize');

const db = new Sequelize('sucursales', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = {
    db
};