var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const url = 'mongodb://localhost:27017';

mongoose.connect(`${url}/todoApp`);

module.exports ={mongoose};