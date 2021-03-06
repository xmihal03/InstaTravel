const express = require('express')
const bodyParser = require('body-parser')
const HttpError = require('./models/http-error')
const placesRoutes = require('./routes/places-routes')
const usersRoutes = require('./routes/users-routes')
require('dotenv').config()

const app = express()
const mongoose = require('mongoose')

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
  next()
})

app.use('/api/places', placesRoutes)

app.use('/api/users', usersRoutes)

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route', 404)
  throw error
})

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error)
  }
  res.status(error.code || 500)
  res.json({ message: error.message || 'Something went wrong!' })
})

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    app.listen(5000)
  })
  .catch((err) => {
    console.error(err)
  })
