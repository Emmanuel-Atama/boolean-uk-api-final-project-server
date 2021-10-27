const express = require("express");

const { getAllCars, CreateOne } = require("./controller");

const router = express.Router();

router.get("/", getAllCars)

router.post("/", CreateOne)

module.exports = router;