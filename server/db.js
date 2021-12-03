let mysql = require('mysql')
exports.base = (sql, data, callback) => {
    let connection = mysql.createConnection({
        host: 'localhost', //本机连接不用改动
        user: 'root', //root用户一般默认都有，可以不改
        password: '', 
        database: 'test' 
    })
    connection.connect(err => {
      if(err) throw err;
      console.log('数据库连接');
    });

    connection.query(sql, data, (error, results, fields) => {
        if (error) {
            console.log(error)
        }
        console.log(results)
        callback && callback(results, error)
    })
    connection.end();
}
