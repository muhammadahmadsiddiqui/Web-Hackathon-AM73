const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/Help.js");

router.post("/", sendEmail);

module.exports = router;