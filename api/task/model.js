// build your `Task` model here
function getTaskById(task_id) {
  return Promise.resolve(`Great Task ${task_id}`);
}

module.exports = { getTaskById };
