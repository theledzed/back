const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    date:String,
    name:String,
    link: String,
    explication: String,
    destination:String
  },{
    timestamps:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)


module.exports = mongoose.model('RecuerdoImg', userSchema)