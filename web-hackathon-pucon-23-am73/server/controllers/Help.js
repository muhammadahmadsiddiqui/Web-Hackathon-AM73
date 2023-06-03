const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
require('dotenv').config();

const transport = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.SENDGRID_API_KEY
    })
);

exports.sendEmail = async (req) => {
    const body = req.body.bodyy;
    const sendTo = req.body.email

    transport
        .sendMail({
            from: 'iqrasarwarm012@gmail.com',
            to: [sendTo],
            subject: "Event notification",
            html: body,
        })
        .then(([res]) => {
            console.log('Message delivered with code %s %s', res.statusCode, res.statusMessage);
        })
        .catch(err => {
            console.log('Errors occurred, failed to deliver message');
            if (err.response && err.response.body && err.response.body.errors) {
                err.response.body.errors.forEach(error => console.log('%s: %s', error.field, error.message));
            } else {
                console.log(err);
            }
        });
}