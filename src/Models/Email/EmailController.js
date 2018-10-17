var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var sgTransport = require('nodemailer-sendgrid-transport');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Email = require('./Email');
var config = require('../../config')

// sending email
router.post('/saveUser', function (req, res) {
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
    var options = {
      auth: {
        api_user: config.SENDGRID_USERNAME,
        api_key: config.SENDGRID_PASSWORD
      }
    }
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
      console.log("error: " + JSON.stringify(err));
    });
    var myOptions = {
        to: req.body.from,
        from: myEmail,
        subject: 'Thanks for contacting me!',
        text: req.body.message,
        html: '<div>Hello! '+req.body.name+',</div><br/><div>Thanks for the interest on my profile.</div><br/><div>I will get back to you soon.</div><br/><br/><div>Cheers,</div><br/><div><strong>Pavan Kumar Dasireddy.</strong></div>'
      };
      smtpTransport.sendMail(myOptions, function (err) {
        console.log("error: " + JSON.stringify(err));
      });
      res.send({ "message": "Sent Successfully!" });
  });

module.exports = router;