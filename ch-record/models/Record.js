module.exports = (sequelize, Sequelize) => {
    const records = sequelize.define('record', {
        recordId: {
            type: Sequelize.STRING,
            primaryKey: true
        }, 
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        dateOfRecord: {
            type: Sequelize.DATE
        }, 
        attendingDoctor: {
            type: Sequelize.STRING
        },
        patientId: {
            type: Sequelize.STRING
        }, 
        costOfTreatment: {
            type: Sequelize.INTEGER
        }, 
        insuranceUsed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }, 
        prescription: {
            type: Sequelize.JSON
        }
        
    });
    return records;
}