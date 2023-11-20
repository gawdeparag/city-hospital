const mysql = require('mysql');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize();

const Record = sequelize.define("ch-record", {
    id: DataTypes.TEXT,
    patientId: DataTypes.TEXT, 
    doctorId: DataTypes.TEXT,
    diagnosisTitle: DataTypes.TEXT,
    diagnosisDescription: DataTypes.TEXT,
    costOfTreatment: DataTypes.DOUBLE,
    coveredWithInsurance: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE
});