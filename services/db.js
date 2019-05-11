/*
Import
*/
    const mongoose = require('mongoose');
    const MONGO_URL = 'mongodb://admin:admin@cluster0-npcjl.mongodb.net/jaser'
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