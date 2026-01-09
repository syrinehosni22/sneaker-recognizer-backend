const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.sendVerificationEmail = async (to, code) => {
  await transporter.sendMail({
    from: `"Sheoa App" <${process.env.MAIL_USER}>`,
    to,
    subject: "Your verification code",
    html: `
      <h2>Email verification</h2>
      <p>Your verification code is:</p>
      <h1>${code}</h1>
      <p>This code expires in 5 minutes.</p>
    `,
  });
};
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendVerificationEmail = async (email, code) => {
  const msg = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: "Email Verification Code",
    text: `Your verification code is: ${code}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Email Verification</h2>
        <p>Your verification code is:</p>
        <h1 style="letter-spacing: 4px;">${code}</h1>
        <p>This code expires in <b>5 minutes</b>.</p>
      </div>
    `,
  };

  await sgMail.send(msg);
};

module.exports = sendVerificationEmail;
