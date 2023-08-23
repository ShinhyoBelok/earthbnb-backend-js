const express = require('express')
const router = express.Router()
const User = require('../database/model/UserModel')

router.post('/', async (req, res) => {
  const { username } = req.body
  const newUser = new User({ username })
  const foundUser = await User.findOne(newUser)
  if (foundUser) {
    res.status(422).send({ 
      status: 'unrpocessable_entity', 
      message: 'Username already exist' 
    }) //status Unprocessable content
  } else if (newUser.save()) {
    res.status(201).send({
      status: 'created',
      user: newUser
    }) //status created
  } else {
    res.status(500).send({
      errors: newUser.errors
    })
  }
})

module.exports = router