const express = require("express");

const { getAllCars, createOne } = require("./controller");

const router = express.Router();

router.get("/", getAllCars)

router.post("/", createOne)

module.exports = router;