var mongoose = require('mongoose');  
var EmailSchema = new mongoose.Schema({
  name: String,
  subject: String,
  from: String,
  message: String
});
mongoose.model('Email', EmailSchema);

module.exports = mongoose.model('Email');