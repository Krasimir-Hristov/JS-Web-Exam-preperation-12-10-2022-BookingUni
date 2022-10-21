const mongoose = require('mongoose');

//TODO change database name
const dbnName = 'BookingUni';

const CONNECTION_STRING = `mongodb://localhost:27017/${dbnName}`;

module.exports = async (app) => {
   try{  
    await mongoose.connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Database connected');

    // mongoose.connection.on('error', (err) => {
    //     console.log('Database error');
    //     console.log(err);
    // })
}catch (err) {
    console.error('Error connecting to database');
    process.exit(1);
}
};