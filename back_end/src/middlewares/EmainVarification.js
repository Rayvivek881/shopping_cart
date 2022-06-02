const {user, pass} = require('../keys');
const nodemailer = require('nodemailer');

const isOkEmail = async (targetEmail, name) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user,
            pass
        }
    });
    const randomInt = () => {
        let low = 100000, high = 999999;
        return Math.floor(Math.random() * (high - low + 1) + low);
    }
    let val = randomInt();
    const mailOptions = {
        from: user,
        to: targetEmail,
        subject: 'VCart email verification by Node js',
        text: `Hi ${name}, i am owner of this beautiful website name:  vivek kumar ray
        or your email verification OTP is : ${val} welcome to my family`
    };
    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {console.log(err);}
        else { console.log('Email sent: ', + info.response); }
    });
    return val;
}

module.exports = isOkEmail;
