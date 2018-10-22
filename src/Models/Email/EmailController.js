var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var sgTransport = require('nodemailer-sendgrid-transport');
// require('dotenv').config()
var config = require('../../config_file')

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Email = require('./Email');

// sending email
router.post('/saveUser', function (req, res) {
  //console.log("request is: ",req.body)
    var email =  Email.create({
        name : req.body.name,
        subject : req.body.subject,
        from : req.body.from,
        message : req.body.message
    }, 
    function (err, email) {
        if (err) return res.status(500).send("There was a problem adding the user information to the database.");
        res.status(200).send(email);
        console.log("post service// "+email)
    });
});

router.post('/sendEmail', function (req, res) {
  //console.log('req is:', req.body)
  var email = Email.create({
      name: req.body.name,
      subject: req.body.subject,
      from: req.body.from,
      message: req.body.message
    },
    function (err, email) {
      if (err) return res.status(500).send("There was a problem adding the user information to the database.");
      //res.status(200).send(email);
      console.log("post service// " + email)
    });
  
    var options = {
      auth: {
        // api_user:process.env.SENDGRID_USERNAME,
        // api_key:process.env.SENDGRID_PASSWORD,
        api_user: config.SENDGRID_USERNAME,
        api_key: config.SENDGRID_PASSWORD
      }
    }
    console.log('options are: ', options)
    var smtpTransport = nodemailer.createTransport(sgTransport(options));
    var myEmail = 'pavankumar.dasireddy@gmail.com';
    var mailOptions = {
      to: myEmail,
      from: req.body.from,
      subject: req.body.subject,
      text: req.body.message,
      html: '<div>Hey! Pavan Kumar Dasireddy,</div><br/><br/><div>'+req.body.message+'</div>'
    };
    smtpTransport.sendMail(mailOptions, function (err) {
      console.log("error: ", err);
    });
    var myOptions = {
        to: req.body.from,
        from: myEmail,
        subject: 'Thanks for contacting me!',
        text: req.body.message,
        html: '<div>Hello! '+req.body.name+',</div><br/><div>Thanks for the interest on my profile.</div><br/><div>I will get back to you soon.</div><br/><br/><div>Cheers,</div><br/><div><strong>Pavan Kumar Dasireddy.</strong></div>'
      };
      smtpTransport.sendMail(myOptions, function (err, email) {
        err ? console.log('error: ',err) : console.log('success response: ', email);
      });
      res.send({ "message": "Mail Sent Successfully!" });
  });

module.exports = router;