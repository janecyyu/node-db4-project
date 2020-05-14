exports.up = function (knex) {
  return knex.schema
    .createTable("recipe_details", (recipe_details) => {
      recipe_details.increments();

      recipe_details.string("Dish Name", 255).notNullable();
    })
    .createTable("products", (products) => {
      products.increments();

      products.string("Name", 255).notNullable();
    })
    .createTable("recipe_ingredients", (recipe_ingredients) => {
      recipe_ingredients.increments();

      recipe_ingredients.integer("Quantity").notNullable();

      recipe_ingredients
        .integer("RecipeID")
        .unsigned()
        .references("id")
        .inTable("recipe_details")
        .onUpdate("CASCADE") //restrict, do nothing, set null, cascade
        .onDelete("RESTRICT");

      recipe_ingredients
        .integer("IngredientsID")
        .unsigned()
        .references("id")
        .inTable("products")
        .onUpdate("CASCADE") //restrict, do nothing, set null, cascade
        .onDelete("RESTRICT");
    })
    .createTable("recipe_steps", (recipe_steps) => {
      recipe_steps.increments();

      recipe_steps.string("Instructions", 255).notNullable();
      recipe_steps.integer("Order").notNullable();
      recipe_steps
        .integer("RecipeID")
        .unsigned()
        .references("id")
        .inTable("recipe_details")
        .onUpdate("CASCADE") //restrict, do nothing, set null, cascade
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("products")
    .dropTableIfExists("recipe_details");
};
