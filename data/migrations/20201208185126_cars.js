exports.up = function (knex) {
  return knex.schema
    .createTable("cars", (table) => {
      table.increments();
      table.text("vin").notNullable();
      table.text("make").notNullable();
      table.text("model").notNullable();
      table.text("mileage").notNullable();
      table.text("transmission");
      table.text("title_status");
    })
    .createTable("sales", (table) => {
      table.increments();
      table
        .bigInteger("carId")
        .unsigned()
        .index()
        .references("id")
        .inTable("cars");
      table.text("sold");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
