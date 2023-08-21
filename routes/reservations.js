const express = require('express')
const router = express.Router()
const Reservation = require('../database/model/ReservationModel')

router.post('/', (req, res) => {
  const newReservation = new Reservation(req.body.newReservation)
  if (newReservation.save()) {
    res.status(201).json({ json: newReservation })
  } else {
    res.status(422).json({ errors: newReservation.errors })
  }
})