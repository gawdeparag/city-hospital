module.exports = (sequelize, Sequelize) => {
    const patients = sequelize.define('patient', {
        patientId: {
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
        email: {
            type: Sequelize.STRING
        }, 
        dateOfBirth: {
            type: Sequelize.DATE
        }, 
        address: {
            type: Sequelize.STRING
        },
        recordCreatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        recordUpdatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }, 
        patientStatus: {
            type: Sequelize.ENUM("alive", "dead"),
            defaultValue: "alive" 
        }, 
        dateOfPassing: {
            type: Sequelize.DATE
        }
    });
    return patients;
}