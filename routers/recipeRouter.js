const express = require("express");
const recipe = require("./recipeModel");
const router = express.Router();

router.get("/", (req, res) => {
  recipe
    .getRecipes()
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get schemes" });
    });
});
router.get("/:id/shoppingList", (req, res) => {
  recipe
    .getShoppingList(req.params.id)
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get schemes" });
    });
});

module.exports = router;
