const express = require("express");

const { getAllCars, createOne, deleteById } = require("./controller");

const router = express.Router();

router.get("/", getAllCars)

router.post("/", createOne)

router.delete("/:id", deleteById)

module.exports = router;