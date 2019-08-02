import express from 'express'

const app = express()
const port = 10111

app.use(express.static('wrapper'))
app.use('/modules', express.static('modules'))

app.use('/cart', function (req, res) {
  res.sendFile(__dirname + '/wrapper/index.html')
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
