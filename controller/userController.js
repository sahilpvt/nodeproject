const userModel = require('../model/userModel')
var nodemailer = require('nodemailer');
exports.insert = async (req, res) => {
    var otp = Math.floor(1000 + Math.random() * 9000)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sahilpvt111@gmail.com',
            pass: 'jujboblbigsdbvtb'
        }
    });

    var mailOptions = {
        from: 'sahilpvt111@gmail.com',
        to: req.body.email,
        subject: 'Hey' + req.body.name,
        text: otp.toString()
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    // const data = await userModel.create(req.body)
    res.status(200).json({
        status: "Send succesfully",
        otp
    })

}
exports.getdata = async (req, res) => {
    const data = await userModel.find()
    res.status(200).json({
        status: "get OTP successfully",
        data
    })
}