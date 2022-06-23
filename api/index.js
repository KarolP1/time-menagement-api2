const express = require("express");
const router = express.Router();
const MailingRoutes = require("./Mailing/MailingRoutes");

router.use("/mailing", MailingRoutes);

module.exports = router;
