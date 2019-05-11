/*
    Imports
*/
                          require('dotenv').config();
const express           = require('express');
const bodyParser        = require('body-parser');

const { mainRouter }    = require('./routes/main.router');

/*
    Variables
*/
const port = 8080;
const host = 'https://jaser-app.herokuapp.com/';
const server = express();
const db = require('./services/db');

/*
    Server 
*/
const init = () => {

    // MongoDB
    db.initClient()
    
    //Body-parser
    server.use(bodyParser.json({limit: '10mb'}));
    server.use(bodyParser.urlencoded({ extended: true }));

    // Router
    server.use('/', mainRouter);

    //Lunch
    server.listen( host, () => {
        console.log(`Server is running on ${host}`)
    });
};

init();
