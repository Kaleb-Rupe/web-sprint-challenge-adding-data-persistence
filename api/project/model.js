// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAllProjects() {
  const allProjects = await db("projects");

  return allProjects;
}

async function getProjectById(project_id) {
  const projectRows = await db("projects as p")
    .select(
      "p.project_id",
      "p.project_name",
      "p.project_description",
      "p.project_completed"
    )
    .where("p.project_id", project_id);

  const project = {
    project_id: projectRows[0].project_id,
    project_name: projectRows[0].project_name,
    project_description: projectRows[0].project_description,
    project_completed: projectRows[0].project_completed == 1 ? true : false,
  };

  return project;
}

module.exports = { getProjectById, getAllProjects };
