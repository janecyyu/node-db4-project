const db = require("../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
};

function getRecipes() {
  return db("recipe_details");
}

function getShoppingList(id) {
  return db("recipe_ingredients").where("RecipeID", id);
}
