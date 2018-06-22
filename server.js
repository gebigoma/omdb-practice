require('dotenv').config()

const 
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  axios = require('axios'),
  PORT = 3000

app.listen(PORT (err) => {
  console.log(err || `Server running on ${PORT}`)
})