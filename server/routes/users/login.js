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
    User.authenticate(request.payload, function(err, user) {
      if (err) {
        reply().code(400);
      } else {
        
        request.auth.session.set(user);
        reply({email: user.email}).code(200);
      }
    });
  }
};
