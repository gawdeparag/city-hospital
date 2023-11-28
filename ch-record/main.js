const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db.config');
const recordRoutes = require('./routes/record');
const dotenv = require('dotenv');
dotenv.config();

var PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

db.sequelize.sync();

app.use(recordRoutes);

app.listen(PORT, ()=>{
    console.log(`ch-record service running on ${PORT}`);
});