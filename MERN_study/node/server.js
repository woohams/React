const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connect to mongod server !!!")
});

mongoose.connect("mongodb://localhost/mongodb_tutorial");

const customer = require('./models/customer');

app.get('/customer', function(request, response){
    customer.find(function(err, customer){
        if(err) return response.status(500).send({error : 'database error'});
        response.json(customer);
    })
});

app.post('/customer', function(request, response){
    let customer0 = new customer();
    customer0.id = request.body.id;
    customer0.name = request.body.name;

    customer0.save(function(err){
        if(err){
        console.error(err);
        return;
        }
        response.json({message : "success"})
        //response.redirect("http://localhost:3000/")
    })
});

app.listen(port, () => console.log(`Listening server!!! port number : ${port}`));
// 터미널에 node server.js