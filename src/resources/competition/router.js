const express = require("express");

const { getAllCompetitions } = require("./controller");

const router = express.Router();

router.get("/", getAllCompetitions)

module.exports = router;
 