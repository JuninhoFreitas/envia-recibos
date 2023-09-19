require('dotenv').config();

//create a mailer to send mail to the user
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:'outlook',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

//create transporter to outlook

const sendMail = (mailOptions) => {
    console.log(mailOptions)
    return transporter.sendMail({...mailOptions, from: process.env.EMAIL_USER, sender: process.env.EMAIL_USER,});
}

module.exports = {
    sendMail
}