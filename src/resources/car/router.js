const express = require("express");

const { getAllCars } = require("./controller");

const router = express.Router();

router.get("/", getAllCars)

module.exports = router;