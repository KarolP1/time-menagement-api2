const express = require("express");
const { SendResetMail } = require("./Functions");
const { SendWelcomeMail } = require("./Functions");
const routes = express.Router();

routes.post("/sendWelcomeEmial", SendWelcomeMail);
routes.post("/sendResetEmial", SendResetMail);

module.exports = routes;
