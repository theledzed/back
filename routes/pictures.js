const express = require('express');
const router  = express.Router();
const path = require('path')
const RecuerdoImg = require('../models/RecuerdoImg')
const {verifyToken} =require('../helpers/jwt')

const User = require ('../models/User')


const multer =require ('multer')
const upload = multer({dest:'../public/images/'})



router.post('/', verifyToken, upload.single('file'), (req ,res ,next)=>{
 
  if(req.file) req.body.link = '/images/' + req.file.Img
  
  console.log('el body',req.body)
  RecuerdoImg.create({...req.body, user: req.user._id})
  .then(Img=>{
    console.log(Img)
   User.findByIdAndUpdate(req.user._id, {$set: {Img: Img._id}}, {new: true})
   .then(user => {
     console.log(user)
   res.status(201).json(Img)
  }).catch(e=>next(e))
}).catch(e=>next(e))
})

// router.post('/', verifyToken, upload.single('file'), (req,res,next)=>{
//   if(req.file) req.body.link = '/images/' + 'req.original.name'
//   const form = req.body  
//   form.name = req.user._id
//    RecuerdoImg.create(form)
//     .then(pic=>res.status(200).json(pic))
//     .catch(e=>next())
// })

module.exports = router