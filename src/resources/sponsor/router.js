const express = require("express");

const {getAllSponsors, createOne, deleteById} = require("./controller")

const router = express.Router();

router.get("/", getAllSponsors)

router.post("/", createOne)

router.delete("/:id", deleteById)

module.exports = router;
 