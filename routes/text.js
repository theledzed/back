const express = require('express');
const router  = express.Router();
const path = require('path')
const RecuerdoTexto = require('../models/RecuerdoTexto')
const {verifyToken} =require('../helpers/jwt')
const User = require ('../models/User')
var schedule = require('node-schedule');

const multer =require ('multer')
const upload = multer({dest:'../public/images/'})
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ironhacito@gmail.com',
    pass: 'pollollon'
  }
});

const accountSid = 'AC5af57fb7793cf6a01863430682dd6c91'; 
const authToken = 'bdde61b50f32791258eb81b330dc5ecd'; 
const client = require('twilio')(accountSid, authToken); 
 
let algo = function(obj){
  var mailOptions = {
    from: 'ironhacito@gmail.com',
    to: obj.to,
    subject: 'Tienes un recuerdo por revivir.',
    text: obj.endless

  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
  client.messages 
      .create({ 
         body: obj.endless, 
         from: '+12248013117',       
         to: 'whatsapp:+52' + obj.number 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
}

router.post('/', verifyToken, (req ,res ,next)=>{
  RecuerdoTexto.create({...req.body, user: req.user._id})
  .then(text=>{
    var date = new Date(req.body.date);
    var j = schedule.scheduleJob(date, algo.bind(null, {"to": req.body.destination,
                                                        "endless": req.body.endless,
                                                        "number": req.body.number}));
    res.status(201).json(text)
  })
  .catch(e=>next(e))
})


module.exports = router