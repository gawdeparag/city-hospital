module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patient", {
        name: {
            type: Sequelize.TEXT
        }, 
        state: {
            type: Sequelize.TEXT
        },
        address: {
            type: Sequelize.TEXT
        },
        contact: {
            type: Sequelize.TEXT
        },
        bloodGroup: {
            type: Sequelize.TEXT
        },
        insuranceNumber: {
            type: Sequelize.TEXT
        },
        createdAt: {
            type: Sequelize.DATE
        },
        lastUpdatedAt: {
            type: Sequelize.DATE
        },
        records: {
            type: Sequelize.ARRAY
        },
    })

    return Patient
}