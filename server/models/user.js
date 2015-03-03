'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User;

var userSchema = mongoose.Schema ({
  email:     {type: String, required: true},
  password:  {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

userSchema.methods.register = function(callback) {
  var self = this;
  User.findOne({email: self.email}, function(err, user) {
    if (user) { return callback(true); }
    self.password = bcrypt.hashSync(self.password, 8);
    console.log('Self:', self);
    self.save(callback);
  });
};

User = mongoose.model('User', userSchema);

module.exports = User;
