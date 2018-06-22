require('dotenv').config()

const 
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  axios = require('axios'),
  PORT = 3000

const apiClient = axios.create()

app.use(express.static('public'))

app.get('/search/:term', (req, res) => {
  const apiUrl= `http://www.omdbapi.com/?s=${req.params.term}&apikey=${process.env.API_KEY}`
  apiClient({ method: "get", url: apiUrl}).then((apiResponse) => {
    let results = ''
    apiResponse.data.Search.forEach((r) => {
      const posterImg = r.Poster
      results += `<img src="${posterImg}">`
    })
    res.send(results)
    // console.log(apiResponse.search[0].poster)
  })
})

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}`)
})