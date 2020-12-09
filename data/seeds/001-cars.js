exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          id: 1,
          vin: "rowValue1",
          make: "generic",
          model: "generic",
          mileage: "12",
          transmission: "auto",
          title_status: "clean",
        },
        {
          id: 2,
          vin: "rowValue2",
          make: "generic",
          model: "generic",
          mileage: "12",
          transmission: "auto",
          title_status: "clean",
        },
        {
          id: 3,
          vin: "rowValue3",
          make: "generic",
          model: "generic",
          mileage: "12",
          transmission: "auto",
          title_status: "clean",
        },
      ]);
    });
};
