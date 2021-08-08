const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const asyncHandler = require("express-async-handler");
const dotenv = require("dotenv");

dotenv.config();

/* Credentials has been stored in .env file */

const CLIENT_ID = process.env.CLIENT_ID;
const CLEINT_SECRET = process.env.CLEINT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

/* Used OAuth 2.0 Google API for authentication */

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });


// @desc    Get API Status
// @route   GET /api/mail/
// @access  Public
const getMail = asyncHandler(async (req, res) => {
  res.send("API is running...");
});


// @desc    Mail Sender Function
// @route   POST /api/mail/
// @access  Public
const mailSender = asyncHandler(async (req, res) => {
  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();

      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "www.vishalsingh2704@gmail.com",
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      const mailOptions = {
        from: `${req.body.name} <${req.body.from}>`,
        to: `${req.body.to}`,
        subject: `${req.body.subject}`,
        text: `${req.body.text}`,
        html: `${req.body.html}`,
      };

      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }

  sendMail()
    .then((result) =>
      res.json({
        accepted: result.accepted,
        rejected: result.rejected,
        response: result.response,
        messageId: result.messageId,
        messageTime: result.messageTime,
        messageSize: result.messageSize,
      })
    )
    .catch((error) => res.json({ error: error.message }));
});

module.exports = {
  mailSender,
  getMail,
};
