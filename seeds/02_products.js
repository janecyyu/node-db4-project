exports.seed = function (knex, Promise) {
  return knex("products").insert([
    { Name: "Pork" },
    { Name: "Rice" },
    { Name: "Chicken" },
    { Name: "Fish" },
    { Name: "Potato" },
    { Name: "Salt" },
    { Name: "Garlic" },
    { Name: "Ginger" },
  ]);
};
