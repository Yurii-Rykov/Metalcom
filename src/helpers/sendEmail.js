// const nodemailer = require('nodemailer');
// import nodemailer from 'nodemailer';

const sendEmail = async data => {
    // const transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true, // true for 465, false for other ports
    //     auth: {
    //         user: 'hellreebok@gmail.com', // generated ethereal user
    //         pass: 'xHell180478', // generated ethereal password
    //     },
    // });
    // let transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'hellreebok@gmail.com',
    //         pass: 'xHell180478',
    //     },
    // });
    // let info = await transporter.sendMail({
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: 'bar@example.com, baz@example.com', // list of receivers
    //     subject: 'Hello ✔', // Subject line
    //     text: 'Hello world?', // plain text body
    //     html: '<b>Hello world?</b>', // html body
    // });
};

export default sendEmail;
