exports.seed = function (knex, Promise) {
  return knex("recipe_steps").insert([
    { Instructions: "Wash it!", Order: 1, RecipeID: 1 },
    { Instructions: "Cut it!", Order: 2, RecipeID: 1 },
    { Instructions: "Add some water", Order: 1, RecipeID: 2 },
    { Instructions: "Add some milk", Order: 2, RecipeID: 2 },
  ]);
};
