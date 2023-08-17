require('./database/mongoose')
const express = require('express')
const app = express()
const port = 3000
const housesRouter = require('./routes/houses')
const House = require("./database/House_schema")

app.listen(port,() => {
  console.log('Listening to port 3000')
})

app.use( express.json() )
// app.use('/houses', housesRouter)

run()
async function run() {
  const house = await House.create({
    house_name: 'Cozy Cottage',
    address: '123 Main Street, City',
    rooms: 3,
    beds: 2,
    picture: 'https://dam-assets.au.reastatic.net/images/w_2000,h_1500/v1666226657/news-lifestyle-content-assets/wp-content/production/image-10_787815ed2d9/image-10_787815ed2d9.jpg?_i=AA',
    price_by_night: 100.0,
    description: 'A charming cottage nestled in a peaceful neighborhood.'
  })
  console.log(house);
  const housesFind = await House.find();
  console.log(housesFind);
}