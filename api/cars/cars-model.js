const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("cars");
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
};
