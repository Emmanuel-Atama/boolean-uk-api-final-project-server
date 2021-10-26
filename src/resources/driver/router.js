const express = require("express");

const { getAllDrivers, getOneDriverById } = require("./controller");

const router = express.Router();

router.get("/", getAllDrivers)

router.get("/:id", getOneDriverById )

module.exports = router;