const express = require("express");

const { getAllDrivers } = require("./controller");

const router = express.Router();

router.get("/", getAllDrivers)

module.exports = router;