const express = require("express");

const {getAllRacetracks} = require("./controller")

const router = express.Router();

router.get("/", getAllRacetracks)

module.exports = router;
 