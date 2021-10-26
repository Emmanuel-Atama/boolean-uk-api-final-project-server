const express = require("express");

const {getAllSponsors, deleteSponsorById} = require("./controller")

const router = express.Router();

router.get("/", getAllSponsors)

router.delete("/:id", deleteSponsorById)

module.exports = router;
 