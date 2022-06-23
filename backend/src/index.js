const express = require('express')
const cors = require('cors')

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())
app.post('/reverse', (req, res) => {
  const { text } = req.body
  const reverse = text.split('').reverse().join('')
  res.json({
    text: reverse,
  })
})

app.listen(port, () => console.log('server running'))
