const express = require("express");

<<<<<<< HEAD
const { getAllCars, createOne } = require("./controller");
=======
const { getAllCars, CreateOne, deleteById } = require("./controller");
>>>>>>> cf87531a627445037212a108bd71a3030fdfa1ce

const router = express.Router();

router.get("/", getAllCars)

router.post("/", createOne)

router.delete("/:id", deleteById)

module.exports = router;