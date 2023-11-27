const db = require('../config/db.config');
const Patient = db.patients;

const createPatient = (req, res) => {
    if(!req.body.firstName || !req.body.lastName || !req.body.gender || !req.body.dateOfBirth || !req.body.address) {
        return res.status(400).send({message: "Bad Data"});
    }
    
    var date = new Date();
    var today = date.getTime();
    const newPatient = {
        patientId: "HRP" + today.toString(),
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        gender: req.body.gender,
        email: req.body.email || null, 
        dateOfBirth: req.body.dateOfBirth, 
        address: req.body.address
    }; 

    Patient.create(newPatient).then((data) => {
        res.status(200).send({message: "Patient Data added successfully", data: data});
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });

}

const getPatients = (req, res) => {
    Patient.findAll().then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });
}

const getPatientByFirstName = (req, res) => {
    let firstName = req.query.firstName;
    Patient.findAll({
        where: {
            firstName: firstName
        }
    }).then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });

}

const getPatientByLastName = async (req, res) => {
    await Patient.findAll({
        where: {
            lastName: req.params.lastName
        }
    }).then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });
}

const updatePatient = (req, res) => {

}

const deletePatient = (req, res) => {

}

module.exports = {
    createPatient, 
    getPatients, 
    getPatientByFirstName, 
    getPatientByLastName,
    updatePatient, 
    deletePatient
}