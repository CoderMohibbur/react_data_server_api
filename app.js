const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/mohibbur', (req, res) => {
  res.send('Mohibbur Rahman!')
})

app.get('/taifur', (req, res) => {
  res.send('Taifur Rahman!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})