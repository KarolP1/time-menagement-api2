const nodemailer = require("nodemailer");
const { sendRegisterEmail, sendResetEmail } = require("./transporters");

let Transporter = nodemailer.createTransport({
  host: "cloud143.networkmanager.pl",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // generated ethereal user
    pass: process.env.SMTP_PASSWPRD, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const Mailer = async (props) => {
  const { email, title, description, verifyLink } = props;
  const transporter = Transporter;
  try {
    try {
      await sendRegisterEmail(
        transporter,
        title,
        email,
        description,
        verifyLink
      );
      console.log("email sent");
    } catch (error) {
      error;
    }
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

const Mailerreset = async (props) => {
  try {
    const { email, title, description, verifyLink } = props;
    const transporter = Transporter;
    await sendResetEmail(transporter, title, email, description, verifyLink);
  } catch (error) {
    console.error(error);
    // throw new Error(error.message)
  }
};

module.exports = { Mailer, Mailerreset };
