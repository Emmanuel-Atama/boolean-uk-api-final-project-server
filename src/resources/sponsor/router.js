const express = require("express");

const {getAllSponsors} = require("./controller")

const router = express.Router();

router.get("/", getAllSponsors)

module.exports = router;
 