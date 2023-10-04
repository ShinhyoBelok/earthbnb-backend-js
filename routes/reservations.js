const express = require('express')
const router = express.Router()
const Reservation = require('../database/model/ReservationModel')
const User = require('../database/model/UserModel')

router.post('/', (req, res) => {
  const newReservation = new Reservation(req.body)
  if (newReservation.save()) {
    res.status(201).send({ status: 'created', json: newReservation })
  } else {
    res.status(422).send({ errors: newReservation.errors })
  }
})

router.get('/:username', async (req, res) => {
  try {
    const user = await User.find({ username: req.params.username })
    const reservations = await Reservation.find({ user_id: user })
      .populate('house_id')
      .populate('user_id')
    res.send(reservations)
  } catch (err) {
    res.send([])
  }
})

module.exports = router