const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.status(200).send({ logged_out: true })
})

module.exports = router