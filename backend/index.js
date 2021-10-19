const express = require('express');
const dotenv = require('dotenv');
const app = express();

//Components import
const connection = require('./db/connection.js');

//dotenv config
dotenv.config({ path: './config.env' });

//database connection
connection();

const port = process.env.PORT;
app.listen(port,(err) => {
    if(err) {
        console.log(`error in connecting to port ${port}`);
    }
    console.log(`connected to ${port}`);
});