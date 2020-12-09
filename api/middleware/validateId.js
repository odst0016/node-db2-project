const Cars = require("../cars/cars-model");
const validateId = (req, res, next) => {
  Cars.getById(req.params.id).then((data) => {
    if (data !== undefined) {
      next();
    } else {
      res.status(400).json({ message: "resource not found" });
    }
  });
};

module.exports = validateId;
