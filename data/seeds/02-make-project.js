const projects = [
  {
    project_name: "Broccoli Pesto Pasta",
    project_description: "foo bar",
    project_completed: false,
  },
  {
    project_name: "Lemon Chicken",
    project_description: "foo bar",
    project_completed: false,
  },
  {
    project_name: "Salmon en Papillote",
    project_description: "foo bar",
    project_completed: false,
  },
];

const resources = [
  { resource_name: "Broccoli", resource_description: "lbs" },
  { resource_name: "Pesto", resource_description: "lbs" },
  { resource_name: "Pasta", resource_description: "lbs" },
  { resource_name: "Lemon", resource_description: "slices" },
  { resource_name: "Chicken", resource_description: "kilos" },
  { resource_name: "Salmon", resource_description: "grams" },
];

const project_resources = [
  //Broccoli Pesto Pasta
  { project_id: 2, resource_id: 1 },
  { project_id: 3, resource_id: 2 },
  { project_id: 3, resource_id: 3 },
  //Lemon Chicken
  { project_id: 1, resource_id: 4 },
  { project_id: 1, resource_id: 5 },
  //Salmon en Papillote
  { project_id: 1, resource_id: 6 },
];

const tasks = [
  {
    task_description: "Heat pan",
    task_notes: 1,
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "Add broccoli",
    task_notes: 2,
    task_completed: 1,
    project_id: 1,
  },
  {
    task_description: "Add pesto mixed with pasta",
    task_notes: 3,
    task_completed: 1,
    project_id: 3,
  },
  {
    task_description: "Heat oven",
    task_notes: 1,
    task_completed: 2,
    project_id: 2,
  },
  {
    task_description: "Put chicken and lemon in oven",
    task_notes: 2,
    task_completed: 2,
    project_id: 1,
  },
  {
    task_description: "Put in oven at 500 degrees",
    task_notes: 3,
    task_completed: 2,
    project_id: 3,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("project_resources").insert(project_resources);
  await knex("tasks").insert(tasks);
};
