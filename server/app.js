const express = require('express')
const app = express()
const router = require('./router.js')

app.use('/api/*', function(req, res, next){

  res.header('Access-Control-Allow-Origin', "*");
  res.header("Access-Control-Allow-Methods", "POST,GET");
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  next()
})
app.use(express.urlencoded({ extended: false }))
    // 处理json格式的参数
app.use(express.json())

app.use(router)

app.listen('4000', function(){
  console.log('服务器启动..');
})