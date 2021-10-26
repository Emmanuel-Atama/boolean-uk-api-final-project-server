const express = require("express");

const {getAllRacetracks, createOneRacetrackAndCompetition} = require("./controller")

const router = express.Router();

router.get("/", getAllRacetracks)

router.post("/", createOneRacetrackAndCompetition)

module.exports = router;
 