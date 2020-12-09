const express = require("express");
const Cars = require("./cars-model");
const validateData = require("../middleware/carsDataValidation");
const validateId = require("../middleware/validateId");
const router = express.Router();

router.get("/", (req, res) => {
  Cars.getAll().then((data) => {
    res.status(200).json(data);
  });
});

router.get("/:id", validateId, (req, res) => {
  Cars.getById(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.post("/", validateData, (req, res) => {
  Cars.create(req.body)
    .then((data) => {
      return Cars.getById(data);
    })
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.put("/:id", validateId, validateData, (req, res) => {
  Cars.update(req.params.id, req.body)
    .then(() => {
      return Cars.getById(req.params.id);
    })
    .then((car) => {
      res.status(200).json(car);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

router.delete("/:id", validateId, (req, res) => {
  Cars.delete(req.params.id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});

module.exports = router;
