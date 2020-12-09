const validate = (req, res, next) => {
  const data = req.body;
  const vin = Object.prototype.hasOwnProperty.call(data, "vin");
  const make = Object.prototype.hasOwnProperty.call(data, "make");
  const model = Object.prototype.hasOwnProperty.call(data, "model");
  const mileage = Object.prototype.hasOwnProperty.call(data, "mileage");
  if (
    vin === true &&
    make === true &&
    model === true &&
    mileage === true &&
    Object.keys(data).length <= 7
  ) {
    next();
  } else {
    res
      .status(400)
      .json({ message: "Data is not structured in a usable way for the API" });
  }
};

module.exports = validate;
