const db = require("../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
};

function getRecipes() {
  return db("recipe_details");
}

function getShoppingList(id) {
  return db("recipe_ingredients as ri")
  .join('products as p', 'p.id', '=', 'ri.IngredientsID')
  .select('ri.Quantity','p.Name')
  .where("RecipeID", id);
}
