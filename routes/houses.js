const express = require('express')
const router = express.Router()
const House = require("../database/model/HouseM")

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
    try {
      await House.create({
        house_name: 'Cozy Cottage',
        address: '123 Main Street, City',
        rooms: 3,
        beds: 2,
        picture: 'https://dam-assets.au.reastatic.net/images/w_2000,h_1500/v1666226657/news-lifestyle-content-assets/wp-content/production/image-10_787815ed2d9/image-10_787815ed2d9.jpg?_i=AA',
        price_by_night: 100.0,
        description: 'A charming cottage nestled in a peaceful neighborhood.'
      })
    } catch (error) {
      console.error(`Error deleting house by id: ${id} \n \n`, error)
      res.status(500).send('Error deleting house')
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