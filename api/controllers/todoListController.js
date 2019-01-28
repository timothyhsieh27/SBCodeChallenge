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

exports.read_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
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

exports.delete_task = function(req, res) {
    Task.remove({
      _id: req.params.taskId
    }, function(err, task) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
};

exports.update_task = function(req, res) {
    Task.findOne({_id: req.params.taskId}, function (err, task) {
        (task.status == "pending" ? task.status = "complete" : task.status = "pending");
        (task.status == "complete" ? task.completed_at = Date.now() : task.completed_at = task.completed_at);
        task.save(function (err, task) {
            if(err) {
                console.log(err);
            }
            res.json(task);
        });
    });
};