exports.up = function (knex) {
  return knex.schema
    .createTable("recipe_details", (recipe_detail) => {
      recipe_detail.increment();

      recipe_detail.string("Dish Name", 255).notNullable();
    })
    .createTable("products", (products) => {
      products.increment();

      products.toString("Name", 255).notNullable();
    })
    .createTable("recipe_ingredients", (recipe_ingredients) => {
      recipe_ingredients.increment();

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
        .inTable("recipe_ingredients")
        .onUpdate("CASCADE") //restrict, do nothing, set null, cascade
        .onDelete("RESTRICT");
    })
    .createTable("recipe_steps", (recipe_steps) => {
      recipe_steps.increment();

      recipe_steps.toString("Instructions", 255).notNullable();
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
