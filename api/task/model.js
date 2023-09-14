// build your `Task` model here

const db = require("../../data/dbConfig");

async function getAllTasks() {
  const allTasks = await db("tasks");

  return allTasks;
}

async function getTaskById(task_id) {
  const taskRows = await db("tasks as t")
    .leftJoin("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    )
    .where("t.task_id", task_id);

  const task = {
    task_id: taskRows[0].task_id,
    task_notes: taskRows[0].task_notes,
    task_description: taskRows[0].task_description,
    task_completed: taskRows[0].task_completed == 1 ? true : false,
    project_name: taskRows[0].project_name,
    project_description: taskRows[0].project_description,
  };

  return task;
}

module.exports = { getTaskById, getAllTasks };
