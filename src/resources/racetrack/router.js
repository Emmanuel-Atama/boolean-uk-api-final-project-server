const express = require("express");

const {getAllRacetracks, updateRacetrackById, getOneRacetrackById} = require("./controller")

const router = express.Router();

router.get("/", getAllRacetracks)

router.get("/:id", getOneRacetrackById)

router.put("/:Id", updateRacetrackById)

module.exports = router
