// build your `Resource` model here
function getResourceById(resource_id) {
  return Promise.resolve(`Great Resource ${resource_id}`);
}

module.exports = { getResourceById };
