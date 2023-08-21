const express = require('express')
const router = express.Router()
const User = require('../database/model/UserModel')

router.post('/', (req, res) => {
  const { username } = req.body
  const newUser = new User({ username })

  if (User.findOne(newUser)) {
    res.status(422).json({ message: 'Username already exist' }) //status Unprocessable content
  } else if (newUser.save()) {
    res.status(201).json({ user: newUser }) //status created
  } else {
    res.status(500).json({ errors: newUser.errors })
  }
})