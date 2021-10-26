const express = require("express");

const { getAllCars, CreateOneCar } = require("./controller");

const router = express.Router();

router.get("/", getAllCars)

router.post("/", CreateOneCar)

module.exports = router;