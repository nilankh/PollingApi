//  requireing mongoose
const mongoose = require('mongoose');

// connecting to database mongodb
mongoose.connect('mongodb://localhost/pollingApiDevelopment');

// checking if it is connected to database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to db'));
// finally if connection is successful
db.once('open', function() {
    // we are connected !
    console.log('Successfuuly connected to database');
});

// Export the db
module.exports = db;