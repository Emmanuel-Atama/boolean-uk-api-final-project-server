const express = require("express");

const {getAllTeams} = require("./controller");

const router = express.Router();

router.get("/", getAllTeams)

module.exports = router;
 