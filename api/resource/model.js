// build your `Resource` model here
function getResourceById(resource_id) {
  return Promise.resolve(`Great Resource ${resource_id}`);
}

module.exports = { getResourceById };

// async function getRecipeById(recipe_id) {
//   const recipeRows = await db("recipes as r")
//     .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
//     .leftJoin("step_ingredients as si", "si.step_id", "s.step_id")
//     .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")
//     .select(
//       "r.recipe_id",
//       "r.recipe_name",
//       "s.step_id",
//       "s.step_number",
//       "s.step_text",
//       "si.ingredient_id",
//       "i.ingredient_name",
//       "si.quantity"
//     )
//     .orderBy("s.step_number")
//     .where("r.recipe_id", recipe_id);

// const resourceRows = await db("resources as r")
//   .leftJoin("r.resource_id", "r.resource_name", "r.resource_description")
//   .where("r.resource_id", resource_id);

// return resourceRows;
