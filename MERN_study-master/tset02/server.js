const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
    console.log("Connected to mongod server")
});

mongoose.connect('mongodb://localhost/mongodb_tutorial');

const Customer = require('./models/customer');

const router = require('./routes')(app, Customer);

app.listen(port, () => console.log(`Listening on port ${port}`));