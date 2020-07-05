const express = require('express')
const app = express()
const fn1 = require('./fn1')



app.set('views', 'ories')
app.set('view engine', 'ejs')

app.get('/test',(request, res, next)=>{
  res.format({
    'text/plain': function () {
      res.send('hey')
    },

    'text/html': function () {
      res.send('<p>hey11</p>')
    },

    'application/json': function () {
      res.send({ message: 'hey' })
    },

    default: function () {
      // log the request and respond with 406
      res.status(406).send('Not Acceptable')
    }
  })
})


app.listen(3000,()=>{
  console.log('listen 成功')
})
