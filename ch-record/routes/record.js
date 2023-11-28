const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/records/', recordController.getRecords);

router.post('/record/new', recordController.createRecord);

router.put('/record/update/', recordController.updateRecord);

router.delete('/record/delete/', recordController.deleteRecord);


module.exports = router;