exports.seed = function (knex, Promise) {
  return knex("recipe_details").insert([
    { "Dish Name": "Fried Fish" },
    { "Dish Name": "Fried Rice" },
    { "Dish Name": "Fried Chicken" },
  ]);
};
