const mongoose = require('mongoose')
const Place = require('../Models/Place')

exports.getAll = (req, res) => {
    Place.find({ })
    .then(docs => {
        res.status(200).json({
            message: 'hi',
            payload: docs
        })
    }).catch(err => {
        res.status(500).send({ message: err.message})
    })
}