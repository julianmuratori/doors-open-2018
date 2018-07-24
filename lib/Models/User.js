const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
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
    locations: [{
        type: Schema.Types.ObjectId,
        ref: 'Locations'
    }]
})

const User = mongoose.model('User', userSchema)
module.exports = User
