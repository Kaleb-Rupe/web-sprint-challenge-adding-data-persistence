// build your `Resource` model here
const db = require("../../data/dbConfig");

async function getAllResources() {
  const allResources = await db("resources");

  return allResources;
}

async function getResourceById(resource_id) {
  const resourceRows = await db("resources as r")
    .select("r.resource_id", "r.resource_name", "r.resource_description")
    .where("r.resource_id", resource_id);

  return resourceRows;
}

module.exports = { getResourceById, getAllResources };
