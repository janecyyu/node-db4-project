const db = require("../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipe_details");
}

function getShoppingList(id) {
  return db("recipe_ingredients as ri")
    .join("products as p", "p.id", "=", "ri.IngredientsID")
    .select("ri.Quantity", "p.Name")
    .where("RecipeID", id);
}

function getInstructions(id) {
  return db("recipe_steps as rs")
    .join("recipe_details as rd", "rd.id", "=", "rs.RecipeID")
    .select("Order", "Instructions")
    .where("rd.id", id);
}
