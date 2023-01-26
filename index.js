const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://admin:admin@cluster0.xkbkibb.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

  
app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요~')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})