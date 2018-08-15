const mongoose = require('mongoose')
const User = mongoose.model('User')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const jwt = require('jsonwebtoken')

exports.login = async (req, res, next) => {
    passport.authenticate('local', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('Something went wrong')
                return next(error)
            }
            req.login(user, { session: false}, async (error) => {
                if(error) return next(error)

                // We only store the id and email address on the token
                // Not the user's actual password
                const body = { _id: user._id, email: user.email }

                // sign the jwt and populate it
                const token = jwt.sign({ user: body }, process.env.SECRET)

                // send er on back
                return res.json({ token })
            })
        } catch (error) {
            return next(error)
        }
    })(req, res, next)
} 

// Handles new user registration and passes along info to token auth

exports.register = (req, res, next) => {
    const user = new User({ 
        email: req.body.email, 
        username: req.body.username, 
        password: req.body.password 
    })
    
    // .register is a method provided by passport-local-mongoose
    User.register(user, user.password, function (err, user) {
        if (err) {
            console.log(err.message)
            res.status(400).send(err.message)
        } else {
            next()
        }
    })
}