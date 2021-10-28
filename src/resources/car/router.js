const express = require("express");

const { getAllCars, CreateOne, deleteById } = require("./controller");

const router = express.Router();

router.get("/", getAllCars)

router.post("/", CreateOne)

router.delete("/:id", deleteById)

module.exports = router;