const mongoose = require('mongoose')

// have to create the proper validations
const houseSchema = new mongoose.Schema({
  house_name: String,
  address: String,
  rooms: Number,
  beds: Number,
  picture: String,
  price_by_night: Number,
  description: String
})

module.exports = mongoose.model('House', houseSchema)