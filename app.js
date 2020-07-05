const express = require('express')
const app = express()
const fn1 = require('./fn1')
const user = require('./routes/user')


app.set('views', 'ories')
app.set('view engine', 'ejs')

app.use('/users', user)


app.listen(3000,()=>{
  console.log('listen 成功')
})
