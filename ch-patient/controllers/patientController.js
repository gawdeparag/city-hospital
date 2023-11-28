const db = require('../config/db.config');
const Patient = db.patients;

const createPatient = (req, res) => {
    if(!req.body.firstName || !req.body.lastName || !req.body.gender || !req.body.bloodGroup || !req.body.dateOfBirth || !req.body.address) {
        return res.status(400).send({message: "Bad Data"});
    }
    
    var date = new Date();
    var today = date.getTime();
    const newPatient = {
        patientId: "USAMR" + today.toString(),
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
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
    let updatedPatient = {};

    if(req.body.firstName) {
        updatedPatient.firstName = req.body.firstName
    }
    if (req.body.lastName) {
        updatedPatient.lastName = req.body.lastName
    } 
    if (req.body.email) {
        updatedPatient.email = req.body.email
    } 
    if (req.body.bloodGroup) {
        updatedPatient.bloodGroup = req.body.bloodGroup
    } 
    if (req.body.dateOfBirth) {
        updatedPatient.dateOfBirth = req.body.dateOfBirth
    } 
    if (req.body.address) {
        updatedPatient.address = req.body.address 
    }
    if (req.body.patientStatus) {
        updatedPatient.patientStatus = req.body.patientStatus;
    }
    if (req.body.dateOfPassing) {
        updatedPatient.dateOfPassing = req.body.dateOfPassing;
    }
    updatedPatient.recordUpdatedAt = new Date().getTime();
    
    Patient.update(updatedPatient, {
        where: {
            patientId: req.query.patientId
        }
    }).then((data) => {
        res.status(200).send({message: "Patient Record updated successfully"});
    }).catch((error) => {
        res.status(500).send({error: error});
    });

}

module.exports = {
    createPatient, 
    getPatients, 
    getPatientByFirstName, 
    getPatientByLastName,
    updatePatient
}