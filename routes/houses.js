const express = require('express')
const router = express.Router()
const House = require("../database/model/HouseM")

router.get('/', async (req, res) => {
  try {
    const houses = await House.find()
    res.send(houses)
  } catch (error) {
    console.error('Error fetching houses', error)
    res.status(500).send('Error fetching houses')
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