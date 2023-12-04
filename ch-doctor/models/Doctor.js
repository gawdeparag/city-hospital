module.exports = (sequelize, Sequelize) => {
    const doctor = sequelize.define('doctor', {
        doctorId: {
            type: Sequelize.STRING,
            primaryKey: true
        }, 
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.ENUM("Male", "Female", "Other")
        },
        bloodGroup: {
            type: Sequelize.ENUM("O+ve", "O-ve", "A+ve", "A-ve", "B+ve", "B-ve", "AB+ve", "AB-ve")
        },
        email: {
            type: Sequelize.STRING
        }, 
        dateOfBirth: {
            type: Sequelize.DATE
        }, 
        address: {
            type: Sequelize.STRING
        },
        speciality: {
            type: Sequelize.STRING
        }, 
        contact: {
            type: Sequelize.STRING
        }
    });
    return doctor;
}