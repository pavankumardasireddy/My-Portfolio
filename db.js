var mongoose = require('mongoose');
const dbName = 'portfolio';
const dbUser = 'pavankd';
const dbPassword = 'mLabPwd6';
const MONGODB_URI = `mongodb://${dbUser}:${dbPassword}@ds135433.mlab.com:35433/${dbName}?replicaSet=rs-ds135433`;

mongoose.Promise = global.Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
 //mongoose.connect('mongodb://localhost:27017/Portfolio');