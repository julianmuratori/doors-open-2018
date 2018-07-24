const express = require("express");
const mongoose = require('mongoose')
require('dotenv').config({ path: 'variables.env' });
const bodyParser = require('body-parser')

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
const app = express();
const PORT = 8080;
const routes = require('./Routes/router')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});