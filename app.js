const express = require('express')
const app = express()
const fn1 = require('./fn1')



app.set('views', 'ories')
app.set('view engine', 'ejs')

app.get('/test',(req, res, next)=>{
  console.log('fuck')
  // res.status(301)
  // res.location('/frank')
  res.redirect('/frank')
  res.end()
})

app.get('/frank',(req, res, next)=>{
  res.send('fran1k')
  res.end()
})


app.listen(3000,()=>{
  console.log('listen 成功')
})
