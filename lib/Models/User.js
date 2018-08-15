const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: 'Please enter a username!'
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: 'Please enter an email address!'
    },
    password: {
        type: String,
        trim: true,
        required: 'Please enter a password!'
    },
    locations: [{
        type: Schema.Types.ObjectId,
        ref: 'Locations'
    }]
})

// Checks that the user's login info has the right credentials
userSchema.methods.isValidPassword = async (password) => {
    const user = this

    // hashes the password sent by the user and checks if the hashed password stored matches the one sent
    // returns true or false
    const compare = await bcrypt.compare(password, user.password)
    return compare
}

// Gives us access to passport local mongoose methods and automatically adds username, hash, and salt field
userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema)
module.exports = User
