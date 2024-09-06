const express = require ('express');
const connectDb = require ('./src/db/db')
const app = express();


// Middleware to parse JSON request bodies
app.use( express.json())

//Routes 


//Database
connectDb()

module.exports = app;