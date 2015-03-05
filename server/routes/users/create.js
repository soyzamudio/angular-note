'use strict';

var User = require('../../models/user');
var Joi = require('joi');

module.exports = {
  auth: false,
  validate: {
    payload: {
      email:    Joi.string().email(),
      password: Joi.string().min(3)
    }
  },
  handler: function(request, reply) {
    var newUser = new User(request.payload);
    newUser.register(function(err) {
      if (err) { reply().code(400); }
      else { reply().code(200); }
    });
  }
};
