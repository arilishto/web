const express = require('express')
const path = require("path")
const fs = require("fs")
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
  res.send('hi!')
})

app.get('*', (req, res) => {
  res.sendFile("project.html", {root: path.join(__dirname, 'public')})
})

app.post('/reg-data', (req, res) => {
  console.log(">>>>>>>>>>>>>", req.body)
  fs.appendFile("data.txt", JSON.stringify(req.body), (err)=>{
    if(err) {
      res.status(500).send("user not added")
    } else {
      res.status(201).send("user added")
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})