// build your `Project` model here
const db = require("../../data/dbConfig");

async function getAllProjects() {
  const allProjects = await db("projects");
  const result = allProjects.map((row) => {
    return {
      ...row,
      project_completed: row.project_completed ? true : false,
    };
  });

  return result;
}

async function getProjectById(project_id) {
  try {
    const rows = await db("projects as p").where("project_id", project_id);

    return rows;
  } catch (err) {
    return err;
  }
}

async function addProjects(project) {
  const [newID] = await db("projects").insert(project);
  const newPost = await db("projects").where("project_id", newID);
  const result = newPost.map((row) => {
    return {
      ...row,
      project_completed: row.project_completed ? true : false,
    };
  });
  return result[0];
}

module.exports = { getProjectById, getAllProjects, addProjects };
