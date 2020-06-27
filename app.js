const express = require('express')
const app = express()

app.use((request, response, next)=>{
  response.send('hi')
  next()
})

app.listen(3000,()=>{
  console.log('listen 成功')
})
