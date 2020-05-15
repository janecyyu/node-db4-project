exports.seed = function (knex, Promise) {
  return knex("recipe_ingredients").insert([
    { Quantity: 1, RecipeID: 1, IngredientsID: 4 },
    { Quantity: 2, RecipeID: 1, IngredientsID: 5 },
    { Quantity: 3, RecipeID: 1, IngredientsID: 6 },
    { Quantity: 1, RecipeID: 1, IngredientsID: 7 },
    { Quantity: 2, RecipeID: 2, IngredientsID: 1 },
    { Quantity: 2, RecipeID: 2, IngredientsID: 4 },
    { Quantity: 1, RecipeID: 2, IngredientsID: 2 },
  ]);
};
