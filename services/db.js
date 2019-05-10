/*
Import
*/
    const mongoose = require('mongoose');
    //const url = 'mongodb+srv://fabio:fabio123@jaser-app-ungm7.mongodb.net/jaser-bd'
//

/*
Mongoose config
*/
    const initClient = () => {
        mongoose.connect( 'mongodb+srv://fabio:fabio123@jaser-app-ungm7.mongodb.net/jaser-app/jaser-bd' ).then(
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