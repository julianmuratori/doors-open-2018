const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const locationController = require('../Controllers/locationController')
const userController = require('../Controllers/userController')
const authController = require('../Controllers/authController')

// Call to grab all the DOT locations
router.get('/locations', locationController.getAll)

// New account registration route
// Passes it through the validation controller, then registers, then issues a token and logs the user in
router.post('/register', 
    userController.validateRegistration,
    authController.register,
    authController.login)

router.get('/', (req, res) => {
    res.send('yup')
})

module.exports = router