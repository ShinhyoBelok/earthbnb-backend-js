const express = require('express')
const router = express.Router()
const User = require('../database/model/UserModel')

router.post('login', (req, res) => {
  const login = canLogin(req)
  if (login.logged_in) {
    res.json(login)
  } else {
    res.json(login)
  }
})

router.post('logout', (req, res) => {
  res.status(200).json({ logged_out: true })
})

const canLogin = async (req) => {
  const { username } = req.body.user
  try {
    req.user = await User.findOne({ username })
    return { logged_in: true, user: req.user }
  } catch {
    return { logged_in: false, errors: { username: ['No such user, please try again'] } }
  }
}