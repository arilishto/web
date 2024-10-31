const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hi!')
})

app.get('/registration', (req, res) => {
  res.sendFile("project.html", {root: path.join(__dirname)})
})

app.get('/ola', (req, res) => {
  res.send('ola!')
})

app.get('/hei', (req, res) => {
  res.status(200).send('hei! GET request received')
})

app.post('/hei', (req, res) => {
  res.status(202).send('hei! POST request received')
})

app.put('/hei', (req, res) => {
  res.status(204).send('hei! PUT request received')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})