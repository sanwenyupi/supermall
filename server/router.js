const express = require('express')
const router = express.Router()
const db = require('./db.js')
// 登录注册处理
let login = (req, res) => {
    let username = req.body.username
    let pwd = req.body.password
        // 查询语句
    let sql = `select * from user where username = "${username}"`
    db.base(sql, username, (result, error) => {
        if (!result.length) {
            return res.json({ 
              status: 0, 
              msg: '登录失败' 
            })
        } else {
            if (result[0].password == pwd) {
                return res.json({ 
                  status: 1, 
                  msg: '登录成功',
                  user: result[0].username
                })
            }
            return res.json({ 
              status: -1, 
              msg: '密码错误' 
            })
        }
    })
}
let register = (req, res) => {
    let username = req.body.username
    let pwd = req.body.password
        // 插入语句
    let sql = `insert into user (username, password) values ("${username}","${pwd}")`
    try {
        db.base(sql, [username, pwd], (result, error) => {
            if (error) {
                console.log(result)
                console.log(error + "12345323")
                return res.json({ 
                  status: 0, 
                  msg: '注册失败，用户已存在，请重新注册！'
                })
            } else {
                return res.json({ 
                  status: 1, 
                  msg: "注册成功，请登录！" 
                })
            }
        })
    } catch (err) {
        console.log(err)
    }
}

router.post('/api/login', login)
router.post('/api/register', register)

module.exports = router
