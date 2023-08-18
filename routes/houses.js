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