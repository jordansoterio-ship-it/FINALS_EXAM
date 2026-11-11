//endpoints

const express = require('express');
const router= express.Router();
const userController = require('../controllers/userController');

//endpoint to handle employees data retrieval
router.get('/users', userController.getAllUsers);
router.post('/water-bills',userController.createUser);
router.put('/water-bills',userController.updateUser);

module.exports = router;