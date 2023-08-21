const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true
  },
  house_id: {
    type: mongoose.Types.ObjectId,
    ref: 'House',
    required: true
  },
  starting_date: Date,
  ending_date: Date
})

module.exports = mongoose.model('Reservation', reservationSchema)