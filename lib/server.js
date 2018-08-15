const express = require("express");
const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' });
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const passport = require('passport')

require('./Middleware/passport')


mongoose.connect('mongodb://localhost:27017/dot-2018', { useNewUrlParser: true })
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});


const app = express();
const PORT = 8080;
const routes = require('./Routes/router')

app.use(expressValidator());

app.use(passport.initialize())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});