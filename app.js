const express = require('express')
const app = express()

app.use((request, response, next)=>{
  console.log('request.body')
  console.log(request.body)
  response.send('hi')
  request.on('data',(chunk)=>{
    console.log(chunk.toString())
  })
  next()
})

app.listen(3000,()=>{
  console.log('listen 成功')
})
