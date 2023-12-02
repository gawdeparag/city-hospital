const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/staff/all', staffController.getStaffs);

router.post('/staff/new', staffController.createStaff);

router.put('/staff/update/', staffController.updateStaff);

router.delete('/staff/delete/', staffController.deleteStaff);


module.exports = router;