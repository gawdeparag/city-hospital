const Sequelize = require('sequelize');

const dotenv = require('dotenv');
dotenv.config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/User')(sequelize, Sequelize);

module.exports = db;