const db = require('../config/db.config');
const Record = db.records;

const createRecord = (req, res) => {
    if(!req.body.title || !req.body.description || !req.body.attendingDoctor || !req.body.patientId) {
        return res.status(400).send({message: "Bad Data"});
    }
    var date = new Date();
    var today = date.getTime();
    const newRecord = {
        recordId: "CHPMR" + today.toString(),
        title: req.body.title,
        description: req.body.description,
        dateOfRecord: today, 
        attendingDoctor: req.body.attendingDoctor,
        patientId: req.body.patientId,
        costOfTreatment: req.body.costOfTreatment,
        insuranceUsed: req.body.insuranceUsed,
        prescription: req.body.prescription
    }; 

    Record.create(newRecord).then((data) => {
        res.status(200).send({message: "Record Data added successfully", data: data});
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });

}

const getRecords = (req, res) => {
    Record.findAll().then((data) => {
        res.status(200).send(data);
    }).catch((error) => {
        res.status(500).send({message: "Error occured", error: error});
    });
}

const updateRecord = (req, res) => {
    let updatedRecord = {};

    if(req.body.title) {
        updatedRecord.title = req.body.title
    }
    if (req.body.description) {
        updatedRecord.description = req.body.description
    } 
    if (req.body.dateOfRecord) {
        updatedRecord.dateOfRecord = req.body.dateOfRecord
    } 
    if (req.body.attendingDoctor) {
        updatedRecord.attendingDoctor = req.body.attendingDoctor
    } 
    if (req.body.patientId) {
        updatedRecord.patientId = req.body.patientId
    } 
    if (req.body.costOfTreatment) {
        updatedRecord.costOfTreatment = req.body.costOfTreatment 
    }
    if (req.body.insuranceUsed) {
        updatedRecord.insuranceUsed = req.body.insuranceUsed;
    }
    if (req.body.prescription) {
        updatedRecord.prescription = req.body.prescription;
    }
    
    Record.update(updatedRecord, {
        where: {
            recordId: req.query.recordId
        }
    }).then((data) => {
        res.status(200).send({message: "Medical Record updated successfully"});
    }).catch((error) => {
        res.status(500).send({error: error});
    });

}

const deleteRecord = (req, res) => {
    Record.destroy({
        where: {
            recordId: req.query.recordId
        }
    }).then((data) => {
        res.status(200).send({message: "Record Data deleted successfully"});
    }).catch((error) => {
        res.status(500).send({error: error});
    });
}

module.exports = {
    createRecord, 
    getRecords,
    updateRecord,
    deleteRecord
}