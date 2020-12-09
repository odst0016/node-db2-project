const express = require("express");
const Cars = require("./cars-model");
const router = express.Router();

router.get("/", (req, res) => {
  Cars.getAll().then((data) => {
    res.status(200).json(data);
  });
});

router.get("/:id", (req, res) => {
  Cars.getById(req.params.id).then((data) => {
    res.status(200).json(data);
  });
});

router.post("/", (req, res) => {
  Cars.create(req.body).then((data) => {
    res.status(200).json(data);
  });
});

router.put("/:id", (req, res) => {
  Cars.update(req.params.id, req.body).then((data) => {
    res.status(200).json(data);
  });
});

router.delete("/:id", (req, res) => {
  Cars.delete(req.params.id).then((data) => {
    res.status(200).json(data);
  });
});

module.exports = router;
