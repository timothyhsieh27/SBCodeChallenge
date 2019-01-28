'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  title: {
    type: String,
    required: 'Please enter a title for the task'
  },
  description: {
    type: String,
    required: 'Please enter a description of the task'
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'complete']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);