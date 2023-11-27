module.exports = (sequelize, Sequelize) => {
    const patients = sequelize.define('patient', {
        patientId: {
            type: Sequelize.STRING,
            primaryKey: true
        }, 
        name: {
            type: Sequelize.STRING
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
        }
    });
    return patients;
}