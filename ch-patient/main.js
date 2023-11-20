const express = require('express');
const app = express();
const mysql = require('mysql');
const db = require('./models');

var PORT = process.env.PORT || 8080;

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`ch-patient service started at ${PORT}`);
    });
}).catch((error) => {
    console.error(error);
});