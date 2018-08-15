const mongoose = require('mongoose')
const User = require('../Models/User')


exports.validateRegistration = (req, res, next) => {
    req.sanitizeBody('username')
    req.checkBody('username', 'Please supply a name!').notEmpty()

    req.checkBody('email', 'That email is not valid').isEmail()
    req.sanitizeBody('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    })

    req.checkBody('password', "password cannot be blank").notEmpty()

    const errors = req.validationErrors()

    if (errors) {
        res.json({ errors })
        return  // stops the function from running
    }
    next() //passes info along to next function
}




