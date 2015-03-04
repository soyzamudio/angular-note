'use strict';

var Note = require('../../models/note');

module.exports = {
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
