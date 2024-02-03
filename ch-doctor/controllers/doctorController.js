const db = require('../config/db.config');
const Doctor = db.doctor;

const createDoctor = async (req, res) => {
    if(!req.body.firstName || !req.body.lastName || !req.body.gender || !req.body.bloodGroup || !req.body.dateOfBirth || !req.body.contact) {
        return res.status(400).send({message: "Bad Data"});
    }
    
    var date = new Date();
    var today = date.getTime();
    const newDoctor = {
        doctorId: "CHDR" + today.toString(),
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        email: req.body.email || null, 
        dateOfBirth: req.body.dateOfBirth, 
        address: req.body.address,
        speciality: req.body.speciality,
        contact: req.body.contact
    }; 
    
    await Doctor.create(newDoctor).then((data) => {
        res.status(200).send({message: "New Doctor Data added successfully", data: data});
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });

}

const getDoctors = (req, res) => {
    Doctor.findAll().then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });
}

const updateDoctor = (req, res) => {
    let updatedDoctor = {};

    if(req.body.firstName) {
        updatedDoctor.firstName = req.body.firstName
    }
    if (req.body.lastName) {
        updatedDoctor.lastName = req.body.lastName
    } 
    if (req.body.email) {
        updatedDoctor.email = req.body.email
    } 
    if (req.body.gender) {
        updatedDoctor.gender = req.body.gender
    }
    if (req.body.bloodGroup) {
        updatedDoctor.bloodGroup = req.body.bloodGroup
    } 
    if (req.body.dateOfBirth) {
        updatedDoctor.dateOfBirth = req.body.dateOfBirth
    } 
    if (req.body.address) {
        updatedDoctor.address = req.body.address 
    }
    if (req.body.speciality) {
        updatedDoctor.speciality = req.body.speciality;
    }
    if (req.body.contact) {
        updatedDoctor.contact = req.body.contact;
    }
    updatedDoctor.recordUpdatedAt = new Date().getTime();
    
    Doctor.update(updatedDoctor, {
        where: {
            doctorId: req.query.doctorId
        }
    }).then((data) => {
        res.status(200).send({message: "Doctor Record updated successfully"});
    }).catch((error) => {
        res.status(500).send({error: error});
    });

}

const deleteDoctor = (req, res) => {
    Doctor.destroy({
        where: {
            doctorId: req.query.doctorId
        }
    }).then((data) => {
        res.status(200).send({message: "Doctor Record deleted successfully"});
    }).catch((error) => {
        res.status(500).send({error: error});
    });
}

module.exports = {
    createDoctor, 
    getDoctors, 
    updateDoctor,
    deleteDoctor
}