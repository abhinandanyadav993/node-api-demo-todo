var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const url = 'mongodb://localhost:27017';

mongoose.connect(process.env.MONGODB_URI ||`${url}/todoApp`);

module.exports ={mongoose};