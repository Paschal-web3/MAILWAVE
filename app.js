const express = require ('express');
const database = require('./src/db/db')
const app = express();
const route = require('./src/routes/userRoutes')
const sendEmail = require('./src/routes/emailRoutes')


// Middleware to parse JSON request bodies
app.use( express.json())

//Routes 
app.use(route)
app.use(sendEmail)

//Database
database()

module.exports = app;