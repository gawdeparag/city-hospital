module.exports = (sequelize, Sequelize) => {
    const staff = sequelize.define('staff', {
        staffId: {
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
        profession: {
            type: Sequelize.ENUM("Staff", "Admin")
        }, 
        contact: {
            type: Sequelize.STRING
        }
    });
    return staff;
}