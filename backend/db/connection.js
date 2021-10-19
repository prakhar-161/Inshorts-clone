const mongoose = require('mongoose');

const connection = async () => {
    try{
        await mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useunifiedTopology: true });

        console.log('connected to mongoDB successfully');
    } catch (error) {
        console.log('error in connecting to mongodb',error);
    }
};

module.exports = connection;