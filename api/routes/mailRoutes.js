const express = require("express");
const { mailSender, getMail } = require("../controlllers/mailController");
const router = express.Router();

router.route("/").get(getMail).post(mailSender);

module.exports = router;
