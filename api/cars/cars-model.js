const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("cars as c")
      .join("sales as s", "c.id", "s.carId")
      .select(
        "c.id",
        "c.vin",
        "c.make",
        "c.model",
        "c.mileage",
        "c.transmission",
        "c.title_status",
        "s.sold"
      );
  },
  getById(id) {
    return db("cars").where("id", id).first();
  },
  create(data) {
    return db("cars").insert(data);
  },
  update(id, data) {
    return db("cars").where("id", id).update(data);
  },
  delete(id) {
    return db("cars").where("id", id).del();
  },
  getSold() {
    return db("cars as c").join("sales as s", "c.id", "s.carId").select("*");
  },
};
