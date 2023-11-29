const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/users/', userController.getUsers);

router.post('/user/new', userController.createUser);

router.put('/user/update/', userController.updateUser);

router.delete('/user/delete/', userController.deleteUser);


module.exports = router;