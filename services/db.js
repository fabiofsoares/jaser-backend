/*
Import
*/
    const mongoose = require('mongoose');
    const MONGO_URL = 'mongodb+srv://fabio:fabio123@jaser-app-ungm7.mongodb.net:27017/jaser-bd'
//

/*
Mongoose config
*/
    const initClient = () => {
        mongoose.connect( MONGO_URL ).then(
            () => console.log('Mongoose is alive'),
            (error) => console.error('Unable to connect to mongoose', error)
        )
    };
//

/*
Export
*/
    module.exports = {
        initClient
    };
//