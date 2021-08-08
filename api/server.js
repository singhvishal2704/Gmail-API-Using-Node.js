const express = require('express')
const colors = require('colors')
const mailRoutes = require('./routes/mailRoutes')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

// Body parser middleware
app.use(express.json())

// Mail send api Route
app.use('/api/mail', mailRoutes)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)