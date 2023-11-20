module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("Patient", {
        id: {
            type: Sequelize.TEXT,
            primaryKey: true, 
            allowNull: false
        },
        name: Sequelize.TEXT, 
        state: Sequelize.TEXT,
        address: Sequelize.TEXT,
        contact: {
            type: Sequelize.NUMBER
        },
        bloodGroup: Sequelize.TEXT,
        insuranceNumber: Sequelize.TEXT,
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        lastUpdatedAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        records: []
    })

    return Patient
}