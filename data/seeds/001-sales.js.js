exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("sales")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("sales").insert([
        { id: 1, carId: 1, sold: "no" },
        { id: 2, carId: 2, sold: "no" },
        { id: 3, carId: 3, sold: "no" },
      ]);
    });
};
