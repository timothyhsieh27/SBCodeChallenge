'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

    app.route('/tasks')
        .post(todoList.create_task)
        .get(todoList.list_tasks);

    app.route('/tasks/:taskId')
        .get(todoList.read_task)
        .delete(todoList.delete_task);
};