var mongoose = require('mongoose');

var userSchema = mongoose.Schema ({
  firstname: String,
  lastname: String,
  email: String,
  password: Password
});

module.exports = mongoose.model('User', userSchema )