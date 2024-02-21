const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL)

const db = mongoose.connection;

db.on('connected', () => console.log('Mongo DB Connection Established'));

db.on('error', (err) => console.error.bind(console, 'MongoDB connection error: ', err));

module.exports = mongoose;