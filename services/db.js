/*
Import
*/
    const mongoose = require('mongoose');
    const MONGO_URL = 'mongodb+srv://admin:admin@cluster0-npcjl.mongodb.net/jaser?retryWrites=true'
//

/*
Mongoose config
*/
    const initClient = () => {
        mongoose.connect( MONGO_URL, { useNewUrlParser: true } ).then(
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