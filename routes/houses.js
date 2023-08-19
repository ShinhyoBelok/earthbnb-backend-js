const express = require('express')
const router = express.Router()
const House = require("../database/model/HouseModel")

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
      description
    } = req.body
    try {
      await House.create({
        // house_name: req.params.house_name,
        // address: req.params.address,
        // rooms: req.params.rooms,
        // beds: req.params.beds,
        // picture: req.params.picture,
        // price_by_night: req.params.price_by_night,
        // description: req.params.description
        house_name,
        address,
        rooms,
        beds,
        picture,
        price_by_night,
        description
      })
    } catch (error) {
      console.error(`Error creating the house\n \n`, error)
      res.status(500).send('Error creating house')
    }
  })

router.route('/:id')
  .get((req, res) => {
    res.send(req.house)
  })
  .delete(async (req, res) => {
    try {
      await House.deleteOne({ _id: req.house.id })
      res.send('House successfully deleted')
    } catch (error) {
      console.error(`Error deleting house by id: ${id} \n \n`, error)
      res.status(500).send('Error deleting house')
    }
  })

router.param('id', async (req, res, next, id) => {
  try {
    req.house = await House.findById(id)
  } catch (error) {
    console.error(`Error fetching house by id: ${id} \n \n`, error)
    res.status(500).send('Error fetching house by id')
  }
  next()
})

module.exports = router