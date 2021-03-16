const express = require('express')
const app = express()
const port = 3001
const sql = require('mssql')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/mohibbur', (req, res) => {
  res.send('Mohibbur Rahman!')
})

app.get('/taifur', (req, res) => {
  res.send('Taifur Rahman!')
})

var index = require('./route/index.route');

app.use('/', index);

app.listen(port, () => {
  console.log(`Dataserver API listening at http://localhost:${port}`)
})