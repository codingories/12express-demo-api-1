const express = require('express')
const app = express()
const fn1 = require('./fn1')



app.set('views', 'ories')
app.set('view engine', 'ejs')

app.get('/test',(request, response, next)=>{
  response.set('X-Frank','yes')
  response.status('401')
  response.append('X-Frank','yes2')
  response.send('hi')
  next()
})


app.listen(3000,()=>{
  console.log('listen 成功')
})
