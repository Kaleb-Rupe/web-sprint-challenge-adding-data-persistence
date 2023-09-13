// build your `Project` model here
function getProjectById(project_id) {
  return Promise.resolve(`Great Project ${project_id}`);
}

module.exports = { getProjectById };
