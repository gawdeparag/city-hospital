const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db.config');
const staffRoutes = require('./routes/staff');
const dotenv = require('dotenv');
dotenv.config();

var PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

db.sequelize.sync();

app.use(staffRoutes);

app.listen(PORT, ()=>{
    console.log(`ch-staff service running on ${PORT}`);
});