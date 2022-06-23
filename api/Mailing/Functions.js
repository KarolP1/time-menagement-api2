const { Mailer, Mailerreset } = require("./utils");

const SendWelcomeMail = async (req, res) => {
  const { email, title, description, messageText, vreify } = req.body;
  const verifyLink = vreify + "/token";
  const message = {
    email,
    title,
    description,
    verifyLink,
  };
  await Mailer(message);
  res.status(200).send({ status: 200, message: message, succes: true });
};

const SendResetMail = async (req, res) => {
  const { email, title, description, verifyLink } = req.body;
  console.error({ email, title, description, verifyLink });
  const message = {
    email,
    title,
    description,
    verifyLink,
  };
  await Mailerreset(message);
  res.status(200).send({ status: 200, message: message, succes: true });
};

module.exports = {
  SendWelcomeMail,
  SendResetMail,
};
