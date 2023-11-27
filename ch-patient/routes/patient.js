const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/patients/', patientController.getPatients);
router.get('/patient/', patientController.getPatientByFirstName);
router.get('/patient/:lastName', patientController.getPatientByLastName);

router.post('/patient/new', patientController.createPatient);



module.exports = router;