'use strict';

var Note = require('../../models/note');
var Joi = require('joi');

module.exports = {
  validate: {
    payload: {
      title: Joi.string().required(),
      body: Joi.string().required(),
      tags: Joi.string().optional(),
      urls: Joi.array().optional()
    }
  },
  handler: function(request, reply) {
    request.payload.userId = request.auth.credentials._id;
    request.payload.tags = request.payload.tags.split(',');
    var note = new Note(request.payload);
    note.save(function(err) {
      if (err) { reply().code(400); }
      else { reply(note).code(200); }
    });
  }
};
