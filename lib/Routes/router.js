const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
require('../models/User')
const Place = require('../Models/Place')

router.get('/locations', async (req, res) => {
    await Place.find({})
    .then(docs => {
        res.status(200).json({
            message: 'hi',
            payload: docs
        })
    })
    .catch(err => {
        res.status(500).send({ message: err.message})
    })
})

module.exports = router