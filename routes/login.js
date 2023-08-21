const express = require('express')
const router = express.Router()
const User = require('../database/model/UserModel')

router.post('/', async (req, res) => {
  const { user } = req.body
  req.user = await User.findOne({ username: user.username.toLowerCase() })

  if (req.user) {
    res.send({ logged_in: true, user: req.user })
  } else {
    res.send({ logged_in: false, errors: { username: ['No such user, please try again'] } })
  }
})

module.exports = router