

require('dotenv').config()

const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose')
const express = require('express')
const bodyParser = require('body-parser');
const student = require('./routes/students')

const app = express()
app.use(bodyParser.json());



mongoose.connect(process.env.MONGO_DB_URI)
    .then(()=>{
        
        app.listen(4000,()=>{
            console.log('Connected to the database. Listening on port', process.env.PORT)
            });
    })
    .catch(err =>{
        console.log(err)
    })


app.use("/student", student)



