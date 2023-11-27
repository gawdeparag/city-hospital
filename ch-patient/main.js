const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db.config');
const patientRoutes = require('./routes/patient');

var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

db.sequelize.sync();

app.use(patientRoutes);

app.listen(PORT, ()=>{
    console.log(`ch-patient service running on ${PORT}`);
});