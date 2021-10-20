const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

//Components import
const connection = require('./db/connection.js');
const DefaultData = require('./default.js');
const route = require('./routes/route.js');

//dotenv config
dotenv.config({ path: './config.env' });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use('/',route);

//database connection
connection();

DefaultData();

const port = 5000;
app.listen(port,(err) => {
    if(err) {
        console.log(`error in connecting to port ${port}`);
    }
    console.log(`connected to ${port}`);
});