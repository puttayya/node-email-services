require('dotenv').config();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(
            process.env.SENDGRID_API_KEY
            );

const sendEmail = (to, from, subject, text) => {
    const msg = {
        to,
        from,
        subject,
        text
    }

    sgMail.send(msg, function(error, result){
        if(error){
            console.log(`Email is not sent`);
        } else {
            console.log(`Email was sent successfully`);
        }
    });
};

module.exports = sendEmail;