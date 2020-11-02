const express = require('express')
const Server = express()
const bodyParser = require('body-parser')

Server.use(bodyParser.urlencoded({extended: false}))
Server.use(bodyParser.json())

Server.post("/", (req, res) => {
  console.log(req)
  res.send('hay')
})

Server.listen(9000, () => {
  console.log('server listening in port 9000')
})