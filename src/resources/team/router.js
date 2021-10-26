const express = require("express");

const {getAllTeams, getTeamByName} = require("./controller");

const router = express.Router();

router.get("/", getAllTeams)

router.get("/:teamName", getTeamByName)

module.exports = router;
 