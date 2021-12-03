const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'test' 
})
db.connect(err => {
  if(err) throw err;
  console.log('数据库连接成功');
})
app.get('/login', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  
  // let username = req.body.username
  // let password = req.body.password
  // console.log(username, password);
  let sql = 'select * from user where username = "txf"' 
  db.query(sql, (err, result) => {
    if(err){
      console.log(err);
    }else{
      console.log(result[0].username);
      res.send('登录成功')
      // if(result[0].username == username && result[0].password == password){
      //   console.log('登录成功');
      //   res.send('登录成功')
      // }
    }
  })
})


app.listen(4000, () => {
  console.log('服务器开启');
})
