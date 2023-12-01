const db = require('../config/db.config');
const User = db.users;

const createUser = async (req, res) => {
    if(!req.body.firstName || !req.body.lastName || !req.body.gender || !req.body.bloodGroup || !req.body.dateOfBirth || !req.body.contact) {
        return res.status(400).send({message: "Bad Data"});
    }
    
    var date = new Date();
    var today = date.getTime();
    const newUser = {
        userId: "CHHS" + today.toString(),
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
    
    await User.create(newUser).then((data) => {
        res.status(200).send({message: "User Data added successfully", data: data});
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });

}

const getUsers = (req, res) => {
    User.findAll().then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });
}

const updateUser = (req, res) => {
    let updatedUser = {};

    if(req.body.firstName) {
        updatedUser.firstName = req.body.firstName
    }
    if (req.body.lastName) {
        updatedUser.lastName = req.body.lastName
    } 
    if (req.body.email) {
        updatedUser.email = req.body.email
    } 
    if (req.body.gender) {
        updatedUser.gender = req.body.gender
    }
    if (req.body.bloodGroup) {
        updatedUser.bloodGroup = req.body.bloodGroup
    } 
    if (req.body.dateOfBirth) {
        updatedUser.dateOfBirth = req.body.dateOfBirth
    } 
    if (req.body.address) {
        updatedUser.address = req.body.address 
    }
    if (req.body.profession) {
        updatedUser.profession = req.body.profession;
    }
    if (req.body.contact) {
        updatedUser.contact = req.body.contact;
    }
    updatedUser.recordUpdatedAt = new Date().getTime();
    
    User.update(updatedUser, {
        where: {
            userId: req.query.userId
        }
    }).then((data) => {
        res.status(200).send({message: "User Record updated successfully"});
    }).catch((error) => {
        res.status(500).send({error: error});
    });

}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            userId: req.query.userId
        }
    }).then((data) => {
        res.status(200).send({message: "User Record deleted successfully"});
    }).catch((error) => {
        res.status(500).send({error: error});
    });
}

module.exports = {
    createUser, 
    getUsers, 
    updateUser,
    deleteUser
}