const db = require('../config/db.config');
const Staff = db.staff;

const createStaff = async (req, res) => {
    if(!req.body.firstName || !req.body.lastName || !req.body.gender || !req.body.bloodGroup || !req.body.dateOfBirth || !req.body.contact) {
        return res.status(400).send({message: "Bad Data"});
    }
    
    var date = new Date();
    var today = date.getTime();
    const newStaff = {
        staffId: "CHHS" + today.toString(),
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        gender: req.body.gender,
        bloodGroup: req.body.bloodGroup,
        email: req.body.email || null, 
        dateOfBirth: req.body.dateOfBirth, 
        address: req.body.address,
        profession: req.body.profession,
        contact: req.body.contact
    }; 
    
    await Staff.create(newStaff).then((data) => {
        res.status(200).send({message: "Staff Data added successfully", data: data});
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });

}

const getStaffs = (req, res) => {
    Staff.findAll().then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });
}

const updateStaff = (req, res) => {
    let updatedStaff = {};

    if(req.body.firstName) {
        updatedStaff.firstName = req.body.firstName
    }
    if (req.body.lastName) {
        updatedStaff.lastName = req.body.lastName
    } 
    if (req.body.email) {
        updatedStaff.email = req.body.email
    } 
    if (req.body.gender) {
        updatedStaff.gender = req.body.gender
    }
    if (req.body.bloodGroup) {
        updatedStaff.bloodGroup = req.body.bloodGroup
    } 
    if (req.body.dateOfBirth) {
        updatedStaff.dateOfBirth = req.body.dateOfBirth
    } 
    if (req.body.address) {
        updatedStaff.address = req.body.address 
    }
    if (req.body.profession) {
        updatedStaff.profession = req.body.profession;
    }
    if (req.body.contact) {
        updatedStaff.contact = req.body.contact;
    }
    updatedStaff.recordUpdatedAt = new Date().getTime();
    
    Staff.update(updatedStaff, {
        where: {
            staffId: req.query.staffId
        }
    }).then((data) => {
        res.status(200).send({message: "Staff Record updated successfully"});
    }).catch((error) => {
        res.status(500).send({error: error});
    });

}

const deleteStaff = (req, res) => {
    Staff.destroy({
        where: {
            staffId: req.query.staffId
        }
    }).then((data) => {
        res.status(200).send({message: "Staff Record deleted successfully"});
    }).catch((error) => {
        res.status(500).send({error: error});
    });
}

module.exports = {
    createStaff, 
    getStaffs, 
    updateStaff,
    deleteStaff
}