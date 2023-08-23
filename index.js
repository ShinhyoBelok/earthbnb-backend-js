require('dotenv').config();
require('./database/mongoose')
const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT
const housesRouter = require('./routes/houses')
const usersRouter = require('./routes/users')
const reservationsRouter = require('./routes/reservations')
const loginRouter = require('./routes/login')
const logoutRouter = require('./routes/logout')

app.listen(port,() => {
  console.log(`Listening to port ${port}`)
})

app.use(cors({
  origin: 'https://earthbnb-react.onrender.com/'
}));

app.use( express.json() )
app.use('/houses', housesRouter)
app.use('/users', usersRouter)
app.use('/reservations', reservationsRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
