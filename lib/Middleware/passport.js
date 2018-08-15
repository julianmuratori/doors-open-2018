const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../Models/User')

// this is a helper method added by passport-local-mongoose that lets you set localStrategy
passport.use(User.createStrategy())

// i still don't really know what these do, but they're needed for plm to work properly :D
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())