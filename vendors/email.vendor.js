"use strict";
const nodemailer = require("nodemailer");
const mailhbs = require('nodemailer-express-handlebars');
const {Config, TypeEmail} = require('../constants/email.constant')

/**
 * Config server mail
 */
const config = {
  host: Config._Host,
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: Config._User, // generated ethereal user
    pass: Config._Password, // generated ethereal password
  },
  tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
  },
  debug: true
}

/**
 * Setup template engine email
 */
const options = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: 'views/email',//your path, views is a folder inside the source folder
    layoutsDir: 'views/email',
    defaultLayout: false
  },
  viewPath: 'views/email',
  extName: '.hbs',
};

const transporter = nodemailer.createTransport(config)
transporter.use('compile', mailhbs(options));

/**
 * Gửi mail
 * @param {string, string} reciverers người nhận, cách nhau bới dấu ','
 * @param {string} subject Tiêu đề body
 * @param {string} body Nội dung body
 */
const sendMail = async (reciverers, body, type = null) => {
  try {
    let mailOptions = {
      from: '"'+Config._title+'" <'+Config._Hosinger_user+'>', // sender address
      to: reciverers, // list of receivers
      context: {
        body: body
      }
    };

    switch (true) {
      case type === TypeEmail._ActiveEmail:
        mailOptions.subject =  TypeEmail._ActiveEmailTitle
        mailOptions.template = TypeEmail._ActiveEmailTemplate
      break;

      default:
        mailOptions.subject = TypeEmail._DefaultEmailTitle
        mailOptions.template = TypeEmail._DefaultEmailTemplate
    }
    
    await transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        return "fail"
      } else {
        return "success"
      }
    })
  } catch (err) {
    return err
  }
}

module.exports = {
  sendMail
}
