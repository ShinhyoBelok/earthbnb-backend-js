require('./database/mongoose')
const express = require('express')
const app = express()
const port = 3000
const housesRouter = require('./routes/houses')
const usersRouter = require('./routes/users')

app.listen(port,() => {
  console.log('Listening to port 3000')
})

app.use( express.json() )
app.use('/houses', housesRouter)
app.use('/', usersRouter)
