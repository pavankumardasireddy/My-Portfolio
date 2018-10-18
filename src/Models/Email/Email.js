var mongoose = require('mongoose');  
var EmailSchema = new mongoose.Schema({
  name: { type: String },
  subject: { type: String },
  from: { type: String },
  message: { type: String }
});
EmailSchema.set('toJSON', { getters: true });

let Email = mongoose.model('Email', EmailSchema);

module.exports = Email;