const Sequelize = require('sequelize');
const dbName = 'city-hospital';
const dbUser = 'root';
const dbPassword = 'pagawde';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.patients = require('../models/Patient')(sequelize, Sequelize);

module.exports = db;