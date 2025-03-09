const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "mail.forumdestelecommunications.fr",
  port: 465,
  secure: true,
  auth: {
    user: "dfdf",
    pass: "fdfd",
  },
});


const mailOptions = {
  from: `"Bike & Run Support" <contact@forumdestelecommunications.fr>`, // Must match the authenticated email
  to: "paul-jean.girault@telecom-sudparis.eu",
  subject: "merci", 
  text: "This is a plain text email body.",
  html: "<h1>Welcome!</h1><p>This is an HTML email body.</p>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
