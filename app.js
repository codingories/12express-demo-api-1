const express = require('express')
const app = express()
const fn1 = require('./fn1')



app.set('views', 'ories')
app.set('view engine', 'ejs')

app.get('/users/:id',(request, response, next)=>{
  console.log('request.param')
  console.log(request.param)
  console.log('request.acceptsLanguages')
  console.log(request.acceptsLanguages('JP'))
  response.send('hi')
  next()
})


app.listen(3000,()=>{
  console.log('listen 成功')
})
