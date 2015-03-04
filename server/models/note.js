'use strict';

var mongoose = require('mongoose');

var noteSchema = mongoose.Schema ({
  createdAt: {type: Date, default: Date.now},
  userId:    {type: mongoose.Schema.ObjectId, ref: 'User'},
  title:     {type: String, required: true},
  body:      {type: String, required: true},
  tags:      [{type: String}],
  urls:      [{type: String}]
});

module.exports = mongoose.model('Note', noteSchema);
