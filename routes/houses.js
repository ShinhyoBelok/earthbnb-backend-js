const express = require('express')
const router = express.Router()
const House = require("../database/model/HouseModel")
const Reservation = require('../database/model/ReservationModel')

router.route('/')
  .get(async (req, res) => {
    try {
      const houses = await House.find()
      res.send(houses)
    } catch (error) {
      console.error('Error fetching houses', error)
      res.status(500).send('Error fetching houses')
    }
  })
  .post(async (req, res) => {
    const {
      house_name,
      address,
      rooms,
      beds,
      picture,
      price_by_night,
      description,
      publisher
    } = req.body
    try {
      await House.create({
        house_name,
        address,
        rooms,
        beds,
        picture,
        price_by_night,
        description,
        publisher
      })
    } catch (error) {
      console.error(`Error creating the house\n \n`, error)
      res.status(500).send('Error creating house')
    }
  })

router.route('/:id')
  .get(async (req, res) => {
    const reservations = await Reservation.find({house_id: req.house})
    const response = {
      ...req.house.toObject(), // Convert Mongoose document to plain object
      reservations
    }
    res.send(response)
  })
  .delete(async (req, res) => {
    const { _id } = req.house
    try {
      await House.deleteOne({ _id })
      res.send('House successfully deleted')
    } catch (error) {
      console.error(`Error deleting house by id: ${_id} \n \n`, error)
      res.status(500).send('Error deleting house')
    }
  })

router.param("id", async (req, res, next, id) => {
  try {
    req.house = await House.findById(id)
  } catch (error) {
    console.error(`Error fetching house by id: ${id} \n \n`, error)
    res.status(500).send('Error fetching house by id')
  }
  next()
})

module.exports = router