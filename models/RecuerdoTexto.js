const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    date:String,
    name:String,
    endless:String,
    destination:String,
    number:String
  },{
    timestamps:{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

module.exports = mongoose.model('RecuerdoTexto', userSchema)