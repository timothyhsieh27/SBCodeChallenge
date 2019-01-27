'use strict';

var mongoose = require('mongoose'),
Task = mongoose.model('Tasks');

exports.create_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_tasks = function(req, res) {
    Task.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
};