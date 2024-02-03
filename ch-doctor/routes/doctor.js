const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/doctor/all', doctorController.getDoctors);

router.post('/doctor/new', doctorController.createDoctor);

router.put('/doctor/update/', doctorController.updateDoctor);

router.delete('/doctor/delete/', doctorController.deleteDoctor);


module.exports = router;