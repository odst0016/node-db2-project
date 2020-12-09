exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments();
    table.text("vin").notNullable();
    table.text("make").notNullable();
    table.text("model").notNullable();
    table.text("mileage").notNullable();
    table.text("transmission");
    table.text("title_status");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
